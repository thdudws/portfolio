document.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 이벤트 처리
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);

    targetSection !== "#about"
      ? card.classList.add("is-active")
      : card.classList.remove("is-active");

    card.setAttribute("data-state", targetSection);

    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));

    e.target.classList.add("is-active");
    section.classList.add("is-active");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });

  // IntersectionObserver를 이용한 섹션 스크롤 이벤트 처리
  const skillsElement = document.querySelector(".second_r .skils");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // .show 클래스를 추가하여 표시
          observer.unobserve(entry.target); // 더 이상 관찰하지 않음
        }
      });
    },
    { threshold: 0.1 } // threshold 값을 0.1로 설정 (요소가 화면에 10% 보일 때 트리거)
  );

  // IntersectionObserver로 활성화할 섹션을 관찰
  observer.observe(skillsElement);

  const skillSections = document.querySelectorAll(".f_skils, .b_skils, .tool");
  const navLinks = document.querySelectorAll(".nav__list a"); // 내비게이션 링크

  // requestAnimationFrame을 사용하여 스크롤 감지
  let isScrolling = false; // 스크롤 상태 확인 변수
  
  function handleScrollVisibility() {
    skillSections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add("visible"); // 화면에 보이면 'visible' 클래스 추가
      } else {
        section.classList.remove("visible"); // 화면에 없으면 'visible' 클래스 제거
      }
    });

    // .card 요소가 화면에 보일 때 visible 클래스 추가/제거
    const cards = document.querySelectorAll(".card"); // .card 클래스를 가진 모든 요소를 선택
    cards.forEach(function (card) {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.add("visible"); // 화면에 보이면 'visible' 클래스 추가
      } else {
        card.classList.remove("visible"); // 화면에 없으면 'visible' 클래스 제거
      }
    });
  }

  // Throttle 적용 (기본적으로 200ms마다 한 번만 실행)
  const throttledScroll = _.throttle(handleScrollVisibility, 200);

  // 스크롤 이벤트로 섹션 애니메이션 적용
  window.addEventListener("scroll", throttledScroll);

  // 페이지 로드 후 100ms 지연하여 초기 상태 확인
  window.addEventListener("load", () => {
    setTimeout(() => {
      throttledScroll(); // 페이지 로드 후 스크롤 이벤트 확인
    }, 100); // 100ms 지연 후 실행
  });

  // 페이지 로드 직후 바로 호출해서 초기 상태 확인
  throttledScroll();

  // IntersectionObserver로 섹션을 더욱 부드럽게 처리
  // 감지할 섹션을 IntersectionObserver로 처리
  const observerForVisibility = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // 화면에 보이면 'visible' 클래스를 추가
        } else {
          entry.target.classList.remove("visible"); // 화면에서 벗어나면 'visible' 클래스 제거
        }
      });
    },
    {
      threshold: 0.2, // 섹션이 20% 이상 보일 때 활성화
    }
  );

  // 스킬 섹션을 IntersectionObserver로 관찰
  skillSections.forEach((section) => {
    observerForVisibility.observe(section);
  });

  const h2Elements = document.querySelectorAll('h2.bounce');

  h2Elements.forEach(h2 => {
    const text = h2.textContent;
    h2.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
  });
});
