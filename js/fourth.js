// index.js
document.addEventListener("DOMContentLoaded", function () {
    const text = "봐주셔서 감사합니다.\n도전을 통해 성장하는 개발자가 되겠습니다.";
    const element = document.getElementById("typewriter");
    let index = 0; // index 변수 초기화
  
    // 랜덤한 시간(50ms에서 150ms 사이)을 반환하는 함수
    function getRandomDelay() {
      return Math.random() * 100 + 50; // 50ms~150ms 사이
    }
  
    // 타자 애니메이션 함수
    function type() {
      if (index < text.length) {
        element.innerText += text.charAt(index); // 한 글자씩 추가
        index++;
        setTimeout(type, getRandomDelay());
      } else {
        setTimeout(() => {
          element.innerHTML = "";
          index = 0;
          type();
        }, 1000);
      }
    }
  
    // 타자 애니메이션 시작
    type();
  });
  