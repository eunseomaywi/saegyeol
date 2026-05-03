import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

const DISQUS_SHORTNAME = import.meta.env.VITE_DISQUS_SHORTNAME || "saegyeol";
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "mrejeyvg";

export const poets = [
  {
    id: 1,
    name: "양준희",
    role: "편집위원",
    bio: `[새결 : 편집위원, 시인 양준희]

나는 성찰하는 시인이다.

문예지 <새결>의 편집위원 양준희입니다.

해가 뜨고 지는 순간 사이, 우리는 저마다의 흔적을 남깁니다. 때로는 그 흔적들이 가슴속에 남는 빛이 되기도 하고, 때로는 지저분한 낙서가 되어 우리의 삶을 어지럽히기도 합니다. 그런 순간들을 두 눈으로 마주하며, 저는 “과연 부끄럼 없이 살아왔는가”라는 질문을 스스로에게 던지곤 했습니다. 오래 머문 생각 끝에, 저 역시도 얼룩진 삶을 사는 사람이란 것을 깨닫게 되었습니다. 그래서 저에게 문학이란, 시린 발자국을 글자로 아로새기며 인간적인 성장을 기록하기 위한 하나의 일기입니다.

이제 저는 <새결>이라는 이름 아래, 지나온 시간을 성찰하고, 아직 쓰이지 않은 문장들을 노래하고자 합니다.`,
    representativeLine: "나는 성찰하는 시인이다.",
  },
  {
    id: 2,
    name: "박민준",
    role: "편집위원",
    bio: `[새결 : 편집위원, 시인 박민준]

나는 머무는 시인이다.

문예지 <새결>의 첫 문을 여는 편집위원 박민준입니다.

무언가를 설명하려다 그만둔 자리에서 저의 시는 시작되었습니다. 감정에 이름을 붙이는 순간, 그것이 본래의 색을 잃고 조금씩 다른 것이 되어버린다는 느낌을 지울 수 없었습니다. 그래서 서둘러 결론을 내리는 대신, 그 막막한 상태 그대로 ‘머무는 쪽’을 택했습니다.

이제 저는 <새결>이라는 공간에서, 당신의 문장 곁에 가만히 닻을 내리려 합니다.`,
    representativeLine: "나는 머무는 시인이다.",
  },
  {
    id: 3,
    name: "김요환",
    role: "기고가",
    bio: `[새결 : 기고가, 시인 김요환]

나는 단순한 시인이다.

문예지 <새결>의 기고가 김요환입니다.

시는 사람들에게 접근성이 비교적 떨어지는 문학 갈래가 아닐까 싶습니다. 시의 어려운 어휘나 복잡한 사상은 필연적이지 않습니다. 저는 오히려 시가 가볍게 즐기고 쉽게 공감할 수 있는 매체가 될 수 있다고 믿습니다.

이제 저는 <새결>이라는 이름 아래, 시의 통념적 모습을 재정의하며, 기교를 대신한 유머와 단순성이 어떤 파장을 일으킬 수 있는지 증명하고자 합니다.`,
    representativeLine: "나는 단순한 시인이다.",
  },
  {
    id: 4,
    name: "심율",
    role: "기고가",
    bio: `[새결: 기고가, 작가 심율]

나는 탐구하는 작가다.

문예지 <새결>의 기고가 심율입니다.

글을 쓰기 시작한지 아직 일 년이 다 안 되었습니다. 아직 완성한 글도 없습니다. 미숙한 단어들을 문장으로 옮기다 보면, 대개 두어 가지 이상의 상이한 결론들을 맞이합니다. 섣부른 선호를 제외하고는, 그것들 중 어느것이 더 나은가에 대해서 아직 결론을 짓지 못 했습니다. 하여, 나의 글은 초고입니다. 초고로 남겨두기로 하였습니다.

새결의 우리는 신세대입니다. 존재하지 않는 완성을 향해 나아갑니다. 나 또한 그렇습니다.`,
    representativeLine: "나는 탐구하는 작가다.",
  },
  {
    id: 5,
    name: "박도현",
    role: "기고가",
    bio: `[새결 : 기고가, 시인 박도현]

나는 곁을 밝히는 시인이다.

문예지 <새결>의 기고가 박도현입니다.

매일 비슷한 하루 속에서 만난 수많은 사람과 인연들은 제 안에서 얽히고 이어지며 꺼지지 않는 빛이 되었습니다. 저는 복잡한 관계와 상처 속에서도 결국 빛을 찾아내는 사람이기를 원합니다. 금이 간 자리에 조용히 금(金)을 입혀 새로운 의미를 덧칠해 내는 일, 그것이 제가 글을 쓰는 이유입니다.

이제 저는 <새결>이라는 공간에서, 당신조차 미처 발견하지 못했던 당신 안의 아름다움에 조용히 금빛 문장을 더하고자 합니다.`,
    representativeLine: "나는 곁을 밝히는 시인이다.",
  },
  {
    id: 6,
    name: "윤소민",
    role: "기고가",
    bio: `[새결 : 기고가, 작가 윤소민]

나는 흉터를 문장으로 빚는 작가다.

문예지 <새결>의 기고가 윤소민입니다.

모두가 완성된 문장에 마침표를 찍고 돌아설 때, 저는 그 문장이 시작되기 전의 시간들을 서성여 봅니다. 화려하게 피어난 결과보다, 그 결을 빚어내기 위해 스스로를 깎아내고 닦달해야만 했던 치열한 시간의 흔적들에 제 마음은 더 오래 머물곤 합니다. 저에게 글을 쓰는 일은 마음의 굴곡을 문장이라는 손끝으로 가만히 훑어보는 과정입니다. 그렇게 저의 흉터를 정직하게 만져 내려간 기록들이, 언젠가 여러분의 숨겨진 상처 위로도 다정한 무늬처럼 겹쳐지길 바랍니다. 비록 그 과정이 때로는 시리고 아릿할지라도, 결국 그 굴곡들이 모여 우리 각자의 고유한 문양으로 남게 될 테니까요.

이제 저는 <새결>이라는 물결 위에서, 모두의 깊은 내면과 본질을 향해 조심스럽게 문장의 노를 저어보려 합니다.`,
    representativeLine: "나는 흉터를 문장으로 빚는 작가다.",
  },
];

