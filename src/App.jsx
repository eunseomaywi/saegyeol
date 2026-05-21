import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link, Navigate, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";

const DISQUS_SHORTNAME = import.meta.env.VITE_DISQUS_SHORTNAME || "saegyeol";
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "mrejeyvg";

const submissionRules = [
  ["자격", "누구나 — 나이, 학력, 경력 무관"],
  ["분량", "시: 1편 이상 / 산문: 200자 원고지 기준 20매 이내"],
  ["형식", "한글(.hwp) 또는 워드(.docx)"],
  ["마감", "매월 첫째 주 일요일 자정"],
  ["발표", "매월 둘째 주 토요일 발행"],
  ["연락", "010-3285-9833 (문자 우선)"],
];

const submissionDepartments = [
  {
    department: "시 분과",
    theme: "자유 (2호 주제 미정)",
    deadline: "2025.06.01",
    status: "모집 중",
  },
  {
    department: "소설 분과",
    theme: "추후 공지",
    deadline: "미정",
    status: "준비 중",
  },
  {
    department: "산문 분과",
    theme: "추후 공지",
    deadline: "미정",
    status: "준비 중",
  },
];

const contributors = [
  {
    id: "yang-junhee",
    name: "양준희",
    role: "편집위원장",
    image: "/contributors/junhui.jpg",
    line: "“나는 성찰하는 시인이다.”",
    description:
      "해가 뜨고 지는 순간 사이, 우리는 저마다의 흔적을 남깁니다. 저에게 문학이란, 시린 발자국을 글자로 아로새기며 인간적인 성장을 기록하기 위한 하나의 일기입니다. 이제 저는 <새결>이라는 이름 아래, 지나온 시간을 성찰하고 아직 쓰이지 않은 문장들을 노래하고자 합니다.",
  },
  {
    id: "park-minjun",
    name: "박민준",
    role: "편집위원",
    image: "/contributors/minjoon.jpg",
    line: "“나는 머무는 시인이다.”",
    description:
      "무언가를 설명하려다 그만둔 자리에서 저의 시는 시작되었습니다. 감정에 이름을 붙이는 순간, 그것이 본래의 색을 잃고 조금씩 다른 것이 되어버린다는 느낌을 지울 수 없었습니다. 그래서 서둘러 결론을 내리는 대신, 그 막막한 상태 그대로 ‘머무는 쪽’을 택했습니다. 이제 저는 <새결>이라는 공간에서, 당신의 문장 곁에 가만히 닻을 내리려 합니다.",
  },
  {
    id: "yoon-somin",
    name: "윤소민",
    role: "기고가",
    image: "/contributors/somin.jpg",
    line: "“나는 흉터를 문장으로 빚는 작가다.”",
    description:
      "모두가 완성된 문장에 마침표를 찍고 돌아설 때, 저는 그 문장이 시작되기 전의 시간들을 서성여 봅니다. 그렇게 저의 흉터를 정직하게 만져 내려간 기록들이, 언젠가 여러분의 숨겨진 상처 위로도 다정한 무늬처럼 겹쳐지길 바랍니다.",
  },
  {
    id: "park-dohyeon",
    name: "박도현",
    role: "기고가",
    image: "/contributors/dohyun.jpg",
    line: "“나는 결을 밝히는 시인이다.”",
    description:
      "곰이 간 자리에 조용히 금(金)을 입혀 새로운 의미를 덧칠해 내는 일, 그것이 제가 글을 쓰는 이유입니다. 이제 저는 <새결>이라는 공간에서, 당신 안의 아름다움에 조용히 금빛 문장을 더하고자 합니다.",
  },
  {
    id: "sim-yul",
    name: "심율",
    role: "기고가",
    image: "/contributors/yul.jpg",
    line: "“나는 탐구하는 작가다.”",
    description:
      "글을 쓰기 시작한 지 아직 일 년이 다 안 되었습니다. 미숙한 단어들을 문장으로 옮기다 보면, 대개 두어 가지 이상의 상이한 결론들을 맞이합니다. 하여, 나의 글은 초고입니다. 초고로 남겨두기로 하였습니다.",
  },
  {
    id: "kim-yohwan",
    name: "김요환",
    role: "기고가",
    image: "/contributors/yohan.jpg",
    line: "“나는 단순한 시인이다.”",
    description:
      "시가 가볍게 즐기고 쉽게 공감할 수 있는 매체가 될 수 있다고 믿습니다. 이제 저는 <새결>이라는 이름 아래, 기교를 대신한 유머와 단순성이 어떤 파장을 일으킬 수 있는지 증명하고자 합니다.",
  },
  {
    id: "park-minjae",
    name: "박민재",
    role: "기고가",
    image: "/contributors/minjae.jpg",
    line: "시 분과 기고가",
    description: "<새결> 창간호에 시를 기고합니다.",
  },
];

const getPoemCount = (issue) =>
  issue.sections?.reduce(
    (total, section) => total + section.works.filter((work) => work.type === "시").length,
    0,
  ) ?? 0;

const getArchiveDescription = (issue) => {
  const poemCount = getPoemCount(issue);
  return poemCount ? `시 ${poemCount}편 · ${issue.label}` : issue.archiveDescription;
};

