/* 과정 전체 목차(단일 원본). 각 챕터 페이지와 index.html이 이 목록으로 사이드바·페이지 넘김·목차를 그린다. */
var COURSE = [
  { part: "PART 1 · C 기초 완전 정복", chapters: [
    { id: "ch01", n: "01", t: "프로그램 만들기", s: [["01-1", "프로그램과 C 언어"], ["01-2", "컴파일과 컴파일러 사용법"]] },
    { id: "ch02", n: "02", t: "상수와 데이터 출력", s: [["02-1", "C 프로그램의 구조와 데이터 출력 방법"], ["02-2", "상수와 데이터 표현 방법"]] },
    { id: "ch03", n: "03", t: "변수와 데이터 입력", s: [["03-1", "변수"], ["03-2", "데이터 입력"]] },
    { id: "ch04", n: "04", t: "연산자", s: [["04-1", "산술 연산자, 관계 연산자, 논리 연산자"], ["04-2", "그 외 유용한 연산자"]] },
    { id: "ch05", n: "05", t: "선택문(if, switch-case)", s: [["05-1", "if문"], ["05-2", "if문 활용과 switch-case문"]] },
    { id: "ch06", n: "06", t: "반복문", s: [["06-1", "while문, for문, do-while문"], ["06-2", "반복문 활용"]] },
    { id: "ch07", n: "07", t: "함수", s: [["07-1", "함수의 작성과 사용"], ["07-2", "여러 가지 함수 유형"]] },
    { id: "ch08", n: "08", t: "배열", s: [["08-1", "배열의 선언과 사용"], ["08-2", "문자를 저장하는 배열"]] },
    { id: "ch09", n: "09", t: "포인터", s: [["09-1", "포인터의 기본 개념"], ["09-2", "포인터 완전 정복을 위한 포인터 이해하기"]] },
    { id: "ch10", n: "10", t: "배열과 포인터", s: [["10-1", "배열과 포인터의 관계"], ["10-2", "배열을 처리하는 함수"]] },
    { id: "ch11", n: "11", t: "문자", s: [["11-1", "아스키 코드 값과 문자 입출력 함수"], ["11-2", "버퍼를 사용하는 입력 함수"]] },
    { id: "ch12", n: "12", t: "문자열", s: [["12-1", "문자열과 포인터"], ["12-2", "문자열 연산 함수"]] },
    { id: "ch13", n: "13", t: "변수의 영역과 데이터 공유", s: [["13-1", "변수 사용 영역"], ["13-2", "함수의 데이터 공유 방법"]] },
    { id: "ch14", n: "14", t: "다차원 배열과 포인터 배열", s: [["14-1", "다차원 배열"], ["14-2", "포인터 배열"]] },
    { id: "ch15", n: "15", t: "응용 포인터", s: [["15-1", "이중 포인터와 배열 포인터"], ["15-2", "함수 포인터와 void 포인터"]] },
    { id: "ch16", n: "16", t: "메모리 동적 할당", s: [["16-1", "동적 할당 함수"], ["16-2", "동적 할당 저장 공간의 활용"]] },
    { id: "ch17", n: "17", t: "사용자 정의 자료형", s: [["17-1", "구조체"], ["17-2", "구조체 활용, 공용체, 열거형"]] },
    { id: "ch18", n: "18", t: "파일 입출력", s: [["18-1", "파일 개방과 입출력"], ["18-2", "다양한 파일 입출력 함수"]] },
    { id: "ch19", n: "19", t: "전처리와 분할 컴파일", s: [["19-1", "전처리 지시자"], ["19-2", "분할 컴파일"]] }
  ]},
  { part: "PART 2 · 금융 IT 베테랑 트랙", chapters: [
    { id: "ch20", n: "20", t: "비트 연산과 데이터 표현", s: [["20-1", "정수의 내부 표현: 2의 보수와 오버플로"], ["20-2", "비트 연산과 플래그 설계"]] },
    { id: "ch21", n: "21", t: "금융 계산과 정밀도", s: [["21-1", "부동소수점의 함정"], ["21-2", "정수 기반 금액 계산과 반올림 규칙"]] },
    { id: "ch22", n: "22", t: "시큐어 코딩", s: [["22-1", "메모리 안전과 입력 검증"], ["22-2", "금융보안 시큐어 코딩 실무"]] },
    { id: "ch23", n: "23", t: "실전 자료구조", s: [["23-1", "연결 리스트, 스택, 큐"], ["23-2", "해시 테이블, 정렬, 탐색"]] },
    { id: "ch24", n: "24", t: "전문(電文) 처리", s: [["24-1", "고정길이 전문과 구조체 매핑"], ["24-2", "엔디안, 패킹, 문자코드 변환"]] },
    { id: "ch25", n: "25", t: "배치 프로그래밍", s: [["25-1", "대용량 파일 배치의 구조"], ["25-2", "정합성 검증과 재처리 설계"]] },
    { id: "ch26", n: "26", t: "유닉스 시스템 프로그래밍", s: [["26-1", "프로세스와 시그널"], ["26-2", "IPC: 파이프, 공유메모리, 세마포어"]] },
    { id: "ch27", n: "27", t: "네트워크 소켓 프로그래밍", s: [["27-1", "TCP 소켓 기초"], ["27-2", "전문 송수신 서버 만들기"]] },
    { id: "ch28", n: "28", t: "멀티스레드와 동시성", s: [["28-1", "pthread 기초"], ["28-2", "동기화와 계좌이체 경쟁 조건"]] },
    { id: "ch29", n: "29", t: "DB 연동과 트랜잭션", s: [["29-1", "Embedded SQL(Pro*C)"], ["29-2", "트랜잭션과 TP 모니터"]] },
    { id: "ch30", n: "30", t: "디버깅과 장애 대응", s: [["30-1", "디버깅 도구: gdb, core, Valgrind, ASan"], ["30-2", "로그 설계와 장애 분석"]] },
    { id: "ch31", n: "31", t: "빌드, 성능, 이식성", s: [["31-1", "make와 라이브러리"], ["31-2", "성능 최적화와 이식성"]] },
    { id: "ch32", n: "32", t: "캡스톤: 미니 코어뱅킹", s: [["32-1", "설계: 원장, 거래, 전문"], ["32-2", "구현과 일마감 배치"]] },
    { id: "ch33", n: "33", t: "CS 면접 총정리", s: [["33-1", "C 언어·메모리·컴퓨터 구조 면접"], ["33-2", "운영체제·네트워크·DB·자료구조 면접"]] }
  ]},
  { part: "부록", chapters: [
    { id: "appendix", n: "부록", t: "부록", s: [["A", "아스키 코드표"], ["B", "선택 정렬 알고리즘"], ["C", "여기서 잠깐 모음"], ["D", "금융 IT 실무 체크리스트"]] }
  ]}
];