export const poems = [
  {
    id: "saegyeol-poem-001",
    poetId: 1,
    title: "물결의 첫 문장",
    author: "양준희",
    body: ["아직 아무도 펼치지 않은 아침에", "나는 젖은 문장을 하나 놓아두었다.", "", "바람은 그것을 읽지 않고 지나갔고", "빛은 오래 머뭇거리다", "끝내 한 줄의 물결이 되었다."],
  },
  {
    id: "saegyeol-poem-002",
    poetId: 2,
    title: "종이의 오후",
    author: "박민준",
    body: ["책상 위에 남은 햇빛을 접으면", "오늘은 조금 얇아진다.", "", "말하지 못한 마음들이", "종이의 결 사이로 내려앉고", "나는 그 조용한 무게를 읽는다."],
  },
  {
    id: "saegyeol-poem-003",
    poetId: 3,
    title: "긴 숨",
    author: "김요환",
    body: ["밤은 늘 긴 숨으로 온다.", "불 꺼진 창마다", "누군가의 이름이 희미하게 걸린다.", "", "나는 지워지지 않는 것들만 골라", "작은 호흡으로 다시 적는다."],
  },
  {
    id: "saegyeol-poem-004",
    poetId: 4,
    title: "낮은 파란색",
    author: "심율",
    body: ["멀리 있는 마음은", "늘 낮은 파란색으로 번진다.", "", "닿지 못한 편지들이", "거리의 끝에서 접히고", "우리는 서로의 여백을 오래 바라본다."],
  },
  {
    id: "saegyeol-poem-005",
    poetId: 5,
    title: "여백의 속도",
    author: "박도현",
    body: ["저녁은 늘 같은 속도로 내려오지 않는다.", "어떤 날의 저녁은 문턱에 앉아", "신발 끈을 오래 묶고", "어떤 날의 저녁은 이미 방 안 깊숙한 곳에서", "우리의 이름을 낮게 불러본다.", "", "나는 식어가는 찻잔 옆에 앉아", "오늘 하지 못한 말을 순서대로 접는다.", "첫 번째 접힌 말은 미안하다는 말이고", "두 번째 접힌 말은 괜찮다는 말이고", "세 번째 접힌 말은", "사실은 오래 괜찮지 않았다는 말이다.", "", "창밖의 나무들은 서로에게 기대지 않고도 흔들린다.", "그 장면을 오래 바라보면", "사람도 가끔은 멀리서만 서로를 지킬 수 있다는 생각이 든다.", "", "여백은 비어 있는 자리가 아니라", "돌아올 마음을 위해 남겨둔 가장 조용한 의자.", "나는 그 의자 하나를 밤 쪽으로 조금 밀어두고", "다시 읽히기를 기다리는 문장처럼", "천천히 어두워진다."],
  },
  {
    id: "saegyeol-poem-006",
    poetId: 6,
    title: "흰 창",
    author: "윤소민",
    body: ["창문은 밤새 흰빛을 모아두었다.", "아침이 오자", "가장 먼저 먼지의 이름을 불렀다.", "", "나는 사라진 계절을 닦아내듯", "손바닥으로 빛의 가장자리를 쓸었다."],
  },
  {
    id: "saegyeol-poem-007",
    poetId: 1,
    title: "새벽의 접힌 면",
    author: "양준희",
    body: ["새벽은 늘 한쪽이 접힌 종이처럼 온다.", "펴지지 않은 면마다", "어제의 물소리가 남아 있다.", "", "나는 가장 조용한 귀퉁이에", "오늘의 이름을 작게 적는다."],
  },
  {
    id: "saegyeol-poem-008",
    poetId: 2,
    title: "편집실의 빛",
    author: "박민준",
    body: ["낮은 책상 위로 빛이 내려앉으면", "문장들은 잠시 서로의 간격을 배운다.", "", "지워진 말 옆에 남은 말,", "그 옆에 다시 놓이는 쉼표 하나.", "", "우리는 완성보다 오래 머무는 질서를 믿는다."],
  },
  {
    id: "saegyeol-poem-009",
    poetId: 3,
    title: "밤의 아래쪽",
    author: "김요환",
    body: ["밤에는 아래쪽이 있다.", "그곳에 닿으면", "잊었다고 믿은 목소리들이 다시 젖는다.", "", "나는 불을 켜지 않고", "어둠의 결을 손끝으로 읽는다.", "", "사라진 이름들은 늘", "가장 늦게 도착한 숨처럼", "문 앞에 서 있다."],
  },
  {
    id: "saegyeol-poem-010",
    poetId: 4,
    title: "무채색 편지",
    author: "심율",
    body: ["도시는 오늘도 무채색으로 젖어 있었다.", "횡단보도 앞에서", "나는 보내지 못한 문장을 접었다.", "", "멀리 있는 사람에게는", "가끔 침묵이 더 정확한 주소가 된다.", "", "신호가 바뀌고", "사람들이 건너가고", "나는 편지의 빈칸만 들고 한참 서 있었다."],
  },
  {
    id: "saegyeol-poem-011",
    poetId: 5,
    title: "식탁의 저녁",
    author: "박도현",
    body: ["저녁 식탁에는 말보다 먼저 그릇이 놓인다.", "숟가락의 둥근 등 위로", "오늘의 피로가 잠깐 비친다.", "", "우리는 서로에게 묻지 않은 질문들을", "국물의 온도만큼 식혀둔다.", "", "창밖은 조금씩 어두워지고", "누군가는 물컵을 다시 채우고", "나는 그 사소한 소리들이", "하루를 끝까지 붙들고 있다는 것을 안다.", "", "생활은 늘 대단한 문장으로 오지 않는다.", "때로는 접힌 냅킨,", "남은 밥알,", "그리고 늦게 도착한 괜찮다는 말로 온다."],
  },
  {
    id: "saegyeol-poem-012",
    poetId: 6,
    title: "계절의 뒤표지",
    author: "윤소민",
    body: ["계절은 끝날 때마다 뒤표지를 남긴다.", "거기에는 줄거리 대신", "빛이 지나간 방향만 적혀 있다.", "", "나는 그 얇은 페이지를 넘기며", "돌아오지 않는 오후의 온도를 읽는다."],
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Poems", href: "/poems" },
  { label: "Poets", href: "/poets" },
  { label: "Submit", href: "/submit" },
  { label: "About", href: "/about" },
];

const sectionPathMap = {
  "/poems": "poems-section",
  "/submit": "submit",
  "/about": "about",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getScrollTargetTop(element) {
  const headerHeight = document.querySelector(".sg-header")?.getBoundingClientRect().height ?? 0;
  const targetTop = element.getBoundingClientRect().top + window.scrollY;

  return Math.max(0, targetTop - headerHeight - 12);
}

function scrollElementIntoView(element, behavior = "smooth") {
  window.scrollTo({
    top: getScrollTargetTop(element),
    left: 0,
    behavior,
  });
}

function App() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [openCommentId, setOpenCommentId] = useState(null);

  const homeElement = (
    <HomePage
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      openCommentId={openCommentId}
      setOpenCommentId={setOpenCommentId}
    />
  );

  return (
    <>
      <ScrollToTop pathname={location.pathname} />
      <ScrollToRouteTarget location={location} />
      <Header />
      <Routes>
        <Route path="/" element={homeElement} />
        <Route path="/poems" element={homeElement} />
        <Route path="/submit" element={homeElement} />
        <Route path="/about" element={homeElement} />
        <Route path="/poets" element={<PoetsPage />} />
        <Route path="/poet/:id" element={<PoetDetailPage />} />
        <Route path="*" element={<PoetsPage />} />
      </Routes>
    </>
  );
}

function ScrollToTop({ pathname }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function ScrollToRouteTarget({ location }) {
  useEffect(() => {
    const targetId = location.hash ? location.hash.slice(1) : sectionPathMap[location.pathname];
    if (!targetId) return;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) scrollElementIntoView(target);
    };

    const frame = window.requestAnimationFrame(() => window.setTimeout(scrollToTarget, 80));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage({ activeFilter, setActiveFilter, openCommentId, setOpenCommentId }) {
  const navigate = useNavigate();
  const poemsSectionRef = useRef(null);

  const filteredPoems = useMemo(() => {
    if (activeFilter === "all") return poems;
    return poems.filter((poem) => poem.poetId === activeFilter);
  }, [activeFilter]);

  const scrollToPoemsTop = () => {
    if (!poemsSectionRef.current) return;
    scrollElementIntoView(poemsSectionRef.current);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    window.requestAnimationFrame(scrollToPoemsTop);
  };

  const handleGoToPoems = () => {
    navigate("/poems");
    window.setTimeout(() => {
      if (poemsSectionRef.current) {
        scrollElementIntoView(poemsSectionRef.current);
        return;
      }

      document.getElementById("poems-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <main>
        <section id="home" className="sg-hero">
          <div className="sg-hero-inner">
            <p className="sg-hero-kicker">문학의 새로운 호흡</p>
            <h1>새로운 결의 문장들이 머무는 공간</h1>
            <div className="sg-hero-actions">
              <button type="button" onClick={handleGoToPoems}>시 읽기</button>
              <Link to="/poets">시인 보기</Link>
              <Link to="/submit">기고하기</Link>
            </div>
          </div>
        </section>

        <section id="poems-section" ref={poemsSectionRef} className="sg-section sg-poems-section">
          <div className="sg-section-title">
            <p>Poems</p>
            <h2>한 편씩 천천히 이어지는 시의 피드</h2>
          </div>
          <PoetFilterTabs activeFilter={activeFilter} onChange={handleFilterChange} />
          <div key={activeFilter} className="sg-poem-feed">
            {filteredPoems.length > 0 ? (
              filteredPoems.map((poem) => (
                <PoemCard
                  key={poem.id}
                  poem={poem}
                  isCommentsOpen={openCommentId === poem.id}
                  onToggleComments={() => setOpenCommentId((current) => (current === poem.id ? null : poem.id))}
                />
              ))
            ) : (
              <p className="sg-empty">이 조건에 맞는 시가 아직 없습니다.</p>
            )}
          </div>
        </section>

        <SubmitForm />
        <section id="about" className="sg-section sg-about">
          <div className="sg-section-title">
            <p>About</p>
            <h2>새결은 하얀 지면 위에 동시대의 작은 목소리들을 차분히 배열하는 문예 공간입니다.</h2>
          </div>
        </section>
      </main>
  );
}

function Header() {
  return (
    <header className="sg-header">
      <nav aria-label="주요 메뉴">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/"}
            onClick={() => {
              if (item.href === "/") window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function PoetsPage() {
  return (
    <main>
      <section id="poets" className="sg-section sg-poets-page">
        <div className="sg-section-title">
          <p>Poets</p>
          <h2>새결을 이루는 여섯 개의 목소리</h2>
        </div>
        <PoetGroup title="편집위원" poets={poets.filter((poet) => poet.role === "편집위원")} variant="editors" />
        <PoetGroup title="기고가" poets={poets.filter((poet) => poet.role === "기고가")} variant="contributors" />
      </section>
    </main>
  );
}

function PoetDetailPage() {
  const { id } = useParams();
  const poet = poets.find((item) => String(item.id) === id);

  if (!poet) {
    return (
      <main>
        <section className="sg-section sg-poet-detail">
          <div className="sg-poet-detail-shell">
            <Link className="sg-back-link" to="/poets">← 목록으로 돌아가기</Link>
            <h1>시인을 찾을 수 없습니다</h1>
          </div>
        </section>
      </main>
    );
  }

  const poetPoems = poems.filter((poem) => poem.poetId === poet.id);

  return (
    <main>
      <article className="sg-section sg-poet-detail">
        <div className="sg-poet-detail-shell">
          <nav className="sg-breadcrumb" aria-label="시인 상세 경로">
            <Link to="/poets">Poets</Link>
            <span>/</span>
            <span>{poet.name}</span>
          </nav>
          <header className="sg-poet-detail-head">
            <Link className="sg-back-link" to="/poets">← 목록으로 돌아가기</Link>
            <h1>{poet.name}</h1>
            <p>{poet.role}</p>
          </header>
          <div className="sg-poet-detail-divider" />
          <p className="sg-poet-detail-bio">{poet.bio}</p>
          <blockquote className="sg-poet-detail-quote">{poet.representativeLine}</blockquote>
          <section className="sg-poet-works" aria-labelledby="poet-works-title">
            <div className="sg-poet-works-title">
              <p>Works</p>
              <h2 id="poet-works-title">이 시인의 작품</h2>
            </div>
            <div className="sg-poet-works-list">
              {poetPoems.map((poem) => (
                <Link key={poem.id} to={`/poems#${poem.id}`} className="sg-poet-work-link">
                  <strong>{poem.title}</strong>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
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
    <Link className={`sg-poet-card sg-poet-card-${variant}`} to={`/poet/${poet.id}`}>
      <div className="sg-poet-meta">
        <h3>{poet.name}</h3>
        <span>{poet.role}</span>
      </div>
      <blockquote>{poet.representativeLine}</blockquote>
      <span className="sg-poet-card-more">자세히 보기 →</span>
    </Link>
  );
}

function PoetFilterTabs({ activeFilter, onChange }) {
  const tabs = [{ id: "all", label: "전체" }, ...poets.map((poet) => ({ id: poet.id, label: poet.name }))];

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

function PoemCard({ poem, isCommentsOpen, onToggleComments }) {
  const sharePoem = async () => {
    const text = `새결 | ${poem.title} - ${poem.author}`;
    if (navigator.share) {
      await navigator.share({ title: text, text: poem.body.join("\n"), url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
  };

  const saveAsPdf = () => {
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
            body { margin: 48px; color: #171717; font-family: "Noto Serif KR", serif; line-height: 1.9; }
            .logo { margin-bottom: 44px; font-family: sans-serif; font-size: 30px; font-weight: 700; }
            h1 { margin: 0; font-size: 30px; font-weight: 500; }
            .author { margin: 8px 0 32px; color: #555; font-family: sans-serif; }
            .body { white-space: pre-line; font-size: 18px; }
          </style>
        </head>
        <body>
          <div class="logo">새결</div>
          <h1>${escapeHtml(poem.title)}</h1>
          <p class="author">${escapeHtml(poem.author)}</p>
          <div class="body">${escapeHtml(poem.body.join("\n"))}</div>
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
          <span>{poem.author}</span>
        </div>
        <h3>{poem.title}</h3>
        <div className="sg-poem-body" aria-label={`${poem.title} 본문`}>
          {poem.body.map((line, index) => (line ? <p key={index}>{line}</p> : <br key={index} />))}
        </div>
      </div>
      <div className="sg-poem-actions" aria-label={`${poem.title} 액션`}>
        <button type="button" className={isCommentsOpen ? "is-active" : ""} onClick={onToggleComments}>
          <span>말</span>
          <small>댓글</small>
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
      {isCommentsOpen && <DisqusComments poem={poem} />}
    </article>
  );
}

function SubmitForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <section id="submit" className="sg-section sg-submit">
      <div className="sg-section-title">
        <p>Submit</p>
        <h2>당신의 문장이 새결에 닿는 자리</h2>
      </div>
      <form className="sg-submit-form" onSubmit={handleSubmit}>
        {state.succeeded && <p className="sg-form-status">기고가 접수되었습니다. 보내주신 문장을 확인하겠습니다.</p>}
        <ValidationError className="sg-form-error" errors={state.errors} />
        <input type="hidden" name="_subject" value="새결 기고 접수" />
        <label>이름 또는 필명<input name="name" type="text" required placeholder="예: 새결" /></label>
        <ValidationError className="sg-form-error" field="name" errors={state.errors} />
        <label>이메일<input name="email" type="email" required placeholder="you@example.com" /></label>
        <ValidationError className="sg-form-error" field="email" errors={state.errors} />
        <label>작품 제목<input name="workTitle" type="text" required placeholder="작품 제목" /></label>
        <ValidationError className="sg-form-error" field="workTitle" errors={state.errors} />
        <label>작품 내용<textarea name="message" rows="9" required placeholder="작품을 입력해주세요." /></label>
        <ValidationError className="sg-form-error" field="message" errors={state.errors} />
        <label>간단한 자기소개<textarea name="bio" rows="4" placeholder="작가 소개 또는 기고 의도를 남겨주세요." /></label>
        <ValidationError className="sg-form-error" field="bio" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>{state.submitting ? "보내는 중" : "기고하기"}</button>
      </form>
    </section>
  );
}

function DisqusComments({ poem }) {
  useEffect(() => {
    window.disqus_config = function disqusConfig() {
      this.page.url = `${window.location.origin}/poems#${poem.id}`;
      this.page.identifier = poem.id;
      this.page.title = `새결 - ${poem.title}`;
    };

    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true, config: window.disqus_config });
      return;
    }

    if (document.getElementById("disqus-script")) return;

    const script = document.createElement("script");
    script.id = "disqus-script";
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", `${Date.now()}`);
    (document.head || document.body).appendChild(script);
  }, [poem]);

  return (
    <section className="sg-comments" aria-label={`${poem.title} 댓글`}>
      <div>
        <p>Comments</p>
        <strong>{poem.title}</strong>
        <span>identifier: {poem.id}</span>
      </div>
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </section>
  );
}

export default App;
