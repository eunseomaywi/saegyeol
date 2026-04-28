import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  likes: "saegyeol_likes_v2",
  likeCounts: "saegyeol_like_counts_v1",
  saved: "saegyeol_saved_v2",
};

export const poets = [
  {
    id: "yun-seoha",
    name: "윤서하",
    role: "편집위원",
    bio: "윤서하는 새결의 첫 문장과 마지막 여백을 함께 살피는 편집위원입니다. 지나치게 설명하지 않는 문장, 오래 남는 침묵, 낮은 목소리의 리듬을 중요하게 여깁니다. 독자가 시를 읽는 속도를 존중하는 지면을 만들고자 하며, 짧은 시 안에서도 생활의 깊은 결을 발견합니다.",
    keywords: ["여백", "새벽", "낮은 목소리"],
    quote: "빛은 오래 머뭇거리다 끝내 한 줄의 물결이 되었다.",
  },
  {
    id: "han-igyeol",
    name: "한이결",
    role: "편집위원",
    bio: "한이결은 감각의 밀도와 지면의 질서를 함께 다루는 편집위원입니다. 일상에서 흘려보내기 쉬운 장면을 붙잡아 문장의 호흡으로 정돈합니다. 새결 안에서 기고자의 개별적인 결이 흐려지지 않도록, 작품의 리듬과 배열을 세심하게 조율합니다.",
    keywords: ["종이", "오후", "편집"],
    quote: "우리는 완성보다 오래 머무는 질서를 믿는다.",
  },
  {
    id: "moon-haerin",
    name: "문해린",
    role: "기고가",
    bio: "문해린은 밤과 호흡, 오래 지워지지 않는 이름들을 주로 씁니다. 선명한 사건보다 사건 이후에 남는 감각에 관심이 많습니다. 그의 시는 조용하지만 쉽게 닫히지 않고, 독자가 자기 기억을 천천히 겹쳐 읽을 수 있는 여지를 남깁니다.",
    keywords: ["밤", "호흡", "기억"],
    quote: "밤은 늘 긴 숨으로 온다.",
  },
  {
    id: "seo-doyun",
    name: "서도윤",
    role: "기고가",
    bio: "서도윤은 도시의 거리감과 닿지 못한 마음을 맑은 문장으로 옮깁니다. 멀리 있는 사람에게 보내는 편지처럼, 그의 시는 말보다 여백을 먼저 건넵니다. 차가운 풍경 안에서도 다정함이 사라지지 않는 순간을 오래 바라봅니다.",
    keywords: ["도시", "편지", "거리"],
    quote: "우리는 서로의 여백을 오래 바라본다.",
  },
  {
    id: "lee-ruan",
    name: "이루안",
    role: "기고가",
    bio: "이루안은 긴 호흡의 산문성과 시의 압축 사이를 오갑니다. 저녁, 찻잔, 창문처럼 익숙한 사물에서 마음이 머무는 방식을 발견합니다. 그의 작품은 느리게 읽을수록 선명해지는 구조를 갖고 있어, 새결의 독서 경험과 잘 맞닿아 있습니다.",
    keywords: ["저녁", "긴 호흡", "생활"],
    quote: "여백은 돌아올 마음을 위해 남겨둔 가장 조용한 의자.",
  },
  {
    id: "jung-haon",
    name: "정하온",
    role: "기고가",
    bio: "정하온은 계절의 변화와 작은 빛의 방향을 기록합니다. 지나간 것들을 과장하지 않고, 남은 온도만 조용히 문장 안에 들입니다. 그의 시는 짧은 장면으로 시작해 독자의 하루 속에서 천천히 길어지는 잔상을 만듭니다.",
    keywords: ["계절", "빛", "잔상"],
    quote: "계절은 끝날 때마다 뒤표지를 남긴다.",
  },
];

