document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {

let Left, Top;

    while (true) {
        Left = Math.random() * (960 - 100);
        Top = Math.random() * (534 - 100);
        if (Top > 200){
            break;
        }
    }
    el.style.left = Left + 'px';
    el.style.top  = Top + 'px';
  });
});


document.querySelectorAll('.foo').forEach(function (el) {
 el.addEventListener('mouseover', function () {

let Left, Top;

    while (true) {
        Left = Math.random() * (850 - 40);
        Top = Math.random() * (320 - 40);
        if (Top > 190 && Left > 360) {
            break;
        }
    }
    el.style.left = Left + 'px';
    el.style.top  = Top + 'px';
 });
});