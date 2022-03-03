const hero = document.getElementsByClassName("hero");
hero[0].innerText = "dede";

const img = document.getElementsByTagName("img");
img[0].src =
  "https://www.99.co/blog/indonesia/wp-content/uploads/2021/07/idntimes-com.jpg";

const h1 = document.getElementsByTagName("h1");
h1[2].innerText = "<b>iku iki</b>";

for (i = 0; i < h1.length; i++) {
  h1[i].style.color = "red";
}

for (let i = 0; i < h1.length; i++) {
  h1[i].addEventListener("click", function () {
    alert(h1[i].innerText);
  });
}
const fitur = document.getElementById("fitur");
fitur.innerHTML = "<h1>dede</h1>";
