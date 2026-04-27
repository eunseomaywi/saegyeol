import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const poems = [
  {
    id: "saegyeol-poem-001",
    title: "물결의 첫 문장",
    author: "윤서하",
    tags: ["새벽", "물결", "첫문장"],
    body: [
      "아직 아무도 펼치지 않은 아침에",
      "나는 젖은 문장을 하나 놓아두었다.",
      "",
      "바람은 그것을 읽지 않고 지나갔고",
      "빛은 오래 머뭇거리다",
      "끝내 한 줄의 물결이 되었다.",
    ],
  },
  {
    id: "saegyeol-poem-002",
    title: "종이의 오후",
    author: "한이결",
    tags: ["오후", "종이", "기록"],
    body: [
      "책상 위에 남은 햇빛을 접으면",
      "오늘은 조금 얇아진다.",
      "",
      "말하지 못한 마음들이",
      "종이의 결 사이로 내려앉고",
      "나는 그 조용한 무게를 읽는다.",
    ],
  },
  {
    id: "saegyeol-poem-003",
    title: "긴 숨",
    author: "문해린",
    tags: ["숨", "밤", "머무름"],
    body: [
      "밤은 늘 긴 숨으로 온다.",
      "불 꺼진 창마다",
      "누군가의 이름이 희미하게 걸린다.",
      "",
      "나는 지워지지 않는 것들만 골라",
      "작은 호흡으로 다시 적는다.",
    ],
  },
  {
    id: "saegyeol-poem-004",
    title: "낮은 파란색",
    author: "서도윤",
    tags: ["딥블루", "편지", "거리"],
    body: [
      "멀리 있는 마음은",
      "늘 낮은 파란색으로 번진다.",
      "",
      "닿지 못한 편지들이",
      "거리의 끝에서 접히고",
      "우리는 서로의 여백을 오래 바라본다.",
    ],
  },
];

