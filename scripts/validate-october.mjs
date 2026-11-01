import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getNextPublishDate, formatPublishDate } from '../src/utils/date.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'src/issues/october2026.js'), 'utf8');
const match = source.match(/^const october2026Issue = ([\s\S]*);\n\noctober2026Issue.openingEntry.body = october2026Issue.preface;\n\nexport default october2026Issue;\n$/u);
assert.ok(match, 'October issue data must remain a plain JSON object export');
const issue = JSON.parse(match[1]);
issue.openingEntry.body = issue.preface;

const expectedSections = [
  ['1부: 누락', [
    ['누락', '백민재'], ['인생 작성 中', '김지우'], ['접힌 종이의 기억', '윤소민'],
    ['거울', '류현준'], ['미지의 괄호', '박도현'], ['무아몽중(無我夢中)', '류현준'],
    ['빛을 삼킨 밤의 일기', '윤소민'],
  ]],
  ['비평', [['우리가 서로를 누락하는 방식', '박민준']]],
  ['수필', [['클래식 크롬 : 색감이 만드는 인지적 여백의 마법', '이길상']]],
  ['2부: 자유', [
    ['더블플레이', '박도현'], ['얼굴', '박민재'], ['흔적', '양준희'], ['숨길 필요 없어', '양준희'],
    ['쓸쓸함의 온기가 기다림', '겨울제이'], ['백색 심해', '윤소민'],
    ['같은 자리에서, 숨을 이어간다', '겨울제이'],
  ]],
  ['특집: 천일중학교', [
    ['다섯 악마', '궓뚫쉒땒 (1-6)'], ['험난했던 저승길', '하은서 (1-2)'],
    ['대마법사', '최승준 (1-3)'], ['노력의 결과', '어린왕자 (1-1)'],
    ['흉터', '김강민 (1-1)'], ['리더라는 것', '최하연 (1-6)'],
  ]],
  ['에필로그', [['어제의 점심', '박민준']]],
  ['맺음말', [['맺음말', '새결 일동']]],
];

assert.equal(issue.id, 'saegyeol-2026-10-nurak');
assert.equal(issue.slug, '2026-10-nurak');
assert.equal(issue.title, '2026년 10월호');
assert.equal(issue.theme, '누락');
assert.equal(issue.archiveSummary, '시 14편 · 비평 1편 · 수필 1편 · 특집 6편 · 통권 6호');
assert.deepEqual(issue.editors, ['박민준', '양준희']);
assert.equal(issue.pdfPath, '/saegyeol-2026-10-nurak.pdf');
assert.ok(fs.existsSync(path.join(root, 'public', 'saegyeol-2026-10-nurak.pdf')));
assert.equal(issue.sections.length, expectedSections.length);

const workCounts = issue.sections.flatMap(({ title, works }) => works.map((work) => ({ section: title, type: work.type })));
assert.equal(workCounts.filter(({ type }) => type === '시').length, 14, 'poem count');
assert.equal(workCounts.filter(({ section }) => section === '비평').length, 1, 'criticism count');
assert.equal(workCounts.filter(({ section }) => section === '수필').length, 1, 'essay count');
assert.equal(workCounts.filter(({ section }) => section === '특집: 천일중학교').length, 6, 'special feature count');

