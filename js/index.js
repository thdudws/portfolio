$(document).ready(function() {
    console.clear();

    // Helper functions for random values
    const random = (min, max) => (direction = 1) => (min + (max - min) * Math.random()) * direction;

    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
        gsap.set(blur, {
            x: randomX(),
            y: randomY(),
            rotation: randomAngle()
        });

        moveX(blur, 1);
        moveY(blur, -1);
        rotate(blur, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            ease: "sine.inOut",
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        gsap.to(target, randomTime(), {
            x: randomX(direction),
            ease: "sine.inOut",
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        gsap.to(target, randomTime(), {
            y: randomY(direction),
            ease: "sine.inOut",
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    // gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray('.flex_container').forEach(section => {
    //     gsap.set(section, { scale: 1, opacity: 1 });
    //     gsap.from(section, {
    //         scrollTrigger: {
    //             trigger: section,
    //             start: "top 80%",
    //             end: "top top",
    //             scrub: 1
    //         },
    //         scale: 0.5,
    //         opacity: 1,
    //         duration: 1,
    //         ease: "power3.out"
    //     });
    // });

    let index = 0,
        interval = 1000;

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = star => {
        star.style.setProperty("--star-left", rand(-10, 100) + "%");
        star.style.setProperty("--star-top", rand(-40, 80) + "%");

        star.style.animation = "none"; 
        star.offsetHeight; 
        star.style.animation = ""; 
    };

    for (const star of document.getElementsByClassName("magic-star")) {
        setTimeout(() => {
            animate(star);
            setInterval(() => animate(star), 1000); 
        }, index++ * (interval / 3));
    }

    $(".nav__list").creepingAnchor({
        offsetLeft: 0,
        position: "bottom",
        speed: 400,
        anchors: true,
        onViewChange: function(section) {
            console.log(section);
        }
    });

    // $(document).ready(function() {
    //     $(".nav__list a").on("click", function(e) {
    //         e.preventDefault();
    
    //         const targetSectionId = $(this).attr("href");
    
    //         const targetSection = $(targetSectionId);
    //         const offsetTop = targetSection.offset().top;
    
    //         const offset = $(this).data("offset") || 0;
    
    //         const navHeight = $(".nav").outerHeight();
    
    //         const scrollTo = offsetTop - navHeight + offset;
    
    //         const currentScroll = $(window).scrollTop();
    //         const direction = currentScroll < scrollTo ? 'down' : 'up';
    
    //         if (direction === 'up') {
    //             $("html, body").animate({
    //                 scrollTop: scrollTo
    //             }, 350);
    //         }
    //         else if (direction === 'down') {
    //             $("html, body").animate({
    //                 scrollTop: scrollTo - 180
    //             }, 300);
    //         }
    //     });
    // });    
    
});  


$(document).ready(function(){
    // 호버 이벤트 대신 클릭 이벤트
    $(".imgbox").click(function(){
        const imageName = $(this).data("image");
        
        // 모든 팝업 숨기기
        $(".popup").hide();
        
        // 해당하는 팝업만 보이게
        $("#popup" + imageName.charAt(0).toUpperCase() + imageName.slice(1))
            .stop(true, true)
            .fadeIn(200);
        
        // 팝업 오버레이 보이기
        $("#popupOverlay")
            .stop(true, true)
            .fadeIn(200);
    });
  
    // 오버레이 클릭 시 팝업 닫기
    $("#popupOverlay").click(function(){
        $(".popup, #popupOverlay")
            .stop(true, true)
            .fadeOut(200);
    });
});

  
  
  
  
  
  
  
  
  