const issues = [
  {
    id: "saegyeol-2026-05-gaehwa",
    slug: "2026-05-gaehwa",
    title: "2026년 5월호",
    theme: "개화",
    displayTitle: "2026년 5월호 · 개화",
    label: "창간호",
    archiveDate: "2026. 05",
    archiveTitle: "개화 開花",
    archiveDescription: "창간호",
    badge: "현재 호",
    status: "active",
    publishDate: "2026-05-01",
    nextIssueDate: "2026-06-13T00:00:00+09:00",
    pdfPath: "/saegyeol-2026-05-gaehwa.pdf",
    editors: ["양준희", "박민준"],
    preface: `어떤 말들은 너무 일찍 이름을 얻습니다.

이름이 붙는 순간 감각은 굳습니다. 감동은 공식이 되고, 언어는 예측 가능한 자리로 돌아갑니다. 오늘의 많은 문학이 그렇게 작동합니다. 읽히기 위해 다듬어지고, 소비되기 위해 설계됩니다.

우리가 느낀 불편함은 거기서 왔습니다.

결(結)은 나무가 자라며 스스로 새긴 무늬입니다. 설계되지 않았고, 교정되지 않았으며, 버텨온 시간이 그대로 남아 있습니다. 『새결』이 바라는 것은 그것입니다. 완결보다 진행 중인 것. 세련보다 아직 이름 붙여지지 않은 감각.

우리는 학생입니다. 그 사실을 사과하지 않겠습니다. 굳어지지 않은 시선만이 아직 포박되지 않은 언어를 건드릴 수 있습니다. 그것이 우리의 유일한 자격이고, 이 잡지의 존재 이유입니다.

이 지면에는 서로 다른 온도의 글들이 실려 있습니다. 통일된 미학은 없습니다. 찬란하게 파산하는 문장이 있고, 눅눅하게 버티는 문장이 있습니다. 그 불균질함이 이 창간호의 정직한 얼굴입니다.

새길을 내는 것은 항상 결을 어기는 일에서 시작됩니다.

새결 일동`,
    editorNotes: [
      {
        author: "박민준",
        body: `봄은 기다리지 않는다고들 말한다. 그런데 나는 이번 원고들을 읽으면서 그 말이 절반만 맞다는 것을 알았다. 봄은 기다리지 않지만, 꽃은 기다린다. 오래, 그리고 혼자서.

'개화'를 주제로 정한 것은 창간이라는 행위와 자연스럽게 겹쳐서가 아니었다. 오히려 반대였다. 개화는 아름다운 말처럼 들리지만 그 안을 들여다보면 전부 파열의 기록이다. 닫혀 있던 것이 더는 버틸 수 없어 찢어지는 순간. 우리가 이 주제를 고른 것은 그 찢어짐을 두려워하지 않겠다는 다짐이었다.

원고들이 들어왔을 때, 나는 그것들이 서로 전혀 다른 온도를 가지고 있다는 것을 먼저 느꼈다. 어떤 글은 활활 타고 있었고, 어떤 글은 겨우 불씨를 품은 채 떨고 있었다. 어떤 글은 이미 재가 된 자리에서 시작했다. 편집자로서 내가 해야 할 일은 그 온도들을 하나로 통일하는 것이 아니라, 각각이 제 온도를 잃지 않으면서도 같은 지면 위에 놓일 수 있도록 거리를 조율하는 것이었다. 잘 됐는지는 모르겠다. 다만 억지로 맞추지는 않았다.

문학에서 개화를 말할 때 우리는 너무 쉽게 피어남의 쪽만을 바라본다. 그러나 이 호에 실린 글들은 피어남만큼이나 피어나지 못함을, 지는 것을, 재가 되는 것을 정직하게 다루고 있다. 그 정직함이 나는 좋았다. 화려하게 포장된 개화가 아니라 저마다의 속도로, 저마다의 방식으로 터져 나오거나 아직 터지지 못한 것들. 그 불균질한 풍경이 이 창간호의 진짜 얼굴이라고 생각한다.

한 가지만 고백하자면, 나는 이 잡지를 시작하면서 좋은 글을 싣겠다는 생각보다 솔직한 글을 싣겠다는 생각을 먼저 했다. 좋음의 기준은 늘 누군가가 먼저 정해두고 우리를 기다리지만, 솔직함은 그 기준 바깥에서 온다. 개화가 아름다움의 사건이 아니라 필연의 사건인 것처럼, 이 지면이 좋은 문학의 자리가 아니라 솔직한 문학이 터져 나오는 자리가 되기를 바란다.

꽃은 피고 지지만, 찢어진 자리는 남는다. 그 자국들이 쌓여 결이 된다.

편집위원 박민준`,
      },
      {
        author: "양준희",
        body: `우선, 〈새결〉의 창간과 함께해주신 모든 분께 진심으로 감사드립니다. 각자의 세계를 <새결>과 함께 펼쳐준 기고가들과 편집위원들이 없었다면, 이번 창간호 역시 존재하지 않았을 것입니다.

박민준 위원과 함께 새로운 문예지의 창간을 이야기하던 당시, 우리는 <새결>이라는 이름이 사람들의 마음에 닿게 되리라고는 상상조차 하지 못했습니다. 그저 문학이 좋아 즉흥적으로 시작한 작은 프로젝트였기에, 새싹은커녕 씨앗조차 심지 못할 것이라 여겼습니다. 그러나 그 씨앗은 끝내 꽃봉오리가 되었고, 마침내 꽃잎을 틔웠습니다. 이것이 바로 <새결>이 품고 있는 ‘개화’의 서사일 것입니다.

세상이 담장 넘어 벙어리 목련이 흰 입술을 뗄 때 눈을 뜨듯, 저는 <새결>을 통해 젊은 시선으로 기성관념에 얽메이지 않는 문학을 피어내고자 합니다. 이는 단순한 선언이 아니라, 침전의 길을 걸으며 선한 게으름을 읊었던 어느 소인국의 한 거인처럼 올바른 사랑을 향해 가고자 하는 저의 단단한 포부입니다.

앞으로도 우리가 시작할 여정에 깊은 관심을 보내주시기를 조심스레 소망합니다. 페이지를 한 장씩 넘길 때마다 서로 다른 호흡과 감정, 저마다의 긴장감이 독자 여러분의 마음속에 오래도록 서릴 수 있기를 바랍니다. 이제부터 <새결>은 독자적인 언어들로 또 다른 개화를 이루어 내보고자 합니다.

편집위원 양준희`,
      },
    ],
    sections: [
      {
        title: "1부: 개화",
        works: [
          {
            id: "mangul-gateun-jeoleum",
            title: "망울 같은 젊음",
            author: "양준희",
            type: "시",
            body: `그대, 겨울에 너무 분노를 쏟지 말아라
생이 즈레밟혀 쓰러진대도
새롭게 천장을 뚫는 알맹이들이
그대의 꺾인 삭신을 우뚝 세울 테니.

공백의 지천을 그려내는 것은
사랑같은 외로움을 외며–
깨닫고 보니 잎새에 이는
연약하고도 날카로운 한숨이었소.

끝없이 펼쳐지는 지평선 너머
불그스럼한 파도를 밀어내고
삭신이 꺾여, 세상이 꺾여–
삶이란 자자한 원성의 청아한 목소리.

깨달아라
목소리는 잔잔한 파동이 되어
그대 뇌수에 꽂힘에도
하나씩 잊혀가는,
마치 꽃봉오리가 머금던
망울 같은 젊음이다.`,
          },
          {
            id: "hange",
            title: "한계",
            author: "박민준",
            type: "시",
            body: `세상은
선을 긋지 않는다
대신
보이지 않는 힘으로
서로를 잡아당긴다

팽팽해진 공간에서
규율은
말하지 않는다
다만
현이 떨릴 때
공기가 먼저
울린다

가까워질수록
각도는
미세하게 비틀리고
자재는
소리를 삼킨 채
안쪽에서
마찰한다

아름다움은
거기서
태어난다

질서가
견디는 동안이 아니라
견디지 못하고
찢어질 때

불가능은
막힌 길이 아니라
아직
몸이 밀려본 적 없는
압력의 방향이고
정해진 방법은
가장 많은 무게가
먼저
눌러본
자국일 뿐이다

모든 것은
온전히
유지되지 않는다
그래서
아름다움은
항상
파편으로
나타난다

나는
한계를
지우지 않았다
규율을
설명하지도 않았다
다만
숨이 조여오고
근육이
떨리기 시작하는
그 지점까지
몸을
밀어 넣었을 뿐이다

거기서
나는
부서지지 않았고
남아 있지도 않았다

장력이
끝내
버티지 못하고
터지는 순간
세계의 질서가
금이 가며
튀어 오른
그 조각 속에서

아름다움은
비로소
형태를 얻었다`,
          },
          {
            id: "won",
            title: "원",
            author: "박민준",
            type: "시",
            body: `눈을 감자
하나의 선이
스스로를 닫았다
시작도 끝도
보이지 않는
가장 완전한 약속

다시 눈을 감자
선은
각을 만들었고
세 개의 의지는
서로를 지탱했다

네 개가 되었을 때
공간은
안정이라는 이름을 얻었고
숫자는
세상을 세기 시작했다

각은 늘어났고
이름도 늘어났다
오각형
육각형
칠각형

나는
더 정확해지고 있다고
믿었다

그러나
너무 많은 각 끝에서
선들은
다시 서로를 잊었고
마침내
각은 사라지고
나는
다시
원을 보았다

그제서야
알게 되었다

끝은
도달이 아니라
회귀였고
너무 많은 것은
다 가졌다는 뜻이 아니라
아무것도
남기지 않는다는 뜻이라는 것을

그래서
나는
눈을 뜬다

다시
처음처럼`,
          },
          {
            id: "georiui-sayongbeop",
            title: "거리의 사용법",
            author: "박민준",
            type: "시",
            body: `기둥과 기둥 사이가 좁아지면
지붕은 먼저 주저앉는다

닿지 않기 위해 남겨둔 빈칸은
결핍이 아니라
하중이 빠져나가는 통로였다

가까워질수록
각도는 눈에 띄지 않게 틀어졌고
이음새에서
마른 마찰음이 먼저 일어났다

붙잡지 않아도
구조는 유지된다

무게가 머무를 자리를 남겨두면
나는 물러선 것이 아니라
붕괴가 시작되는 선을
정확히 비켜섰다

남은 것은
사이

서로를 버티게 하는 간격
그리고
지나갈 수 있을 만큼의 길`,
          },
          {
            id: "meonjeo-pieonan-neoege",
            title: "먼저 피어난 너에게, 아직 피어나지 못한 나에게",
            author: "박도현",
            type: "시",
            body: `나는 아직 그저
작은 봉우리에 불과한데
어째서 너는
저렇게 먼저 피어난걸까

같은 계절을 지나온 줄 알았는데
너의 시간은
나보다 조금 앞서있던 것처럼
손이 닿지 않는 자리에서
오히려 더욱 짙어지는 너의 색을 보며
괜히 고개 들어 확인해본다

나는 아직 열리지 못한 채
서성이고 있는데
너는 이미
한 계절을 다 써버린 얼굴로
날 빤히 내려다본다

이제야 알았다
모든 개화가
가까워짐을 의미하지는 않는다는걸
어떠한 피어남은
오히려 거리를 만들고

어떤 아름다움은
끝내 닿지 못할 때
비로소 완성된다는 것을`,
          },
          {
            id: "mimyeongui-payeol",
            title: "미명(未明)의 파열",
            author: "윤소민",
            type: "시",
            body: `담장 넘어 벙어리 목련이 흰 입술을 뗄 때
세상은 비로소 눈을 떴다
수천 년 시린 잠을 깨우는 것은
볏조각 같은 햇살의 가느다란 간지럼이었으니
바다 건너 낯선 바람이 빗장을 흔들고
상투가 잘린 자리에 망건 대신 검은 모자가 내려앉던 날
보이지 않던 내일이 해안선 너머 쏟아져 들어왔다
그리고, 시대의 낡은 각질이 우두둑 소리를 내며 벗겨졌다

꽃은 제 살점을 찢어 향기의 길을 내고
지도는 낯선 이방인의 발자국을 따라 새 길을 긋는다
수액을 밀어 올려 기어이 허공을 점거하는 일과
묵은 관습을 허물어 지평을 넓히는 일은
결국 같은 속도로 타오르는 뜨거운 통증이었다

이제 어제의 나를 부수고 선(善)으로 나아가는
지독한 환골의 시간 앞에 서서
나는 눅눅해진 불씨를 끄고 새 횃불을 든다

보도블록 위로 흩어지는 분홍빛 파편들
피는 일도, 바뀌는 일도, 스스로를 고쳐 쓰는 일도
낡은 껍질을 견디지 못한 것들이
온몸을 뒤틀어 밀어 올린
가장 눈부신 균열이었음을
찬란한 몸부림이었음을`,
          },
          {
            id: "chanranhan-budo",
            title: "찬란한 부도",
            author: "윤소민",
            type: "시",
            body: `어둠의 금고 속에 은닉해온 초록을
일제히 인출한다
뿌리가 실핏줄 터지도록 길어 올린 저 침묵의 잔고
더는 유예할 수 없는 열망이
꽃잎이라는 영수증으로 터져 나갈 때
나무는 제 생의 정점에서 가장 화려하게 파산한다

향기라는 감각의 부채가
공중의 장부를 빽빽하게 채우고
벌과 나비라는 채권자들이 축제처럼 들이닥치는 정오

보라,
가장 완벽한 몰락이
기꺼이 쏟아붓는 낙화의 방식임을

모든 종적이 끊긴 뒤
텅 빈 가지에 남은 것은 파산의 흔적이 아니다
다음 계절의 기적을 위해
고요히 눈을 뜨는
단단한 눈(芽)이라는 비밀스러운 약속일 뿐이니.`,
          },
          {
            id: "hyanggiroun-bimyeong",
            title: "향기로운 비명",
            author: "윤소민",
            type: "시",
            body: `재를 털어낸 자리에 뿌리를 내린다
지난밤 태워버린 것은
나약한 진심이 아니라
나를 가뒀던 낡은 껍데기들

검게 그을린 폐허 위로
빗물이 스며 절망을 적시면
바닥에 가라앉은 침전물들은
이윽고 가장 진한 양분이 된다

사람들은 이를 개화(開花)라 부르지만
나는 안다.
이것은 가장 향기로운 비명이자
터진 살점 위로 돋아난
팽팽한 딱지의 기록이라는 것을

꽃잎의 결을 훑으면
채 식지 않은 서늘한 재의 감촉이 만져지고
흔들리는 줄기는
더는 찢어지지 않기 위해 근육을 조여낸
치열한 공정(工程)의 결과이었다

먹물에 젖어 비명을 지르던 종이는 이제 없다
고통의 농도를 조절해
스스로 색채를 증명해내는
노련한 화공이 있을 뿐

이제 흉터는 붉은 무늬가 되어 번지고
불타버린 자리에만 돋아나는
투명한 불꽃이 허공을 점거한다`,
          },
          {
            id: "nakhwaui-yeongwon",
            title: "낙화의 영원",
            author: "윤소민",
            type: "시",
            body: `발밑부터 차오르는 분홍의 범람을 봅니다.
창밖은 온통 빛의 폭동, 무심한 낭만이 휘몰아치는데
나의 계절은 여전히 서리가 가득찬 겨울입니다.

닫힌 커튼 뒤에 웅크린 채 나직이 묻습니다.
당신은 정말, 영원을 믿나요?

벚꽃은 가장 화려한 정점에서 단호한 추락을 택하고
사람들은 그 짧은 자상마저 아름다움이라 부르지만,
찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다.
나는 그저, 지지 않는 당신을
오래도록 정물처럼 곁에 두고 싶었을 뿐입니다.

가라앉은 마음은 빛을 삼키는 수렁이 되어
수면에 일렁이는 꽃잎의 선율마저 무겁게 낚아챕니다.
이 적막 위로, 뺨을 타고 번지는 얼룩의 습도는
방금 지상에 닿은 저 여린 살점보다 훨씬 더 무겁습니다.

그 무게 속에서 나는 겨우 당신의 말을 기억해냅니다.
별은 죽으면서 다음 별의 계보를 남긴다는,
다정해서 더 잔인했던 그 문장을요.

당신이라는 꽃이 지고 나면
공중에 남겨진 향기가 흉터가 되어
나의 멈춰버린 시계태엽을 억지로 돌려놓겠지요.

비록 짧은 섬광이었을지라도
내 안에 깊게 박혀버린 당신의 개화는
사라진 뒤에야 비로소 지워지지 않는 낙인이 되어
나의 우주를 평생토록 유린할 것입니다.`,
          },
          {
            id: "jjijeojin-jarieseo-pieonaneun-geotdeul",
            title: "찢어진 자리에서 피어나는 것들 - 윤소민 시 연작론",
            author: "박민준",
            type: "비평",
            body: `개화는 아름다움의 사건이 아니다. 그것은 더 이상 버틸 수 없는 것이 끝내 터지는 순간이다. 윤소민은 그 터짐의 안쪽을 들여다본다.

01 언어 이전의 언어: 비유 구조가 먼저 말하는 것

윤소민의 시를 처음 읽을 때 독자가 마주치는 것은 아름다운 문장이 아니다. 그것은 충돌이다. 꽃이 향기를 내는 것이 아니라 "제 살점을 찢어 향기의 길을 내"고, 개화는 번성이 아니라 파산이며, 피어남은 곧 비명이다. 이 충돌은 수사적 과장이 아니다. 윤소민의 비유 체계는 처음부터 끝까지 단 하나의 명제를 물고 늘어진다: 아름다운 것은 반드시 폭력을 통과한다.

이것이 단순한 관념이 되지 않는 이유는, 윤소민이 비유를 설명하지 않기 때문이다. 「미명의 파열」에서 "낡은 각질이 우두둑 소리를 내며 벗겨졌다"는 행은 개화를 탈피(脫皮)와 동치시키는데, 이때 시인은 이 비유가 의미하는 바를 친절하게 풀어주지 않는다. 소리가 먼저 온다. "우두둑"이라는 청각이 독자의 몸을 먼저 건드리고, 그 다음에야 의미가 따라온다. 이것이 좋은 시의 작동 방식이다 — 설명이 아니라 감각이 먼저 도착한다.

「미명의 파열」의 한 연을 다시 읽어보자.

꽃은 제 살점을 찢어 향기의 길을 내고
지도는 낯선 이방인의 발자국을 따라 새 길을 긋는다
수액을 밀어 올려 기어이 허공을 점거하는 일과
묵은 관습을 허물어 지평을 넓히는 일은
결국 같은 속도로 타오르는 뜨거운 통증이었다

이 연에서 윤소민은 자연과 역사를 단일한 운동 위에 포개놓는다. 꽃이 피는 것과 개화기(開化期)의 문명 전환이 "같은 속도로 타오르는 뜨거운 통증"으로 수렴된다. 비평가로서 나는 이 병치(竝置)가 지나치게 과감하지 않은가 한참 머물렀다. 그러나 읽을수록 이것은 미숙한 확장이 아니라 정밀하게 계산된 이동이라는 것을 알게 된다. 두 행위가 공유하는 것은 안에서 밖으로 밀어 올리는 힘의 구조이기 때문이다. 수액이 도관을 따라 올라가는 것, 억눌린 시대가 표면을 뚫고 나오는 것 — 윤소민은 이 두 힘이 물리적으로 동일한 것임을 꿰뚫어본다.

주목할 점은 이 연의 마지막 단어다. 시인은 "변화"도 "혁명"도 아닌 "통증"을 선택한다. 이 단어 선택 하나가 이 시 전체의 윤리적 입장을 결정한다. 아름다움은 대가 없이 오지 않는다.

02 「찬란한 부도」: 경제적 비유가 열어놓는 윤리의 공간

윤소민의 네 편 중 가장 지적으로 대담한 것은 「찬란한 부도」다. 이 시는 꽃피는 것을 파산(破産)으로 읽는다. 처음 보면 냉소적 알레고리처럼 보인다. 그러나 이 시는 냉소와 반대 방향을 향해 달린다.

어둠의 금고 속에 은닉해온 초록을
일제히 인출한다
뿌리가 실핏줄 터지도록 길어 올린 저 침묵의 잔고
더는 유예할 수 없는 열망이
꽃잎이라는 영수증으로 터져 나갈 때
나무는 제 생의 정점에서 가장 화려하게 파산한다

이 비유 구조를 해체해보자. "금고에 은닉해온 초록"은 겨울 내내 나무가 비축해온 생의 에너지다. "침묵의 잔고"는 말하지 않고 쌓아온 것들, 보이지 않게 자라온 뿌리의 시간이다. 그리고 꽃은 그 전부를 한꺼번에 방출하는 행위 — "더는 유예할 수 없는" 순간의 전부-내어줌이다.

여기서 윤소민이 선택한 언어는 결정적이다. "유예할 수 없는 열망"이라는 구절에서 개화는 의지의 산물이 아니라 필연의 사건으로 읽힌다. 나무가 피우는 것이 아니라, 더 이상 피우지 않는 것이 불가능해진 것이다. 이 차이가 작게 보이지만 시의 세계관 전체를 바꾼다. 의지라면 선택이 가능하다. 그러나 필연이라면 — 그것은 존재의 문제가 된다.

"가장 완벽한 몰락이 기꺼이 쏟아붓는 낙화의 방식임을" — 이 행에서 '기꺼이'라는 부사가 전체 시의 무게중심이다. 억지로 쏟아지는 것이 아니라 기꺼이 쏟아지는 것. 파산은 패배가 아니라 소진(消盡)의 다른 이름이다. 자신을 전부 내어주는 것이 가능한 존재만이 이렇게 파산할 수 있다.

그런데 이 시의 가장 중요한 구절은 마지막 연에 있다. 텅 빈 가지에 남는 것은 "파산의 흔적이 아니"라 "단단한 눈(芽)이라는 비밀스러운 약속"이다. 여기서 시인은 파산의 논리를 완성한다: 전부를 내어준 자리에, 다음이 자라난다. 빈 가지는 끝이 아니라 다음 계절의 조건이다. 이것이 「찬란한 부도」가 냉소가 아닌 이유다 — 이 시는 소진 이후의 재생을 믿는다. 다만 그것을 아름답게 포장하지 않는다. 재생은 조용하고, 단단하고, 비밀스럽다.

비평가로서 솔직하게 말하자면, 이 시에서 언어적 과잉을 느끼는 지점이 없지 않다. "벌과 나비라는 채권자들이 축제처럼 들이닥치는 정오"라는 행은 경제적 비유의 일관성을 유지하면서도 지나치게 풍부한 이미지를 한 행에 욱여넣어 호흡이 가빠지는 인상을 준다. 그러나 이 과잉 자체가 '파산'의 분위기와 공명한다는 점에서, 나는 이것을 실수보다는 계산된 위험으로 읽고 싶다. 터지는 것이 터지듯이, 이 행도 터진다.

03 「향기로운 비명」: 개화의 내면화, 그리고 화자의 전환

앞의 두 편이 개화를 외부에서 관찰하는 시선을 가졌다면, 「향기로운 비명」에서는 그 관찰자가 사라진다. 이 시의 화자는 더 이상 꽃을 보는 사람이 아니라 스스로 피어나는, 또는 피어나려 하는 사람이다. 이 이동이 이 시를 연작의 전환점으로 만든다.

재를 털어낸 자리에 뿌리를 내린다
지난밤 태워버린 것은
나약한 진심이 아니라
나를 가뒀던 낡은 껍데기들

이 첫 연을 주의 깊게 읽어야 한다. 화자는 "재를 털어낸 자리에 뿌리를 내린다"고 말한다. 재 위에 뿌리를 내리는 것이 아니라 재를 털어낸 자리에 내리는 것이다. 이 차이가 작지 않다. 재를 치운 다음 뿌리를 내리는 것은 화자가 능동적으로 청소하는 주체임을 의미한다. 소멸에 수동적으로 복속하지 않는다. 무엇을 남기고 무엇을 버릴지를 스스로 가려낸다.

이어지는 행이 이를 명확히 한다: "태워버린 것은 나약한 진심이 아니라 나를 가뒀던 낡은 껍데기들." 불은 구분 없이 태우지 않는다. 화자는 불을 선별의 도구로 쓴다. 이것이 이 시에서 화자가 "노련한 화공"으로 이행하는 논리적 근거다. 처음부터 화자는 자신의 소각 과정을 설계하고 있었다.

사람들은 이를 개화(開花)라 부르지만
나는 안다.
이것은 가장 향기로운 비명이자
터진 살점 위로 돋아난
팽팽한 딱지의 기록이라는 것을

이 단절 — "나는 안다." — 이 이 시의 핵이다. 세계가 아름다운 이름으로 부르는 것을 화자는 다르게 안다. 이것은 세계에 대한 불신이 아니라, 경험에서 온 지식이다. 화자는 개화를 겪어봤다. 그것이 향기이면서 동시에 비명이라는 것을, 살점이 터지면서 딱지가 돋는다는 것을 몸으로 알고 있다.

"팽팽한 딱지"라는 이미지는 윤소민의 시 전체에서 가장 날카로운 언어적 발견 중 하나다. 딱지는 상처의 증거이면서 동시에 치유의 증거다. "팽팽한"이라는 형용사가 이 딱지에 긴장감을 더한다. 이 딱지는 아직 완전히 아물지 않았다. 팽팽하다는 것은 아직 당기고 있다는 것이다. 아직 과정 중이라는 것이다.

이 이미지를 「찬란한 부도」의 "단단한 눈(芽)"과 대조하면 연작의 언어적 변주가 드러난다. 「부도」에서 재생은 단단하고 비밀스럽다. 「비명」에서 재생은 팽팽하고 아직 덜 아물었다. 두 번째 시가 더 앞에 있는 사람의 것이라면, 세 번째 시는 아직 그 과정 한가운데 있는 사람의 것이다.

마지막 연에서 화자는 "먹물에 젖어 비명을 지르던 종이"에서 "고통의 농도를 조절해 스스로 색채를 증명해내는 노련한 화공"으로 이행한다. 이 이행은 선언적이다. 그런데 나는 이 선언이 완전히 성취된 상태의 묘사가 아니라, 되고자 하는 방향의 묘사라고 읽는다. "이제"라는 시제 부사가 현재를 가리키지만, 이 현재는 도착이 아니라 결심의 현재다. 화자는 노련한 화공이 되었다고 말하는 것이 아니라, 그렇게 되기로 했다고 말하고 있다. 그 미세한 차이가 이 시를 거짓 없게 만든다.

04 「낙화의 영원」: 연작이 허용하는 균열, 또는 가장 솔직한 자리

네 편의 시 중 가장 오래 걸린 것이 이 시다. 앞의 세 편이 어떤 방향성 — 파열을 긍정하고, 소진을 긍정하고, 재생을 긍정하는 방향 — 을 가졌다면, 「낙화의 영원」은 그 방향 전체에 균열을 낸다. 그리고 이것이 연작 전체에서 가장 용기 있는 제스처다.

벚꽃은 가장 화려한 정점에서 단호한 추락을 택하고
사람들은 그 짧은 자상마저 아름다움이라 부르지만,
찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다.
나는 그저, 지지 않는 당신을
오래도록 정물처럼 곁에 두고 싶었을 뿐입니다.

"찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다." 이 문장이 이 시의 핵심이다. 화자는 낙화의 아름다움을 아름다움으로 인정하면서도 그것을 찬사하는 방식에 저항한다. 지는 것이 고귀하다고 말하는 것은 잃어버린 것을 아름답게 이름 붙여 위로하는 언어다. 그러나 화자는 그 언어를 원하지 않는다. 화자가 원하는 것은 "오래도록 정물처럼 곁에 두는" 것, 즉 영원이다.

이것은 앞의 세 편이 구축한 세계관 — 파열과 소진과 재생의 순환 — 에 대한 감정적 반론이다. 지적으로는 낙화가 필연임을 알면서, 감정적으로는 그것을 받아들이지 못한다. 이 간극을 윤소민은 숨기지 않는다. "나는 안다"고 선언했던 「향기로운 비명」의 화자가 「낙화의 영원」에서는 "당신은 정말, 영원을 믿나요?"라고 묻는다. 확신에서 질문으로의 이 이동이 연작의 가장 정직한 지점이다.

마지막 연에서 화자는 "당신이라는 꽃"이 지고 나면 남겨진 향기가 흉터가 되어 "나의 멈춰버린 시계태엽을 억지로 돌려놓겠지요"라고 말한다. 이 문장은 조심스럽게 읽어야 한다. 시간이 다시 움직이는 것은 자발적 재생이 아니다 — 억지로 돌려놓는 것이다. 아름답지 않다. 부드럽지 않다. 그러나 일어난다. 이것이 윤소민이 이 시에서 솔직하게 말하는 재생의 모습이다: 원해서가 아니라, 살아있기 때문에 어쩔 수 없이 계속되는 것.

"비록 짧은 섬광이었을지라도 / 내 안에 깊게 박혀버린 당신의 개화는 / 사라진 뒤에야 비로소 지워지지 않는 낙인이 되어 / 나의 우주를 평생토록 유린할 것입니다." 이 마지막 행들은 읽기가 불편하다. "유린"이라는 단어의 폭력성이 갑작스럽다. 그러나 나는 이 불편함이 시가 의도한 것이라고 생각한다. 이전의 세 편이 아름다운 파열을 다뤘다면, 이 시는 아름답지 않은 상처를 다룬다. 지워지지 않고 남아서 계속 침범하는 것. 그것도 개화의 사후(事後)다.

05 연작의 아치: 완결되지 않는 것의 정직함

네 편을 연작으로 읽을 때 하나의 구조가 드러난다.

「미명의 파열」은 개화의 본질을 선언한다. 피어남은 찢어짐이다. 「찬란한 부도」는 그 찢어짐을 소진으로 번역한다. 전부를 내어주는 것이 개화다. 「향기로운 비명」은 그 과정을 내면화한다. 나는 이 과정의 주체가 될 수 있다. 그리고 「낙화의 영원」은 마지막에 균열을 허용한다. 그럼에도 나는 지지 않기를 원했다.

이 아치는 완결되지 않는다. 「낙화의 영원」의 화자는 아직 재생되지 않았다. 연작은 열린 채로 끝난다. 이것이 이 연작이 창간호에서 가지는 가장 정직한 면이다. 윤소민은 도착하지 않았다. 가는 중이다. 그리고 그 가는 중임을 숨기지 않는다.

우리가 흔히 접하는 성장 서사는 상처를 겪고, 극복하고, 강해진다는 구조를 가진다. 윤소민의 연작은 그 구조를 따르지 않는다. 첫 번째 시에서 세 번째 시까지 어떤 방향으로 나아가는 것처럼 보이다가, 네 번째 시에서 그것이 얼마나 불완전한 여정인지를 고백한다. 이 고백이 연작을 약하게 만드는가? 반대다. 이 고백이 앞의 세 편에 무게를 돌려준다. 파열과 소진과 재생을 긍정하는 것이 그렇게 쉬운 일이 아님을 — 마지막 시가 증명하기 때문에.

06 윤소민의 언어가 만지는 곳: 몸과 시간과 이름

이 연작을 관통하는 언어적 특성을 세 가지로 정리할 수 있다.

첫 번째는 몸의 언어다. 윤소민의 시는 추상을 거부하고 지속적으로 몸의 감각으로 돌아온다. "살점", "실핏줄", "딱지", "근육", "흉터" — 이 단어들은 모두 몸이 무언가를 겪은 흔적이다. 개화라는 추상적 사건이 이 몸의 언어를 통과하면서 구체성을 얻는다. 독자가 윤소민의 시를 읽을 때 지적으로만 이해되는 것이 아니라 신체적으로 반응하게 되는 이유가 여기 있다. 이것은 수련된 감각이다.

두 번째는 시간의 조작이다. 윤소민은 시제를 의식적으로 다룬다. 「향기로운 비명」의 "이제"는 현재이면서 결심의 시제이고, 「낙화의 영원」의 "겠지요"는 미래이면서 체념의 시제다. 이 시제들은 단순한 문법 선택이 아니라 화자의 심리적 위치를 표시한다. 특히 연작 전체에서 시제의 흐름이 현재에서 조건적 미래로 이동하는 것은, 화자가 점점 더 아직 오지 않은 것을 향해 시선을 돌리게 됨을 보여준다.

세 번째는 이름 붙이기에 대한 저항이다. 윤소민의 시는 반복적으로 세계가 붙인 이름을 거부하거나 재정의한다. "사람들은 이를 개화(開花)라 부르지만 나는 안다"는 이 연작의 핵심 태도를 집약한다. 아름다운 이름 아래 감춰진 것을 드러내는 것 — 그것이 이 시인이 언어를 쓰는 방식이다. 이 태도는 단순한 반항이 아니다. 세계의 명명(命名)이 얼마나 많은 것을 지워버리는지에 대한 예민한 감각에서 온다.

덧붙이자면, 윤소민의 시는 한자어를 의식적으로 활용한다. "미명(未明)", "개화(開花)", "낙화(落花)", "환골(換骨)". 이 한자어들은 단순한 어휘 선택이 아니라 의미의 이중층을 만든다. 한글로만 쓰면 미끄러질 뉘앙스를 한자가 붙잡는다.

07 비평가의 솔직한 자리에서: 한계와 가능성

좋은 비평은 아첨이 아니다. 윤소민의 시가 보여주는 가능성만큼이나, 아직 해결되지 않은 긴장들도 있다.

가장 두드러지는 것은 어조의 균일성이다. 네 편 모두 높은 온도를 유지한다. 파열하고, 소진하고, 비명 지르고, 흉터가 되는 — 이 감정적 스펙트럼은 넓지만, 모두 같은 밀도로 타고 있다. 잘 쓰인 시집은 높은 온도와 낮은 온도가 공존하면서 서로를 증폭시킨다. 아주 조용한 행이 있을 때, 그 다음의 폭발이 더 크게 들린다. 윤소민의 연작에서 나는 그 조용한 행들을 더 기다리게 된다.

「낙화의 영원」의 마지막 행에서 "유린"이라는 단어의 선택도 한 번 더 생각해볼 만하다. 이 시의 전반적 어조는 슬픔과 체념의 서정적 혼합인데, "유린"은 그 범위를 벗어나는 폭력성을 가진다. 이 충돌이 계산된 것이라면 효과가 있다. 그러나 그 계산이 독자에게 충분히 전달되는지는 불분명하다.

이 모든 말을 하면서도, 내가 분명하게 말하고 싶은 것은 이것이다: 윤소민은 자신의 목소리를 이미 가지고 있다. 아직 배우는 중인 시인들 중 많은 이들이 목소리를 흉내내는 단계에 있다. 윤소민의 시는 흉내가 아니다. 이 비유 구조들, 이 몸의 언어들, 이 이름 붙이기에 대한 저항 — 이것들은 특정 영향으로부터 왔을 수 있지만, 이미 이 시인의 것이 되어 있다. 이것이 모든 것보다 중요하다.

비평을 끝내며: 찢어진 자리가 가진 특권

찢어진 자리에서만 볼 수 있는 것이 있다. 멀쩡한 곳에서는 안쪽이 보이지 않는다. 윤소민의 시가 반복적으로 파열의 순간으로 돌아가는 이유는, 그 순간에만 보이는 것들이 있기 때문이다 — 뿌리의 깊이, 잔고의 무게, 딱지가 팽팽해지는 과정.

이 연작은 아름다운 개화를 그리지 않는다. 찢어지고, 파산하고, 비명을 지르고, 영원을 원하면서 영원을 가질 수 없는 개화를 그린다. 그것이 이 시들이 살아있는 이유다. 포장된 아름다움은 읽히는 순간 소비된다. 찢어진 아름다움은 읽히고 난 뒤에도 남는다.

윤소민은 가는 중이다. 그것이 이 연작의 가장 솔직한 선언이다. 그리고 그 가는 중임을 이렇게 정직하게 쓸 수 있다는 것이, 이미 하나의 도착이다.

편집자 주

이 비평은 윤소민의 네 편 시 전문이 이 잡지에 함께 실렸음을 전제로 쓰였습니다. 시와 비평을 나란히 읽기를 권합니다. 비평은 시를 대체하지 않습니다. 시를 다시 읽게 만들 수 있다면, 그것으로 충분합니다.`,
          },
        ],
      },
      {
        title: "2부: 자유",
        works: [
          {
            id: "pyeon",
            title: "편",
            author: "박민준",
            type: "시",
            body: `어떤 날은
세상의 속도를
몸이 먼저 놓쳐버린다

숨이 바닥으로 가라앉고
타인들의 등만
빠르게 멀어질 때

남겨진 너의 그림자 곁에
내 그림자를
가만히 포개어 둔다

네가 고개 숙인 자리 뒤에
말없이
닻을 내린다

바람이 불어오면
등으로 먼저
받는다

발이
다시
움직이기 시작할 때까지

이 자리를
비우지 않는다

돌아보면
여기다`,
          },
          {
            id: "nabihyogwa",
            title: "나비효과",
            author: "박민준",
            type: "시",
            body: `별 하나가
눈에 들어왔다
밝아서가 아니라
가까워서였다

나는 눈을 감지 못했고
그 순간
물 한 방울이
아무 의도 없이
땅으로 떨어졌다

그건
슬픔도 기쁨도 아닌
단지
넘쳐난 것이었다

젖은 자리에서
풀들이 방향을 틀었고
뿌리는
조금 더 깊은 쪽을
선택했다

시간이 지나
열매가 생겼고
누군가는
그 열매로
하루를 넘겼다

그들은
나를 보지 못했고
나는
그들을 알지 못했다

하지만
그 사이의 모든 일은
분명히
일어났다

사람들은
우연이라고 부르지만
나는 안다

별이
눈에 닿는 거리까지
오는 데에는
항상
이유 없는 일만으로는
부족하다는 것을

그래서
누군가 나에게
고맙다고 말할 때마다
나는
아무 대답도 하지 않는다

다만
한 번 더
하늘을 올려다본다

그날처럼
아무것도 바라지 않고
조용히
빛을 보내던
별들을`,
          },
          {
            id: "haeburyangsu",
            title: "해불양수(海不讓水)",
            author: "박도현",
            type: "시",
            body: `결이 달라도
순도가 달라도
마다하지 말거라

흙을 머금은 물도
먼 길을 돌아 흘러온 물도
한때는 맑음을 지나온 것들이니

바다는
묻지 않는다
어디서 왔는지
무엇을 잃었는지
그저 품는다

모든 파도가
언제나 부드럽지만은 아니하다
때로는 거칠게 몰아치고
서로를 상처내는 물결도 있다

그럼에도
흩어졌던 물들은
끝내 같은 깊이에 만나
구분되지 않는
하나의 흐름으로 이어질 것이니

결이 달라도
순도가 달라도
마다하지 말거라`,
          },
          {
            id: "jayu-jakpum",
            title: "자유작품",
            author: "김요환",
            type: "시",
            body: `우리 이제 끝났어
질척거리지 마
너랑 함께했던 시간이 그리운거지
니가 그리운 게 아니야

-코로나

무력으로는
여포가 천하제일이라더니
저건 대체 무엇이란 말이더냐

- 화난 여친

이젠 나를 떠나간 걸 알면서도
혹시 몰라
한 번 더 들춰본다

- 잔고`,
          },
          {
            id: "ingan-hyeonsang",
            title: "인간현상",
            author: "양준희",
            type: "시",
            body: `며칠 사이에 책상 우로
포개두었던 수많은 구슬들을 펼치며
저마다의 사연을 품는
이들 앞에 인사를 나눈다.

어디선가 고개를 곧추세워
숨을 쉬어갈 이들을
마음으로 읽으며–
그들을 차갑게 쓰다듬는다.

깊은 곳으로 빠져본다.
한 소년공을 만났다.
소년공은 시대의 상흔이다.
객지를 가나, 마실을 나가나–
마음 한켠에 못 박힌
조각난 액자이다.

소년공은 품었다
외로운 사랑을 한 글자씩
던지는 두려운 용기를–
그럼에도 꺼내보기가 두려워
차갑게 쓰다듬다 접어보는
그의 서툰 용기.

가장 깊은 곳으로 빠져본다.
영롱한 빛 속에는 세상이 있다.
마침내–
세상은 사랑을 향한다.
사랑은 세상을 향한다.`,
          },
          {
            id: "soingugui-geeureun-gulliver",
            title: "소인국의 게으른 걸리버",
            author: "양준희",
            type: "산문",
            body: `사랑한다는 것이 무엇인가.

다른 얼굴들이 끈적한 키스를, 또 뜨거운 포옹을 – 나는 이를 몸소 실천해야만 사랑이라 부르기에. 홀로 침전하고 싶다가도 수많은 눈들이 나를 쳐다본다. 그래서 밖으로 나와 움직이기를 택한다.

사람이란 식물과도 같다. 어른들 왈, 빛을 보지 않는다면 기력을 잃는다곤 하는데. 도저히 뜻을 이해하지 못하겠다가도, 세월에 머리가 하얗게 질린 어르신들은 나보다 더 잘 알겠지 싶어 진심 어린 충고를 기쁘게 받아들인다.

그럼에도 가끔씩은 이불 밖으로 나오고 싶지 않은 때가 있다. 마치 게으름의 사슬이 내 사지를 묶어 놓은 느낌이랄까. 스스로 일어나기엔 몸이 무거움에 잔뜩 잠식되었기에. 이제는 일어나야지, 싶다가도 마법에 걸린 듯 그 생각들이 순식간에 횟가루로 흩어진다. 그래서 나는 계속 누워 있기를 택한다.

소인국의 게으른 걸리버가 이런 삶을 살지 않았을지… 끝없는 상상의 나래를 펼쳐본다. 게으른 걸리버에 대한 상상을 하다가도, 나는 해야 할 일이 수두룩하기에 공상에서 나와 현실 속으로 헤엄친다.

강하게 몰아치는 파도를 마주하면, 때로는 두려워 팔을 번쩍 뻗곤 뒤로 물러나기도 하지만… 살아야 한다는 일념 하나로 어떻게든 종점에 도달한다.

그 종점이란 수많은 얼굴들이 모이는 요람이다. 매일 문지방을 밟고 경계선을 넘어서면, 사람들의 각기 다른 얼굴에 놀라기도 한다. 다만, 이것이 세상의 축소판일지도 모른다 생각하고는 이내 고개를 젓는다.

그러다가도, 문득 생각이 깊어지면 깊어질수록 절망이 스며들어 한숨을 내쉬게 된다. 이것이 세상의 축소판이라니. 제기랄, 미래가 너무 어두워 차마 눈을 뜨지 못하겠다.

앞에선 달콤한 미소를 노래하고 뒤에선 서로를 밀어낸다. 마치 보이지 않는 기사들의 싸움처럼, 그러나 조금 더 야만적이게. 그럼에도 종국엔 누군가가 웃을 수 있다는 것에 의의를 두어야겠지. 비록 패배한 이는 영원히 절망의 수렁에 빠져 헤어나올 수 없게 되겠지만.

패배자라, 사전 군데군데를 찾아보아도 설명 한 줄 없는 버려진 단어인데… 그것이 피로 적힌 것인지 빛으로 적힌 것인지 알 수는 없겠지만, 수렁에 빠진다는 것은 쓰디쓴 독약과도 같으니까.

그래서 나는, 다시 홀로 침전의 길을 걸으며 선한 게으름을 읊는다– 소인국을 지켰던 영웅, 거인 걸리버처럼.

좋게 이야기하면 군계일학, 나쁘게 이야기하면 반항아이자 낙오자.

한편,

사람들은 각기 다른 얼굴을 운운하긴 하나
이 모든 것들은 똑같은 방향으로 –
정갈히, 일그러진 사랑을 향하여.

사랑은 그런 게 아닌데.`,
          },
          {
            id: "naui-moseup",
            title: "나의 모습",
            author: "양준희",
            type: "시",
            body: `한 남자가 있다.
비틀비틀 땅을 어루며
헛다리 짚는 그는 바로
반죽음당한 행려병자.

시대의 아편에 취해
쓸쓸히 자리를 지키는
목 가느다란 가로등에
등을 기대고는
털썩 내리앉아 눈을 감는데–

눈물은 눈알의 문지기를 구슬려
굳게 닫힌 문을 열어내고
가파른 비탈길을 굴러대니.

좀처럼 식지 않는 하이얀 증기에
머리는 사지 묶인지 오래–
도저히 만질 수 없는,
투명한 수증기에 비치는
얼굴들 하나하나가
병문안을 오자
그는 이내 침을 툭툭–
뱉어대는데

눈을 감고 깜짝할 새에
거리는 그저 바람소리만이
들리우고
이내 그의 눈동자 속에
밍기적대던 것은
그저 떨어지는 낙엽뿐이었으니.

아아–
무엇이 무엇인지 모르겠다
거리에 수놓여진
셀 수 없는 벽돌들
이것조차 하나의 수증기였다면?

그는,
나는 도대체 무엇을 딛고
걸어야하나.`,
          },
          {
            id: "jaeui-jansang",
            title: "재의 잔상",
            author: "윤소민",
            type: "시",
            body: `궁금하다
이 먹은 어디서 왔는가?
외부의 풍파였을까 안의 샘이었을까
마음이라는 한지에 곱게 물들은 먹이
한방울, 두방울, 세방울
점점 더 퍼져가다
결국 찢어져버려서
까만 재로밖에 남지 않게 된걸까

처음부터 어둠이었다면 찢어지는 고통도 없었으리
너무나 맑고 연약하게 빚어져
세상의 거친 비에 속절없이 젖어들 수밖에 없었나

성한 구석 하나 없이 모두 타버린 그 자리에
눅눅한 침묵이 안개처럼 내려앉았을 때
비로소 보인다
검게 타버린 것은 본래의 빛깔이 아니라
그저 쏟아진 어둠을 온몸으로 받아낸 흔적이자 흉터였음을
찢어진 틈새는 어쩌면 더는 버틸 수 없었던 상처였음을

재가 되어버린 마음을 손끝으로 가만히 훑으면
서늘한 온기속에 아직 남아있는 결
악(惡)이라 믿었던 그 진한 얼룩은
어쩌면 너무 간절히 지키고 싶어 꽉 쥐었던
서툰 백지의 멍 자국이었을지도 모른다

이제 비바람에 재마저 모두 흩어지고 나면
텅 빈 바닥 위로 다시 햇살이 고일 테니
다시 시작될 도화지는
이전보다 조금 더 두터운 살의(肌)를 지니리라`,
          },
          {
            id: "godok",
            title: "고독",
            author: "박민준",
            type: "시",
            body: `도심은
너무 밝아서
아무도 서로를 보지 않는다

유리벽에 비친 얼굴들이
각자의 속도로 지나가고
나는
멈춘 신호등 아래서
한 번도 쓰이지 않은 표정을 연습한다

소리는 많지만
나에게 닿는 것은 없다

말들이 공중에서 서로를 스치다
모두 돌아간 뒤에야
침묵이 남는다

비가 온다

누군가의 우산 아래서
비를 맞지 않기 위해
나는 비를 맞는다

차가운 물이
손등을 타고 내려가자
몸이 먼저 안다

지금
아무도 나를 찾지 않는다는 걸

이 느낌에
이름을 붙이지 않는다
붙이는 순간
사라질 것 같아서

나는
이 자리에 서서
아무 일도 하지 않은 채
시간이 나를 지나가게 둔다

이게 고독인지
아니면
살아 있다는 증거인지
아직은
확인하지 않는다

다만
도시가 다시 소란스러워질 때까지
이 적막을
놓치지 않고
여기 남아 있다`,
          },
        ],
      },
      {
        title: "에필로그",
        works: [
          {
            id: "gaehwa-park-minjae",
            title: "개화",
            author: "박민재",
            type: "산문",
            body: `탁, 탁, 탁. 의미 없는 타자가 이어집니다. 컴퓨터 화면을 뚫어지게 바라보고 있지만, 정신은 이미 딴곳에 가 있습니다. 참 오랜만에 앉은 자리입니다. 이런저런 핑계로, 유일한 목표라 믿었던 이것마저 잊고 살다가 문득 생각이 났습니다.

꿈은 있었습니다. 어렸을 적에는 세상을 구하는 파워레인저가 되고 싶었고, 조금 더 커서는 과학자가, 그다음에는 요리사가 되고 싶었습니다. 그렇게 달려왔다고 생각했는데, 정신을 차려보니 지금의 제가 있습니다.

“지금은 꿈이 뭐야?”라고 누가 묻는다면, 저는 작가가 되고 싶다고 말합니다. 책을 읽을 때, 문장들이 마음 어딘가를 건드리는 순간이 있습니다. 저도 그런 세계를 만들어보고 싶다고 생각합니다. 그래서 그렇게 대답합니다.

그런데 가끔은 헷갈립니다. 정말 쓰고 싶은 건지, 아니면 아무것도 아닌 사람이 되기 싫어서 꿈이라는 이름을 하나 붙들고 있는 건지.

사람들은 꿈을 말할 때마다 너무 쉽게 반짝입니다. 하고 싶은 일, 가고 싶은 곳, 되고 싶은 사람. 그 말들 사이에서 저는 자꾸만 어두워집니다. 누군가의 확신은 이상하게 제 불확실함을 더 선명하게 만들고, 누군가의 빛은 제가 서 있는 자리를 더 초라하게 만듭니다.

화면을 끄면 검은 액정에는 별도, 꽃도 아닌 제 얼굴만 남습니다. 가증스럽게도 그런 얼굴을 하고도 저는 아직 무언가가 되고 싶어 합니다. 저렇게 빛나는 사람을 봐버린 이상, 저도 빛나야 할 것만 같습니다. 적어도 빛나려고 애쓰는 척이라도 해야 할 것 같습니다.

하지만 그런 마음은 오래가지 않습니다. 몇 줄을 쓰고, 몇 번을 다짐하고, 다시 아무것도 아닌 사람처럼 멈춰 있습니다. 그러다 또 한심하다고 욕하고, 또 자극을 찾고, 또 잠깐 뜨거워졌다가 식습니다. 저는 늘 이런 식입니다. 되고 싶은 것들은 있는데, 되는 법은 모르고, 포기하기에는 너무 오래 바라봤고, 계속하기에는 너무 자주 지쳤습니다.

하고 싶다고 말하는 것들은 너무 높습니다. 생각했다는 사실마저 부끄러워질 만큼, 저 같은 사람에게는 너무나도 큰 벽처럼 느껴집니다.

어쩌면 저는 저 반짝이는 사람들을 더 찬란하게 보이게 하는 암흑일 뿐일지도 모릅니다. 저 성신(星辰)들이 빛나기 위해 필요한, 이름 없는 밤일지도 모릅니다.

그래도 한 번쯤은 묻고 싶습니다.

잠깐이라도 반짝였었나요.

저도 언젠가는 저 성신(星辰)들 중 하나가 될 수 있을까요.`,
          },
          {
            id: "maecheummal",
            title: "맺음말",
            author: "새결 일동",
            type: "맺음말",
            body: `이 호를 덮으면서, 우리는 실리지 못한 것들을 생각합니다. 미처 완성되지 않은 목소리들, 아직 지면을 찾지 못한 문장들. 그것들이 다음 호를 살아 있게 만들 것입니다.

한 권으로 완성되는 잡지를 만들고 싶지 않습니다. 다음을 기다리게 하는 잡지이고 싶습니다.

다음 달에 다른 결로 돌아오겠습니다.

새결 일동`,
          },
        ],
      },
    ],
  },
  {
    id: "2026-06",
    archiveDate: "2026. 06",
    archiveTitle: "준비 중",
    archiveDescription: "2호 · 예정",
    status: "upcoming",
  },
  {
    id: "2026-07",
    archiveDate: "2026. 07",
    archiveTitle: "예정",
    archiveDescription: "3호",
    status: "upcoming",
  },
  {
    id: "2026-08",
    archiveDate: "2026. 08",
    archiveTitle: "예정",
    archiveDescription: "4호",
    status: "upcoming",
  },
];