const appSource = fs.readFileSync(path.join(root, 'src', 'App.jsx'), 'utf8');
assert.match(appSource, /import \{ getNextPublishDate, formatPublishDate \} from "\.\/utils\/date";/u);
const homeSource = appSource.slice(appSource.indexOf('function HomePage()'), appSource.indexOf('function AnimatedTitle()'));
assert.match(homeSource, /const nextPublishDate = getNextPublishDate\(\);/u);
assert.match(homeSource, /<CountdownTimer targetDate=\{nextPublishDate\} \/>/u);
assert.doesNotMatch(homeSource, /nextPublishDate\s*&&/u, 'countdown must not disappear when a dated issue field is absent');
const nextPublishDate = getNextPublishDate(new Date('2026-11-02T00:00:00+09:00'));
assert.equal(formatPublishDate(nextPublishDate), '2026년 11월 30일');
assert.equal(nextPublishDate.toISOString(), '2026-11-29T15:00:00.000Z', 'monthly deadline is midnight KST');
const timerSource = appSource.slice(appSource.indexOf('function CountdownTimer('), appSource.indexOf('function IssuePage()'));
assert.match(timerSource, /window\.setInterval\([^,]+, 1000\)/u, 'timer must continue ticking');
const remainingSource = appSource.slice(appSource.indexOf('function getRemainingTime('), appSource.indexOf('function getKoreaDateStart('));
assert.match(remainingSource, /Math\.max\(0, diff\)/u, 'expired timer values must not become negative');
const styleSource = fs.readFileSync(path.join(root, 'src', 'styles.css'), 'utf8');
assert.match(styleSource, /\.sg-countdown\s*\{/u, 'legacy countdown styles must remain');
assert.match(styleSource, /\.sg-countdown-grid,\s*\.sg-issue-shelf,[\s\S]*?grid-template-columns: 1fr/u,
  'countdown and issue shelf retain their mobile layout');

for (const [index, [title, expectedWorks]] of expectedSections.entries()) {
  const section = issue.sections[index];
  assert.equal(section.title, title, `section ${index + 1} title/order`);
  assert.deepEqual(section.works.map(({ title: workTitle, author }) => [workTitle, author]), expectedWorks,
    `${title} title/author/order`);
}

const entries = [issue.openingEntry, ...issue.editorNotes.map((note) => ({ ...note, title: '편집위원의 말' })), ...issue.sections.flatMap(({ works }) => works)];
assert.equal(entries.length, 27, 'the issue must contain exactly 27 content entries');
assert.equal(new Set(entries.map(({ id }) => id)).size, 27, 'content IDs/slugs must be unique');
for (const entry of entries) {
  assert.ok(entry.id && entry.title && entry.author, `metadata missing for ${entry.id || '(unknown)'}`);
  assert.ok(entry.body.trim().length >= 60, `body missing or incomplete for ${entry.title}`);
  assert.ok(!entry.body.includes('\uFFFD'), `replacement character in ${entry.title}`);
}

const edgeChecks = [
  ['preface-2026-10', '우리는 살아가면서 수많은 것을 지나칩니다.', '새결 일동'],
  ['editor-note-park-minjun', '무언가가 사라졌다는 사실은 언제 비로소 드러날까요.', '계기가 되기를 바랍니다.'],
  ['editor-note-yang-junhui', '성공한 삶을 우러러보는 사람들을 엿보았습니다.', '진심으로 소망합니다.'],
  ['baekminjae-nurak', '미소의 정도를 행복이라 이른다면', '누락해주세요.'],
  ['insaeng-jakseong-jung', '생각이 나지 않는다', "'존재하지 않음'으로 기입하였다"],
  ['jeophin-jongiui-gieok', '조용히 페이지가 한 장 넘어갔다.', '이미 무너져 내린 세계 그 자체이므로.'],
  ['geoul', '구석에 처박혀 울고 있는 아해(兒孩)가 있소.', '모두가 들을 수 있도록'],
  ['mijiui-gwalho', '그림자 아래 세계의 희망은', '(.......)'],
  ['muamongjung', '나룻배가 휘청거린다.', '사무 바다 밑도 나쁘지 않다는 생각이 든다.'],
  ['bicheul-samkin-bam-ui-ilgi', '밤길을 걸어 본 이는 안다.', '내가 가두어 둔 태양의 얼굴이었음을.'],
  ['uri-ga-seororeul-nurakhaneun-bangsig', '어제 점심에 무엇을 먹었는지 기억나지 않는 날이 있다.', '잠시 뒤 그 자리에 다른 사람이 앉는다.'],
  ['classic-chrome', '드라마 <경도를 기다리며>를 보면서', '있는 모델이기 때문이다.'],
  ['double-play', '강하게 던졌고', '꺼져버렸다'],
  ['eolgul', '사람은 정말 사랑한 것을 닮게되는 것일까', '사실만이 서글프다'],
  ['heunjeok', '저기요, 저기요, 여기가 도대체 어디인가요', '상처를 남기듯.'],
  ['sumgil-pilyo-eopseo', '머리로 읽히는 노오란 포스트잇이', '꺼진 구덩이 하나쯤은 있으니.'],
  ['ssulsseulham-ui-ongi-ga-gidarim', '기다림은', '따뜻한 기억으로 남아 있기를 바랍니다.'],
  ['baeksaek-simhae', '수면 위로 치솟던 포말이 멈춰버린', '비로소 나를 완성하는 밤'],
  ['gateun-jarieseo-sumeul-ieoganda', '같은 자리에 앉아', '내 안에서 숨을 쉬어요.'],
  ['daseot-agmaui', '나는 시험을 볼 때만 되면 다섯 악마로 변한다.', '다섯 악마가 되고 만다.'],
  ['heomnanhaetdeon-jeoseunggil', '5월 8일 나는 현장체험학습으로 롯데월드에 갔다.', '앞으로도 여러 가지를 시도해 봐야지!'],
  ['daemabeopsa', '나는 대마법사가 되고 싶은 마법사다.', '비가 오는 마법은 대마법사가 되어야 할 수 있는데…'],
  ['noryeog-ui-gyeolgwa', '드디어 그날이 되었다.', '나의 대회는 끝이 났다.'],
  ['hyungteo', '유치원은 나에게 뚜렷하게 기억에 남진 않지만', '자리잡고 있다.'],
  ['lideoraneun-geot', '‘밴드 하고 싶다.’ 2025년 11월 19일', '아름다운 추억으로 남을 것 같다.'],
  ['eoje-ui-jeomsim', '어제 점심에 무엇을 먹었는지 기억나지 않는다.', '거리는 그를 기억하지 않은 채 어두워졌다.'],
  ['maeum-mal', '한 권의 책을 마무리할 때면', '새결 일동'],
];
const byId = new Map(entries.map((entry) => [entry.id, entry]));
assert.equal(edgeChecks.length, 27);
for (const [id, first, last] of edgeChecks) {
  const body = byId.get(id)?.body.normalize('NFC');
  assert.ok(body, `missing content entry ${id}`);
  assert.ok(body.startsWith(first.normalize('NFC')), `first line mismatch: ${id}`);
  assert.ok(body.endsWith(last.normalize('NFC')), `last line mismatch: ${id}`);
}

const allText = entries.map(({ title, author, body }) => `${title}\n${author}\n${body}`).join('\n');
for (const marker of ['無我夢中', '兒孩', '漏落', '不在', '浮游', '無']) {
  assert.ok(allText.includes(marker), `missing preserved Hanja: ${marker}`);
}

console.log('October 2026 issue validation passed: 27 entries, ordered manifest, unique IDs, bodies, edge markers, PDF and Hanja.');
