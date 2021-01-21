let title = document.getElementsByTagName("TITLE");
let banner = document.getElementsByClassName("page-banner")[0];

if (title[0].innerHTML == "Music") {
  banner.style.background = "url(imgs/microphone.jpg) no-repeat center center";
  banner.style.backgroundSize = "cover";
} else if (title[0].innerHTML == "News") {
  banner.style.background = "url(imgs/newspaper.jpg) no-repeat center center";
  banner.style.backgroundSize = "cover";
}