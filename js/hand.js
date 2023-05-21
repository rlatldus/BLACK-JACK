function makeCursor() {
  document.onmousemove = function (e) {
    var div = document.getElementById('div');
    div.style.left = event.clientX + 1 + 'px'; // 단위 "px"를 꼭 붙여야 함
    div.style.top = event.clientY + 1 + 'px';
  };
}
