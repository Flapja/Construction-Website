/*Change Images*/
document.addEventListener("DOMContentLoaded", function () {
  var images = [
    "images/const-1.jpg",
    "images/const-2.jpg",
    "images/const-3.jpg",
  ]; // Resim dosya adlarını buraya ekleyin

  var currentIndex = 0;

  setInterval(function () {
    var imageElement = document.getElementById("myImage");

    // Opaklık efektini uygula
    imageElement.classList.add("opacity-0");

    // Bir süre bekleyip sonra resmi değiştir
    setTimeout(function () {
      imageElement.src = images[currentIndex];
      // Opaklık efektini artır
      imageElement.classList.remove("opacity-0");
    }, 500); // 500 milisaniye bekletme süresi (bu süreyi isteğinize göre ayarlayabilirsiniz)

    currentIndex = (currentIndex + 1) % images.length;
  }, 5000);
});

/*Change Text*/
function changeText() {
  document.getElementById("button1").innerText = "Thanks!";
}
