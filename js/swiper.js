

document.querySelectorAll('.imgbox').forEach(item => {
  item.addEventListener('mouseenter', function() {
    // data-image 속성을 통해 어떤 이미지를 보여줄지 결정
    let imageName = this.getAttribute('data-image');
    
    // 모든 팝업 숨기기
    document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
    });

    // 해당하는 팝업만 보이기
    let popupToShow = document.getElementById(`popup${imageName.charAt(0).toUpperCase() + imageName.slice(1)}`);
    popupToShow.style.display = 'block';
    
    // 팝업 오버레이 보이기
    document.getElementById('popupOverlay').style.display = 'flex';
  });

  item.addEventListener('mouseleave', function() {
    // 팝업 숨기기
    document.getElementById('popupOverlay').style.display = 'none';
    document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
    });
  });
});
z