const navItems = [
  { label: "이번 호", href: "/issue/2026-05-gaehwa" },
  { label: "문예지모음", href: "/issues" },
  { label: "필진", href: "/poets" },
  { label: "투고안내", href: "/submit" },
  { label: "소개", href: "/about" },
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue/:slug" element={<IssuePage />} />
        <Route path="/issue/:slug/work/:workId" element={<WorkPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/poems" element={<Navigate to="/issue/2026-05-gaehwa" replace />} />
        <Route path="/poets" element={<PoetsPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };

  return (
    <header className={`sg-header ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <Link className="sg-header-logo nav-logo" to="/" aria-label="새결 처음으로" onClick={handleNavClick}>
        새결
      </Link>
      <button
        className="sg-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className="sg-primary-nav nav" aria-label="주요 메뉴">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/"}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function HomePage() {
  const currentIssue = issues.find((issue) => issue.status === "active");

  return (
    <main>
      <section className="sg-hero" id="home">
        <div className="sg-hero-inner">
          <AnimatedTitle />
          <p>문학의 새로운 호흡, 새결</p>
          <div className="sg-hero-actions">
            <Link to={`/issue/${currentIssue.slug}`}>이번 호 읽기</Link>
            <Link to="/submit">투고 안내</Link>
          </div>
        </div>
      </section>

      <section className="sg-section sg-current" id="current-issue">
        <SectionTitle eyebrow="이번 호" title="2026년 5월호 · 개화" />
        <div className="sg-main-grid">
          <IssueCard issue={currentIssue} />
          <CountdownTimer targetDate={currentIssue.nextIssueDate} />
        </div>
      </section>

      <SubmitSection />
    </main>
  );
}

function AnimatedTitle() {
  return (
    <h1 className="sg-title-animation" aria-label="새결">
      {"새결".split("").map((letter, index) => (
        <span key={letter} style={{ "--delay": `${index * 140}ms` }}>{letter}</span>
      ))}
    </h1>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="sg-section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function IssueCard({ issue }) {
  return (
    <Link className="sg-featured-issue" to={`/issue/${issue.slug}`}>
      <div className="sg-featured-copy">
        <p>새결</p>
        <h3>Vol.1</h3>
        <dl>
          <div>
            <dt>발행</dt>
            <dd>{issue.title}</dd>
          </div>
          <div>
            <dt>구분</dt>
            <dd>{issue.label}</dd>
          </div>
        </dl>
        <span>더보기 →</span>
      </div>
      <div className="sg-cover-card">
        <span>{issue.title}</span>
        <strong>{issue.theme}(開花)</strong>
        <small>새결 · {issue.label}</small>
      </div>
    </Link>
  );
}

function IssueShelfCard({ issue }) {
  const content = (
    <>
      <span className="sg-shelf-date">{issue.archiveDate}</span>
      <strong>{issue.archiveTitle}</strong>
      <em>{getArchiveDescription(issue)}</em>
      {issue.badge && <b>{issue.badge}</b>}
    </>
  );

  if (issue.status === "active") {
    return (
      <Link className="sg-shelf-card is-active" to={`/issue/${issue.slug}`}>
        {content}
      </Link>
    );
  }

  return (
    <article className="sg-shelf-card is-upcoming" aria-label={`${issue.archiveDate} ${issue.archiveTitle}`}>
      {content}
    </article>
  );
}

function CountdownTimer({ targetDate }) {
  const [remaining, setRemaining] = useState(() => getRemainingTime(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemainingTime(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const units = [
    ["Days", remaining.days],
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds],
  ];

  return (
    <section className="sg-countdown" aria-label="다음 호 발행 카운트다운">
      <p>다음 호 발행까지</p>
      <strong>{remaining.isPast ? "D-0" : `D-${remaining.days}`}</strong>
      <div className="sg-countdown-grid">
        {units.map(([label, value]) => (
          <div key={label}>
            <b>{String(value).padStart(2, "0")}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <small>2026년 6월 13일 발행 예정</small>
    </section>
  );
}

function IssuePage() {
  const { slug } = useParams();
  const issue = issues.find((item) => item.slug === slug && item.status === "active");
  const [commentsOpen, setCommentsOpen] = useState(false);

  if (!issue) return <Navigate to="/" replace />;

  return (
    <main>
      <article className="sg-issue-page" id="issue-document">
        <IssueCover issue={issue} />
        <TextSection id="preface" eyebrow="창간사" body={issue.preface} />
        <TableOfContents issue={issue} />
        <IssueActions issue={issue} onToggleComments={() => setCommentsOpen((value) => !value)} commentsOpen={commentsOpen} />
        {commentsOpen && <IssueComments issue={issue} />}
        <nav className="sg-issue-end" aria-label="호수 하단 이동">
          <Link to="/">처음으로</Link>
          <a href="#contents" onClick={(event) => scrollToAnchor(event, "contents")}>목차로</a>
        </nav>
      </article>
    </main>
  );
}

function IssueCover({ issue }) {
  return (
    <header className="sg-issue-cover">
      <div className="sg-reading-shell">
        <p>[2026년 5월]</p>
        <h1>『새결』 {issue.label}</h1>
        <dl>
          <div>
            <dt>주제</dt>
            <dd>{issue.theme}</dd>
          </div>
          <div>
            <dt>편집위원</dt>
            <dd>{issue.editors.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

function IssueActions({ issue, onToggleComments, commentsOpen }) {
  const shareIssue = async () => {
    const url = `${window.location.origin}/issue/${issue.slug}`;
    const title = `새결 ${issue.displayTitle}`;

    if (navigator.share) {
      await navigator.share({ title, text: title, url });
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <section className="sg-issue-actions" aria-label={`${issue.displayTitle} 도구`}>
      <div className="sg-reading-shell">
        <a href={issue.pdfPath} download>PDF 저장</a>
        <button type="button" onClick={shareIssue}>공유하기</button>
        <button type="button" className={commentsOpen ? "is-active" : ""} onClick={onToggleComments}>댓글 보기</button>
      </div>
    </section>
  );
}

function TextSection({ id, eyebrow, body }) {
  return (
    <section id={id} className="sg-literary-section">
      <div className="sg-reading-shell">
        <p className="sg-section-eyebrow">{eyebrow}</p>
        <TextBody text={body} variant="prose" />
      </div>
    </section>
  );
}

function TableOfContents({ issue }) {
  const editorEntries = issue.editorNotes.map((note) => ({
    id: `editor-note-${slugify(note.author)}`,
    title: "편집위원의 말",
    author: note.author,
  }));

  return (
    <section id="contents" className="sg-literary-section sg-contents">
      <div className="sg-reading-shell">
        <p className="sg-section-eyebrow">목차</p>
        <div className="sg-toc-part">
          <h2>여는 글</h2>
          <ol>
            <li>
              <a href="#preface" onClick={(event) => scrollToAnchor(event, "preface")}>
                <strong>창간사</strong>
                <span>새결 일동</span>
              </a>
            </li>
            {editorEntries.map((entry) => (
              <li key={entry.id}>
                <Link to={`/issue/${issue.slug}/work/${entry.id}`}>
                  <strong>{entry.title}</strong>
                  <span>{entry.author}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        {issue.sections.map((section) => (
          <div key={section.title} className="sg-toc-part">
            <h2>{section.title}</h2>
            <ol>
              {section.works.map((work) => (
                <li key={work.id}>
                  <Link to={`/issue/${issue.slug}/work/${work.id}`}>
                    <strong>{work.title}</strong>
                    <span>{work.author}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkPage() {
  const { slug, workId } = useParams();
  const issue = issues.find((item) => item.slug === slug);
  const entries = issue ? getIssueEntries(issue) : [];
  const index = entries.findIndex((entry) => entry.id === workId);
  const work = entries[index];

  if (!issue || !work) return <Navigate to={issue ? `/issue/${issue.slug}` : "/"} replace />;

  const previous = entries[index - 1];
  const next = entries[index + 1];

  return (
    <main className="sg-work-page">
      <article className={`sg-work-reader ${work.type === "시" ? "is-poem" : "is-prose"}`}>
        <div className="sg-reading-shell">
          <p className="sg-work-kicker">{issue.displayTitle}</p>
          <header>
            <span>{work.type}</span>
            <h1>{work.title}</h1>
            <p>{work.author}</p>
          </header>
          <TextBody text={work.body} variant={work.type === "시" ? "poem" : "prose"} />
          <nav className="sg-work-nav" aria-label="작품 이동">
            {previous ? <Link to={`/issue/${issue.slug}/work/${previous.id}`}>이전 작품</Link> : <span />}
            <Link to={`/issue/${issue.slug}`}>목차로 돌아가기</Link>
            {next ? <Link to={`/issue/${issue.slug}/work/${next.id}`}>다음 작품</Link> : <span />}
          </nav>
        </div>
      </article>
    </main>
  );
}

function WorkArticle({ work }) {
  const isProse = work.type !== "시";

  return (
    <article id={work.id} className={`sg-work ${isProse ? "is-prose" : "is-poem"}`}>
      <header>
        <span>{work.type}</span>
        <h3>{work.title}</h3>
        <p>{work.author}</p>
      </header>
      <TextBody text={work.body} variant={isProse ? "prose" : "poem"} />
    </article>
  );
}

function TextBody({ text, variant }) {
  if (variant === "poem") {
    return <div className="sg-text-body is-poem">{text}</div>;
  }

  return (
    <div className="sg-text-body is-prose">
      {text.split(/\n{2,}/).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function ContributorsSection() {
  return (
    <section className="sg-section sg-contributors" id="contributors">
      <SectionTitle eyebrow="필진" title="창간호를 만든 사람들" />
      <ContributorGrid />
    </section>
  );
}

function IssuesPage() {
  return (
    <main>
      <section className="sg-section" id="previous-issues">
        <SectionTitle eyebrow="문예지모음" title="지난 호">
          <p className="sg-section-lead">발행된 호수와 앞으로 놓일 지면을 조용히 모아둡니다.</p>
        </SectionTitle>
        <div className="sg-issue-shelf">
          {issues.map((issue) => (
            <IssueShelfCard key={issue.id} issue={issue} />
          ))}
        </div>
      </section>
    </main>
  );
}

function PoetsPage() {
  return (
    <main>
      <section className="sg-section sg-contributors sg-poets-page">
        <SectionTitle eyebrow="필진" title="새결을 이루는 목소리" />
        <ContributorGrid />
      </section>
    </main>
  );
}

function SubmitPage() {
  return (
    <main>
      <SubmitSection />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}

function ContributorGrid() {
  const featuredEditors = contributors.filter((person) => ["yang-junhee", "park-minjun"].includes(person.id));
  const writers = contributors.filter((person) => !["yang-junhee", "park-minjun"].includes(person.id));

  return (
    <>
      <div className="sg-contributor-grid sg-editor-grid" aria-label="편집진">
        {featuredEditors.map((person) => (
          <ContributorCard person={person} variant="featured" key={person.id} />
        ))}
      </div>
      <section className="sg-writer-section" aria-labelledby="writer-section-title">
        <div className="sg-writer-section-title">
          <h3 id="writer-section-title">기고자</h3>
        </div>
        <div className="sg-contributor-grid sg-writer-grid">
          {writers.map((person) => (
            <ContributorCard person={person} variant="compact" key={person.id} />
          ))}
        </div>
      </section>
    </>
  );
}

function ContributorCard({ person, variant = "compact" }) {
  return (
    <article className={`sg-contributor-card is-${variant}`}>
      <img className="sg-contributor-image" src={person.image} alt={`${person.name} 사진`} loading="lazy" />
      <header>
        <h3>{person.name}</h3>
        <span>{person.role}</span>
      </header>
      <p className="sg-contributor-line">{person.line}</p>
      <p>{person.description}</p>
    </article>
  );
}

function SubmitSection({ compact = false }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <section className={`sg-section sg-submit ${compact ? "is-compact" : ""}`} id={compact ? "issue-submit" : "submit"}>
      <SectionTitle eyebrow="투고 안내" title="당신의 문장이 다음 호에 닿는 자리">
        <p className="sg-section-lead">새결은 매달 한 권의 문예지를 꾸립니다. 아래 규정을 확인한 뒤 원고와 소개를 함께 보내주세요.</p>
      </SectionTitle>
      <div className="sg-submit-guide" aria-label="투고 규정과 분과별 안내">
        <article className="sg-submit-panel sg-submit-rules">
          <header>
            <p>Submission Rules</p>
            <h3>투고 규정</h3>
          </header>
          <dl>
            {submissionRules.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="sg-submit-panel sg-submit-departments">
          <header>
            <p>Departments</p>
            <h3>분과별 안내</h3>
          </header>
          <div className="sg-department-table" role="table" aria-label="분과별 투고 일정">
            <div className="sg-department-row is-head" role="row">
              <span role="columnheader">분과</span>
              <span role="columnheader">주제</span>
              <span role="columnheader">마감</span>
              <span role="columnheader">상태</span>
            </div>
            {submissionDepartments.map((item) => (
              <div className="sg-department-row" role="row" key={item.department}>
                <span role="cell">{item.department}</span>
                <span role="cell">{item.theme}</span>
                <span role="cell">{item.deadline}</span>
                <span role="cell">
                  <b className={`sg-status-badge ${item.status === "모집 중" ? "is-open" : "is-pending"}`}>{item.status}</b>
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
      <form className="sg-submit-form" onSubmit={handleSubmit}>
        {state.succeeded && <p className="sg-form-status">기고가 접수되었습니다. 보내주신 문장을 확인하겠습니다.</p>}
        <ValidationError className="sg-form-error" errors={state.errors} />
        <input type="hidden" name="_subject" value="새결 기고 접수" />
        <label>이름<input name="name" type="text" required placeholder="이름" /></label>
        <ValidationError className="sg-form-error" field="name" errors={state.errors} />
        <label>이메일<input name="email" type="email" required placeholder="이메일" /></label>
        <ValidationError className="sg-form-error" field="email" errors={state.errors} />
        <label>작품 제목<input name="workTitle" type="text" required placeholder="작품 제목" /></label>
        <ValidationError className="sg-form-error" field="workTitle" errors={state.errors} />
        <label>작품 소개<textarea name="message" rows="10" required placeholder="작품 소개" /></label>
        <ValidationError className="sg-form-error" field="message" errors={state.errors} />
        <label>첨부 링크 또는 메시지<textarea name="bio" rows="4" placeholder="첨부 링크 또는 메시지" /></label>
        <ValidationError className="sg-form-error" field="bio" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>{state.submitting ? "보내는 중" : "기고하기"}</button>
      </form>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="sg-section sg-about" id="about">
      <SectionTitle eyebrow="소개" title="새결은 한 호의 순서를 존중하는 웹 문예지입니다.">
        <p className="sg-section-lead">빠르게 넘기는 피드가 아니라 표지, 글, 목차, 작품, 댓글로 이어지는 읽기의 흐름을 만듭니다.</p>
      </SectionTitle>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sg-footer">
      <div>
        <Link to="/" className="sg-footer-logo">새결</Link>
        <p>문학의 새로운 호흡, 새결</p>
      </div>
      <nav aria-label="하단 메뉴">
        <Link to="/">처음</Link>
        <Link to="/issues">문예지모음</Link>
        <Link to="/submit">투고안내</Link>
        <Link to="/about">소개</Link>
        <Link to="/poets">필진</Link>
      </nav>
      <address>
        <span>연락처</span>
        <a href="tel:01032859833">010-3285-9833</a>
        <a href="mailto:jhyang@thesaegyeol.com">jhyang@thesaegyeol.com</a>
      </address>
    </footer>
  );
}

function IssueComments({ issue }) {
  useEffect(() => {
    window.disqus_config = function disqusConfig() {
      this.page.url = `${window.location.origin}/issue/${issue.slug}`;
      this.page.identifier = issue.id;
      this.page.title = `새결 - ${issue.displayTitle}`;
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
  }, [issue]);

  return (
    <section className="sg-literary-section sg-comments" id="comments">
      <div className="sg-reading-shell">
        <p className="sg-section-eyebrow">댓글</p>
        <div id="disqus_thread" />
        <noscript>댓글을 보려면 JavaScript를 활성화해주세요.</noscript>
      </div>
    </section>
  );
}

function getRemainingTime(targetDate) {
  const target = new Date(targetDate);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  const safeDiff = Math.max(0, diff);
  const totalSeconds = Math.floor(safeDiff / 1000);
  const calendarDays = Math.max(0, Math.round((getKoreaDateStart(target) - getKoreaDateStart(now)) / 86400000));

  return {
    isPast: diff <= 0,
    days: calendarDays,
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function getKoreaDateStart(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${value}T00:00:00+09:00`));
}

function getIssueEntries(issue) {
  const editorEntries = issue.editorNotes.map((note) => ({
    id: `editor-note-${slugify(note.author)}`,
    title: "편집위원의 말",
    author: note.author,
    type: "편집위원의 말",
    body: note.body,
  }));

  return [
    ...editorEntries,
    ...issue.sections.flatMap((section) => section.works.map((work) => ({ ...work, sectionTitle: section.title }))),
  ];
}

function slugify(value) {
  const known = {
    박민준: "park-minjun",
    양준희: "yang-junhee",
  };

  return known[value] || value.toLowerCase().replace(/\s+/g, "-");
}

function scrollToAnchor(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (target) scrollToElement(target);
}

function scrollToElement(element) {
  const headerHeight = document.querySelector(".sg-header")?.getBoundingClientRect().height ?? 0;
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 14;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
}

export default App;