const members = [
  {
    name: "윤서하",
    role: "편집장 / 시",
    intro: "문장 사이의 침묵을 오래 듣는 사람.",
    quote: "천천히 읽힌 문장은 오래 남는다.",
    instagram: "https://instagram.com/YOUR_MEMBER_ACCOUNT",
  },
  {
    name: "한이결",
    role: "기획 / 산문",
    intro: "작은 감각을 지면의 리듬으로 엮습니다.",
    quote: "우리가 놓친 하루에도 결은 있다.",
    instagram: "https://instagram.com/YOUR_MEMBER_ACCOUNT",
  },
  {
    name: "문해린",
    role: "디자인 / 큐레이션",
    intro: "읽는 경험의 온도와 여백을 설계합니다.",
    quote: "좋은 여백은 문장을 더 가까이 데려온다.",
    instagram: "https://instagram.com/YOUR_MEMBER_ACCOUNT",
  },
  {
    name: "서도윤",
    role: "커뮤니티 / 낭독",
    intro: "독자와 작가가 만나는 장면을 만듭니다.",
    quote: "목소리가 닿으면 문장은 다시 태어난다.",
    instagram: "https://instagram.com/YOUR_MEMBER_ACCOUNT",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Poems", href: "#poems" },
  { label: "Members", href: "#members" },
  { label: "Submit", href: "#submit" },
  { label: "About", href: "#about" },
];

function App() {
  const [activeCommentPoem, setActiveCommentPoem] = useState(poems[0]);
  const featuredPoem = useMemo(() => poems[0], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="새결 홈">
          <span>새결</span>
          <small>the_saegyeol</small>
        </a>
        <nav aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-band">
          <div className="hero-inner fade-in">
            <p className="issue-mark">web literary magazine</p>
            <h1>문학의 새로운 호흡, 새결</h1>
            <p className="hero-copy">오늘의 문장을 천천히 넘겨보세요.</p>
            <div className="hero-actions" aria-label="빠른 이동">
              <a href="#poems">시 읽으러 가기</a>
              <a href="#members">멤버 소개 보기</a>
              <a href="#submit">기고하기</a>
            </div>
          </div>
          <article className="hero-poem fade-in" aria-label={`${featuredPoem.title} 미리보기`}>
            <span>today's line</span>
            <h2>{featuredPoem.title}</h2>
            <p>{featuredPoem.body.slice(0, 3).join(" / ")}</p>
          </article>
        </section>

        <section id="poems" className="poem-section">
          <div className="section-heading fade-in">
            <p>Poems</p>
            <h2>한 화면에 한 편씩, 천천히 넘기는 시</h2>
          </div>
          <div className="poem-reels" aria-label="세로 스크롤 시 피드">
            {poems.map((poem, index) => (
              <PoemCard
                key={poem.id}
                poem={poem}
                index={index}
                onOpenComments={() => setActiveCommentPoem(poem)}
              />
            ))}
          </div>
          <CommentsPanel poem={activeCommentPoem} />
        </section>

        <section id="members" className="section-band members-section">
          <div className="section-heading fade-in">
            <p>Members</p>
            <h2>새결을 함께 만드는 사람들</h2>
          </div>
          <div className="member-grid">
            {members.map((member) => (
              <article className="member-card fade-in" key={member.name}>
                <div>
                  <p className="member-role">{member.role}</p>
                  <h3>{member.name}</h3>
                  <p>{member.intro}</p>
                </div>
                <blockquote>{member.quote}</blockquote>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="submit" className="submit-section section-band">
          <div className="submit-copy fade-in">
            <p>Submit</p>
            <h2>당신의 문장이 누군가의 하루에 닿을 수 있습니다.</h2>
          </div>
          <form
            className="submit-form fade-in"
            action="YOUR_FORMSPREE_ENDPOINT"
            method="POST"
          >
            {/* Formspree 사용 시 위 action 값에 실제 endpoint를 넣어주세요. */}
            <label>
              이름 또는 필명
              <input name="name" type="text" required placeholder="예: 새결" />
            </label>
            <label>
              이메일
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
            <label>
              작품 제목
              <input name="workTitle" type="text" required placeholder="작품 제목" />
            </label>
            <label>
              작품 내용
              <textarea name="workBody" rows="8" required placeholder="작품을 입력해주세요." />
            </label>
            <label>
              간단한 자기소개
              <textarea name="bio" rows="4" placeholder="작가 소개 또는 기고 의도를 남겨주세요." />
            </label>
            <button type="submit">기고문 제출하기</button>
          </form>
        </section>

        <section id="about" className="about-section">
          <div className="about-card fade-in">
            <p>About</p>
            <h2>새결은 문학의 새로운 결을 발견하고, 작은 문장들이 오래 머무를 수 있는 공간을 만드는 웹 문예지입니다.</h2>
          </div>
        </section>
      </main>
    </>
  );
}

function PoemCard({ poem, index, onOpenComments }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const sharePoem = async () => {
    const shareText = `새결 | ${poem.title} - ${poem.author}`;
    if (navigator.share) {
      await navigator.share({ title: shareText, text: poem.body.join("\n"), url: window.location.href });
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
    }
  };

  return (
    <article className="poem-card fade-in" style={{ "--delay": `${index * 80}ms` }}>
      <div className="poem-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>scroll to read</span>
      </div>
      <div className="poem-content">
        <p className="poem-author">{poem.author}</p>
        <h3>{poem.title}</h3>
        <div className="poem-body">
          {poem.body.map((line, lineIndex) =>
            line ? <p key={lineIndex}>{line}</p> : <br key={lineIndex} />,
          )}
        </div>
        <div className="tag-list">
          {poem.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="poem-tools" aria-label={`${poem.title} 도구`}>
        <button type="button" className={liked ? "is-active" : ""} onClick={() => setLiked(!liked)} aria-label="좋아요">
          <span>♡</span>
          <small>좋아요</small>
        </button>
        <button type="button" className={saved ? "is-active" : ""} onClick={() => setSaved(!saved)} aria-label="저장">
          <span>□</span>
          <small>저장</small>
        </button>
        <button type="button" onClick={sharePoem} aria-label="공유">
          <span>↗</span>
          <small>공유</small>
        </button>
        <button type="button" onClick={onOpenComments} aria-label="댓글">
          <span>”</span>
          <small>댓글</small>
        </button>
      </div>
    </article>
  );
}

function CommentsPanel({ poem }) {
  useEffect(() => {
    window.disqus_config = function disqusConfig() {
      this.page.url = `${window.location.origin}${window.location.pathname}#${poem.id}`;
      this.page.identifier = poem.id;
      this.page.title = `새결 - ${poem.title}`;
    };

    const existingScript = document.getElementById("disqus-script");
    if (existingScript && window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = "disqus-script";
    // Disqus 사용 시 YOUR_DISQUS_SHORTNAME을 실제 shortname으로 교체해주세요.
    script.src = "https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js";
    script.setAttribute("data-timestamp", `${Date.now()}`);
    document.body.appendChild(script);
  }, [poem]);

  return (
    <aside className="comments-panel fade-in" aria-label="댓글 영역">
      <div>
        <p>Comments</p>
        <h2>{poem.title}</h2>
        <span>identifier: {poem.id}</span>
      </div>
      <div id="disqus_thread">
        <p className="disqus-placeholder">
          Disqus shortname을 넣으면 이 영역에 작품별 댓글이 표시됩니다.
        </p>
      </div>
    </aside>
  );
}

createRoot(document.getElementById("root")).render(<App />);