export const poems = [
  {
    id: "saegyeol-poem-001",
    poetId: "yun-seoha",
    title: "물결의 첫 문장",
    author: "윤서하",
    body: ["아직 아무도 펼치지 않은 아침에", "나는 젖은 문장을 하나 놓아두었다.", "", "바람은 그것을 읽지 않고 지나갔고", "빛은 오래 머뭇거리다", "끝내 한 줄의 물결이 되었다."],
    description: "아직 쓰이지 않은 아침을 건너는 짧은 시.",
    tags: ["새벽", "물결", "첫문장"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-002",
    poetId: "han-igyeol",
    title: "종이의 오후",
    author: "한이결",
    body: ["책상 위에 남은 햇빛을 접으면", "오늘은 조금 얇아진다.", "", "말하지 못한 마음들이", "종이의 결 사이로 내려앉고", "나는 그 조용한 무게를 읽는다."],
    description: "햇빛과 말하지 못한 마음이 접히는 오후의 기록.",
    tags: ["오후", "종이", "기록"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-003",
    poetId: "moon-haerin",
    title: "긴 숨",
    author: "문해린",
    body: ["밤은 늘 긴 숨으로 온다.", "불 꺼진 창마다", "누군가의 이름이 희미하게 걸린다.", "", "나는 지워지지 않는 것들만 골라", "작은 호흡으로 다시 적는다."],
    description: "긴 밤을 지나며 끝내 지워지지 않는 이름들.",
    tags: ["숨", "밤", "머무름"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-004",
    poetId: "seo-doyun",
    title: "낮은 파란색",
    author: "서도윤",
    body: ["멀리 있는 마음은", "늘 낮은 파란색으로 번진다.", "", "닿지 못한 편지들이", "거리의 끝에서 접히고", "우리는 서로의 여백을 오래 바라본다."],
    description: "멀리 있는 마음이 파란 여백으로 번지는 편지.",
    tags: ["도시", "편지", "거리"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-005",
    poetId: "lee-ruan",
    title: "여백의 속도",
    author: "이루안",
    body: ["저녁은 늘 같은 속도로 내려오지 않는다.", "어떤 날의 저녁은 문턱에 앉아", "신발 끈을 오래 묶고", "어떤 날의 저녁은 이미 방 안 깊숙한 곳에서", "우리의 이름을 낮게 불러본다.", "", "나는 식어가는 찻잔 옆에 앉아", "오늘 하지 못한 말을 순서대로 접는다.", "첫 번째 접힌 말은 미안하다는 말이고", "두 번째 접힌 말은 괜찮다는 말이고", "세 번째 접힌 말은", "사실은 오래 괜찮지 않았다는 말이다.", "", "창밖의 나무들은 서로에게 기대지 않고도 흔들린다.", "그 장면을 오래 바라보면", "사람도 가끔은 멀리서만 서로를 지킬 수 있다는 생각이 든다.", "", "여백은 비어 있는 자리가 아니라", "돌아올 마음을 위해 남겨둔 가장 조용한 의자.", "나는 그 의자 하나를 밤 쪽으로 조금 밀어두고", "다시 읽히기를 기다리는 문장처럼", "천천히 어두워진다."],
    description: "조금 긴 호흡으로 읽는 새결의 저녁 산책.",
    tags: ["긴시", "저녁", "여백"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-006",
    poetId: "jung-haon",
    title: "흰 창",
    author: "정하온",
    body: ["창문은 밤새 흰빛을 모아두었다.", "아침이 오자", "가장 먼저 먼지의 이름을 불렀다.", "", "나는 사라진 계절을 닦아내듯", "손바닥으로 빛의 가장자리를 쓸었다."],
    description: "작은 빛과 지나간 계절이 만나는 장면.",
    tags: ["창", "빛", "계절"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-007",
    poetId: "yun-seoha",
    title: "새벽의 접힌 면",
    author: "윤서하",
    body: ["새벽은 늘 한쪽이 접힌 종이처럼 온다.", "펴지지 않은 면마다", "어제의 물소리가 남아 있다.", "", "나는 가장 조용한 귀퉁이에", "오늘의 이름을 작게 적는다."],
    description: "새벽의 여백과 아직 펴지지 않은 하루에 관한 시.",
    tags: ["새벽", "여백", "물결"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-008",
    poetId: "han-igyeol",
    title: "편집실의 빛",
    author: "한이결",
    body: ["낮은 책상 위로 빛이 내려앉으면", "문장들은 잠시 서로의 간격을 배운다.", "", "지워진 말 옆에 남은 말,", "그 옆에 다시 놓이는 쉼표 하나.", "", "우리는 완성보다 오래 머무는 질서를 믿는다."],
    description: "문장을 고르고 배열하는 시간에 대한 짧은 기록.",
    tags: ["편집", "빛", "종이"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-009",
    poetId: "moon-haerin",
    title: "밤의 아래쪽",
    author: "문해린",
    body: ["밤에는 아래쪽이 있다.", "그곳에 닿으면", "잊었다고 믿은 목소리들이 다시 젖는다.", "", "나는 불을 켜지 않고", "어둠의 결을 손끝으로 읽는다.", "", "사라진 이름들은 늘", "가장 늦게 도착한 숨처럼", "문 앞에 서 있다."],
    description: "밤의 깊은 면과 기억의 호흡을 더듬는 시.",
    tags: ["밤", "숨", "기억"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-010",
    poetId: "seo-doyun",
    title: "무채색 편지",
    author: "서도윤",
    body: ["도시는 오늘도 무채색으로 젖어 있었다.", "횡단보도 앞에서", "나는 보내지 못한 문장을 접었다.", "", "멀리 있는 사람에게는", "가끔 침묵이 더 정확한 주소가 된다.", "", "신호가 바뀌고", "사람들이 건너가고", "나는 편지의 빈칸만 들고 한참 서 있었다."],
    description: "도시의 거리감과 말하지 못한 편지를 다룬 시.",
    tags: ["도시", "편지", "침묵"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-011",
    poetId: "lee-ruan",
    title: "식탁의 저녁",
    author: "이루안",
    body: ["저녁 식탁에는 말보다 먼저 그릇이 놓인다.", "숟가락의 둥근 등 위로", "오늘의 피로가 잠깐 비친다.", "", "우리는 서로에게 묻지 않은 질문들을", "국물의 온도만큼 식혀둔다.", "", "창밖은 조금씩 어두워지고", "누군가는 물컵을 다시 채우고", "나는 그 사소한 소리들이", "하루를 끝까지 붙들고 있다는 것을 안다.", "", "생활은 늘 대단한 문장으로 오지 않는다.", "때로는 접힌 냅킨,", "남은 밥알,", "그리고 늦게 도착한 괜찮다는 말로 온다."],
    description: "생활의 낮은 장면에서 길어지는 저녁의 정서.",
    tags: ["저녁", "생활", "긴시"],
    likes: 0,
  },
  {
    id: "saegyeol-poem-012",
    poetId: "jung-haon",
    title: "계절의 뒤표지",
    author: "정하온",
    body: ["계절은 끝날 때마다 뒤표지를 남긴다.", "거기에는 줄거리 대신", "빛이 지나간 방향만 적혀 있다.", "", "나는 그 얇은 페이지를 넘기며", "돌아오지 않는 오후의 온도를 읽는다."],
    description: "지나간 계절이 남기는 빛과 온도에 대한 시.",
    tags: ["계절", "빛", "오후"],
    likes: 0,
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Poems", href: "#poems" },
  { label: "Poets", href: "#poets" },
  { label: "Submit", href: "#submit" },
  { label: "About", href: "#about" },
];

function readStorage(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getInitialLikeCounts() {
  const storedCounts = readStorage(STORAGE_KEYS.likeCounts, null);
  if (storedCounts) return storedCounts;

  const storedLikedPoems = readStorage(STORAGE_KEYS.likes, {});
  return Object.fromEntries(
    poems.map((poem) => [poem.id, storedLikedPoems[poem.id] ? 1 : poem.likes]),
  );
}

function getRelatedPoems(currentPoem) {
  const currentPoet = poets.find((poet) => poet.id === currentPoem.poetId);
  const moodWords = currentPoet?.keywords ?? [];

  return poems
    .filter((poem) => poem.id !== currentPoem.id)
    .map((poem) => {
      const samePoetScore = poem.poetId === currentPoem.poetId ? 4 : 0;
      const sharedTags = poem.tags.filter((tag) => currentPoem.tags.includes(tag)).length;
      const moodScore = poem.tags.filter((tag) => moodWords.includes(tag)).length;

      return {
        poem,
        score: samePoetScore + sharedTags * 2 + moodScore,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.poem.likes - a.poem.likes)
    .slice(0, 4)
    .map((item) => item.poem);
}

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedPoems, setLikedPoems] = useState(() => readStorage(STORAGE_KEYS.likes, {}));
  const [likeCounts, setLikeCounts] = useState(getInitialLikeCounts);
  const [savedPoems, setSavedPoems] = useState(() => readStorage(STORAGE_KEYS.saved, {}));
  const [openCommentId, setOpenCommentId] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.likes, JSON.stringify(likedPoems));
  }, [likedPoems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.likeCounts, JSON.stringify(likeCounts));
  }, [likeCounts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify(savedPoems));
  }, [savedPoems]);

  const filteredPoems = useMemo(() => {
    if (activeFilter === "saved") return poems.filter((poem) => savedPoems[poem.id]);
    if (activeFilter === "all") return poems;
    return poems.filter((poem) => poem.poetId === activeFilter);
  }, [activeFilter, savedPoems]);

  const savedList = useMemo(() => poems.filter((poem) => savedPoems[poem.id]), [savedPoems]);

  const toggleLike = (poemId) => {
    const wasLiked = Boolean(likedPoems[poemId]);
    setLikedPoems((current) => ({ ...current, [poemId]: !wasLiked }));
    setLikeCounts((current) => ({
      ...current,
      [poemId]: Math.max(0, (current[poemId] ?? 0) + (wasLiked ? -1 : 1)),
    }));
  };

  const toggleSave = (poemId) => {
    setSavedPoems((current) => ({ ...current, [poemId]: !current[poemId] }));
  };

  return (
    <>
      <Header />
      <main>
        <section id="home" className="sg-hero">
          <div className="sg-hero-inner">
            <p className="sg-hero-kicker">문학의 새로운 호흡</p>
            <h1>새로운 결의 문장들이 머무는 공간</h1>
            <div className="sg-hero-actions">
              <a href="#poems">시 읽기</a>
              <a href="#poets">시인 보기</a>
              <a href="#submit">기고하기</a>
            </div>
          </div>
        </section>

        <section id="poets" className="sg-section">
          <div className="sg-section-title">
            <p>Poets</p>
            <h2>새결을 이루는 여섯 개의 목소리</h2>
          </div>
          <PoetGroup title="편집위원" poets={poets.filter((poet) => poet.role === "편집위원")} variant="editors" />
          <PoetGroup title="기고가" poets={poets.filter((poet) => poet.role === "기고가")} variant="contributors" />
        </section>

        <section id="poems" className="sg-section sg-poems-section">
          <div className="sg-section-title">
            <p>Poems</p>
            <h2>한 편씩 천천히 이어지는 시의 피드</h2>
          </div>
          <PoetFilterTabs activeFilter={activeFilter} onChange={setActiveFilter} savedCount={savedList.length} />
          <div className="sg-poem-feed">
            {filteredPoems.length > 0 ? (
              filteredPoems.map((poem, index) => (
                <PoemCard
                  key={poem.id}
                  poem={poem}
                  index={index}
                  recommendations={getRelatedPoems(poem)}
                  liked={Boolean(likedPoems[poem.id])}
                  saved={Boolean(savedPoems[poem.id])}
                  likeCount={likeCounts[poem.id] ?? poem.likes}
                  isCommentsOpen={openCommentId === poem.id}
                  onToggleLike={() => toggleLike(poem.id)}
                  onToggleSave={() => toggleSave(poem.id)}
                  onToggleComments={() => setOpenCommentId((current) => (current === poem.id ? null : poem.id))}
                />
              ))
            ) : (
              <p className="sg-empty">이 조건에 맞는 시가 아직 없습니다.</p>
            )}
          </div>
        </section>

        <SavedPoems poems={savedList} onOpenPoems={() => setActiveFilter("saved")} />
        <SubmitForm />
        <section id="about" className="sg-section sg-about">
          <div className="sg-section-title">
            <p>About</p>
            <h2>새결은 하얀 지면 위에 동시대의 작은 목소리들을 차분히 배열하는 문예 공간입니다.</h2>
          </div>
        </section>
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="sg-header">
      <nav aria-label="주요 메뉴">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function PoetGroup({ title, poets: groupedPoets, variant }) {
  return (
    <section className={`sg-poet-group sg-poet-group-${variant}`}>
      <div className="sg-poet-group-title">
        <span>{variant === "editors" ? "Editorial Board" : "Contributors"}</span>
        <h3>{title}</h3>
      </div>
      <div className={`sg-poet-grid sg-poet-grid-${variant}`}>
        {groupedPoets.map((poet) => (
          <PoetCard key={poet.id} poet={poet} variant={variant} />
        ))}
      </div>
    </section>
  );
}

function PoetCard({ poet, variant }) {
  return (
    <article className={`sg-poet-card sg-poet-card-${variant}`}>
      <div className="sg-poet-meta">
        <h3>{poet.name}</h3>
        <span>{poet.role}</span>
      </div>
      <p>{poet.bio}</p>
      <blockquote>{poet.quote}</blockquote>
      <div className="sg-keywords">
        {poet.keywords.map((keyword) => (
          <span key={keyword}>#{keyword}</span>
        ))}
      </div>
    </article>
  );
}

function PoetFilterTabs({ activeFilter, onChange, savedCount }) {
  const tabs = [{ id: "all", label: "전체" }, ...poets.map((poet) => ({ id: poet.id, label: poet.name })), { id: "saved", label: `저장한 시 ${savedCount}` }];

  return (
    <div className="sg-filter-tabs" role="tablist" aria-label="시인별 작품 필터">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={activeFilter === tab.id ? "is-active" : ""}
          onClick={() => onChange(tab.id)}
          role="tab"
          aria-selected={activeFilter === tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function PoemCard({ poem, index, recommendations, liked, saved, likeCount, isCommentsOpen, onToggleLike, onToggleSave, onToggleComments }) {
  const sharePoem = async () => {
    const text = `새결 | ${poem.title} - ${poem.author}`;
    if (navigator.share) {
      await navigator.share({ title: text, text: poem.body.join("\n"), url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
  };

  const saveAsPdf = () => {
    // PDF_SAVE: jsPDF 없이도 Firebase Studio에서 바로 동작하도록 print 기반 PDF 저장을 제공합니다.
    // 브라우저 인쇄 창에서 "PDF로 저장"을 선택하면 새결 로고/이름, 제목, 시인, 본문, 태그가 포함됩니다.
    const printWindow = window.open("", "_blank", "width=720,height=900");
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <!doctype html>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>새결 - ${escapeHtml(poem.title)}</title>
          <style>
            body { margin: 48px; color: #202020; font-family: "Noto Serif KR", serif; line-height: 1.9; }
            .logo { font-family: sans-serif; font-size: 34px; font-weight: 700; letter-spacing: 0; }
            .tagline { margin: 0 0 44px; color: #666; font-family: sans-serif; }
            h1 { margin: 0; font-size: 30px; }
            .author { margin: 8px 0 32px; color: #555; font-family: sans-serif; }
            .body { white-space: pre-line; font-size: 18px; }
            .tags { margin-top: 36px; color: #555; font-family: sans-serif; }
          </style>
        </head>
        <body>
          <div class="logo">새결</div>
          <p class="tagline">문학의 새로운 호흡</p>
          <h1>${escapeHtml(poem.title)}</h1>
          <p class="author">${escapeHtml(poem.author)}</p>
          <div class="body">${escapeHtml(poem.body.join("\n"))}</div>
          <p class="tags">${escapeHtml(poem.tags.map((tag) => `#${tag}`).join(" "))}</p>
          <script>window.onload = function () { window.print(); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <article className="sg-poem-card" id={poem.id}>
      <div className="sg-poem-paper">
        <div className="sg-poem-head">
          <span>{String(index + 1).padStart(2, "0")} / the_saegyeol</span>
          <span>{poem.author}</span>
        </div>
        <h3>{poem.title}</h3>
        <div className="sg-poem-body" aria-label={`${poem.title} 본문`}>
          {poem.body.map((line, index) => (line ? <p key={index}>{line}</p> : <br key={index} />))}
        </div>
        <p className="sg-poem-desc">{poem.description}</p>
        <div className="sg-tags">
          {poem.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="sg-poem-actions" aria-label={`${poem.title} 액션`}>
        <button type="button" className={liked ? "is-active" : ""} onClick={onToggleLike}>
          <span>{liked ? "♥" : "♡"}</span>
          <small>{likeCount}</small>
        </button>
        <button type="button" className={isCommentsOpen ? "is-active" : ""} onClick={onToggleComments}>
          <span>말</span>
          <small>댓글</small>
        </button>
        <button type="button" className={saved ? "is-active" : ""} onClick={onToggleSave}>
          <span>{saved ? "▣" : "□"}</span>
          <small>저장</small>
        </button>
        <button type="button" onClick={saveAsPdf}>
          <span>PDF</span>
          <small>저장</small>
        </button>
        <button type="button" onClick={sharePoem}>
          <span>↗</span>
          <small>공유</small>
        </button>
      </div>
      <RelatedPoems recommendations={recommendations} />
      {isCommentsOpen && <DisqusComments poem={poem} />}
    </article>
  );
}

function RelatedPoems({ recommendations }) {
  if (!recommendations.length) return null;

  return (
    <aside className="sg-related" aria-label="관련 시 추천">
      <h4>관련 시</h4>
      <div className="sg-related-list">
        {recommendations.map((poem) => (
          <a key={poem.id} href={`#${poem.id}`} className="sg-related-card">
            <span>{poem.author}</span>
            <strong>{poem.title}</strong>
            <p>{poem.body.filter(Boolean).slice(0, 2).join(" / ")}</p>
          </a>
        ))}
      </div>
    </aside>
  );
}

function SavedPoems({ poems: savedItems, onOpenPoems }) {
  return (
    <section id="saved" className="sg-section sg-saved">
      <div className="sg-section-title">
        <p>Saved</p>
        <h2>저장한 시</h2>
      </div>
      {savedItems.length ? (
        <div className="sg-saved-grid">
          {savedItems.map((poem) => (
            <a key={poem.id} href={`#${poem.id}`} onClick={onOpenPoems}>
              <span>{poem.author}</span>
              <strong>{poem.title}</strong>
              <small>{poem.tags.map((tag) => `#${tag}`).join(" ")}</small>
            </a>
          ))}
        </div>
      ) : (
        <p className="sg-empty">아직 저장한 시가 없습니다. 마음에 남는 시의 저장 버튼을 눌러 북마크하세요.</p>
      )}
    </section>
  );
}

function SubmitForm() {
  return (
    <section id="submit" className="sg-section sg-submit">
      <div className="sg-section-title">
        <p>Submit</p>
        <h2>당신의 문장이 새결에 닿는 자리</h2>
      </div>
      <form className="sg-submit-form" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
        <label>이름 또는 필명<input name="name" type="text" required placeholder="예: 새결" /></label>
        <label>이메일<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>작품 제목<input name="workTitle" type="text" required placeholder="작품 제목" /></label>
        <label>작품 내용<textarea name="workBody" rows="9" required placeholder="작품을 입력해주세요." /></label>
        <label>간단한 자기소개<textarea name="bio" rows="4" placeholder="작가 소개 또는 기고 의도를 남겨주세요." /></label>
        <button type="submit">기고하기</button>
      </form>
    </section>
  );
}

function DisqusComments({ poem }) {
  useEffect(() => {
    window.disqus_config = function disqusConfig() {
      this.page.url = `${window.location.origin}${window.location.pathname}#${poem.id}`;
      this.page.identifier = poem.id;
      this.page.title = `새결 - ${poem.title}`;
    };

    const existingScript = document.getElementById("disqus-script");
    if (existingScript && window.DISQUS) {
      window.DISQUS.reset({ reload: true, config: window.disqus_config });
      return;
    }

    const script = document.createElement("script");
    script.id = "disqus-script";
    script.src = "https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js";
    script.setAttribute("data-timestamp", `${Date.now()}`);
    document.body.appendChild(script);
  }, [poem]);

  return (
    <section className="sg-comments" aria-label={`${poem.title} 댓글`}>
      <div>
        <p>Comments</p>
        <strong>{poem.title}</strong>
        <span>identifier: {poem.id}</span>
      </div>
      <div id="disqus_thread">
        <p>댓글을 불러오는 중입니다.</p>
      </div>
    </section>
  );
}

export default App;