(function () {
  function flat() {
    var out = [];
    COURSE.forEach(function (p) { p.chapters.forEach(function (c) { c.part = p.part; out.push(c); }); });
    return out;
  }
  function secId(code) { return "s" + code.replace(/[^0-9A-Za-z]/g, "-"); }
  window.COURSE_FLAT = flat();
  window.COURSE_SECID = secId;

  var cur = document.body.getAttribute("data-ch");
  var all = window.COURSE_FLAT;
  var idx = -1;
  for (var i = 0; i < all.length; i++) if (all[i].id === cur) idx = i;

  /* 화살표 마커: 페이지의 모든 인라인 SVG가 url(#arrow)로 공유 */
  var defs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  defs.setAttribute("width", "0"); defs.setAttribute("height", "0");
  defs.setAttribute("aria-hidden", "true");
  defs.style.position = "absolute";
  defs.innerHTML =
    '<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 z" style="fill:var(--accent)"/></marker>' +
    '<marker id="arrow-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 z" style="fill:var(--d-stroke)"/></marker></defs>';
  document.body.insertBefore(defs, document.body.firstChild);

  /* 사이드바 */
  var side = document.getElementById("sidebar");
  if (side) {
    var h = '<a href="index.html"' + (cur === "index" ? ' class="on"' : "") + '><span class="n">◆</span>과정 소개와 전체 목차</a>';
    COURSE.forEach(function (p) {
      h += '<p class="part">' + p.part + "</p>";
      p.chapters.forEach(function (c) {
        var on = c.id === cur;
        h += '<a href="' + c.id + '.html"' + (on ? ' class="on" aria-current="page"' : "") + '><span class="n">' + (c.id === "appendix" ? "+" : c.n) + "</span>" + c.t + "</a>";
        if (on) {
          h += '<div class="sub">';
          c.s.forEach(function (s) { h += '<a href="#' + secId(s[0]) + '">' + s[0] + " " + s[1] + "</a>"; });
          h += "</div>";
        }
      });
    });
    side.innerHTML = h;
    var onLink = side.querySelector("a.on");
    /* scrollIntoView는 창 전체까지 스크롤하므로 사이드바 안에서만 위치를 맞춘다 */
    if (onLink) side.scrollTop = onLink.offsetTop - side.clientHeight / 2 + onLink.offsetHeight / 2;
  }

  var btn = document.querySelector(".menu-btn");
  /* 모바일에서 사이드바 뒤를 덮는 반투명 배경 (바깥 탭 시 닫기) */
  var scrim = null;
  if (btn) {
    scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    scrim.setAttribute("aria-hidden", "true");
    document.body.appendChild(scrim);
    scrim.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
    });
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    /* ESC로 닫기 */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
  if (side) side.addEventListener("click", function (e) {
    if (e.target.closest("a")) document.body.classList.remove("nav-open");
  });

  /* 상단 위치 표시 */
  var where = document.querySelector(".topbar .where");
  if (where && idx >= 0) where.textContent = all[idx].part + " · " + (all[idx].id === "appendix" ? "" : "Chapter " + all[idx].n + " ") + all[idx].t;

  /* 페이지 넘김 */
  var content = document.querySelector(".content");
  if (content && idx >= 0) {
    var pg = document.createElement("nav");
    pg.className = "pager";
    pg.setAttribute("aria-label", "이전·다음 챕터");
    var ph = "";
    if (idx > 0) ph += '<a class="prev" href="' + all[idx - 1].id + '.html"><small>← 이전</small>' + all[idx - 1].t + "</a>";
    else ph += '<a class="prev" href="index.html"><small>← 처음으로</small>과정 소개</a>';
    if (idx < all.length - 1) ph += '<a class="next" href="' + all[idx + 1].id + '.html"><small>다음 →</small>' + all[idx + 1].t + "</a>";
    pg.innerHTML = ph;
    content.appendChild(pg);
    try { localStorage.setItem("c-course-last", all[idx].id); } catch (e) {}
  }

  /* 이 페이지 목차 */
  var rail = document.querySelector(".rail");
  var heads = content ? content.querySelectorAll("h2[id], h3[id]") : [];
  if (rail && heads.length) {
    var rh = "<p>이 페이지</p>";
    heads.forEach(function (el) {
      rh += '<a class="' + el.tagName.toLowerCase() + '" href="#' + el.id + '">' + el.textContent + "</a>";
    });
    rail.innerHTML = rh;
    var links = rail.querySelectorAll("a");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id); });
          }
        });
      }, { rootMargin: "-70px 0px -75% 0px" });
      heads.forEach(function (el) { io.observe(el); });
    }
  }

  /* 읽은 정도 */
  var bar = document.querySelector(".progress");
  if (bar) {
    var onScroll = function () {
      var d = document.documentElement;
      var max = d.scrollHeight - d.clientHeight;
      bar.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* 코드 복사 버튼 */
  document.querySelectorAll("figure.code:not(.out) > figcaption").forEach(function (cap) {
    var b = document.createElement("button");
    b.className = "copy-btn"; b.type = "button"; b.textContent = "복사";
    b.addEventListener("click", function () {
      var code = cap.parentNode.querySelector("pre");
      var text = code ? code.innerText : "";
      var done = function () { b.textContent = "복사됨"; setTimeout(function () { b.textContent = "복사"; }, 1400); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(code); });
      } else selectText(code);
    });
    cap.appendChild(b);
  });
  /* 목차 이동: 상단 바 높이를 빼고 부드럽게 스크롤. 브라우저 기본 앵커 이동은 sticky 바에 제목이 가려지거나
     아티팩트 뷰어 안에서 위치가 어긋날 수 있어 직접 계산한다. */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function headerOffset() {
    var tb = document.querySelector(".topbar");
    return (tb ? tb.getBoundingClientRect().bottom : 0) + 16;
  }
  function findTarget(hash) {
    if (!hash || hash.length < 2) return null;
    var id = hash.slice(1);
    try { id = decodeURIComponent(id); } catch (e) {}
    return document.getElementById(id);
  }
  function scrollToEl(el, smooth) {
    var d = el.closest && el.closest("details");
    if (d && !d.open) d.open = true;
    var top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduceMotion ? "smooth" : "auto" });
    el.classList.remove("jump-flash");
    void el.offsetWidth;
    el.classList.add("jump-flash");
    if (!el.hasAttribute("tabindex") && !/^(A|BUTTON|SUMMARY|INPUT)$/.test(el.tagName)) el.setAttribute("tabindex", "-1");
    try { el.focus({ preventScroll: true }); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest("a[href*='#']");
    if (!a) return;
    var href = a.getAttribute("href");
    var hashAt = href.indexOf("#");
    var page = href.slice(0, hashAt);
    var here = location.pathname.split("/").pop() || "index.html";
    if (page && page !== here) return;       /* 다른 챕터로 가는 링크는 이동 후 로드 시 처리 */
    var el = findTarget(href.slice(hashAt));
    if (!el) return;
    e.preventDefault();
    document.body.classList.remove("nav-open");
    scrollToEl(el, true);
    try { history.replaceState(null, "", "#" + el.id); } catch (err) {}
  });
  /* 다른 페이지에서 #절 링크로 들어온 경우: 글꼴과 코드 강조가 끝나 높이가 확정된 뒤 위치를 맞춘다 */
  if (location.hash) {
    var jump = function () { var el = findTarget(location.hash); if (el) scrollToEl(el, false); };
    var settle = function () { jump(); setTimeout(jump, 250); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle, settle);
    else window.addEventListener("load", settle);
  }

  function selectText(el) {
    if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
})();
