const thumbs = document.querySelectorAll(".thumbs>img")
const image = document.querySelector(".photos>img")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

console.log(thumbs[0].src)
let index = 0;

thumbs.forEach(thumb => {
  thumb.addEventListener("click", (e) => {
    image.src = e.target.src;
    thumbs.forEach((thumb, i) => {
      if (thumb.src === e.target.src) {
        index = i;
      }
    })
  })
})
prev.addEventListener("click", () => {
  console.log("prev")
  index--;
  changePhoto();
})
next.addEventListener("click", () => {
  console.log("next")
  index++;
  changePhoto();
})
function changePhoto() {
  if (index > thumbs.length - 1) index = 0;
  else if (index < 0) index = thumbs.length - 1;
  image.src = thumbs[index].src;
  console.log(thumbs[index].src)
}