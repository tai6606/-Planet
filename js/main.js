"use strict"



{
  const javascriptBtn = document.getElementById("javascript-btn")
  const hoverTarget = document.getElementById("hover-target")
  
  
  
  
  function sum() {
    hoverTarget.classList.add("javascript-hover")
  }
  
  javascriptBtn.addEventListener("mouseover", sum)
  
  hoverTarget.addEventListener("mouseover", sum)
}


{
  const target = document.getElementById("target02")
  const btn = document.getElementById("btn-click")

  
  btn.addEventListener("click", () => {

    btn.classList.add("point-click-ja")

    const scores = Math.floor(Math.random() * 19 + 1)

    target.textContent = scores;
  });

}


{
  const target = document.getElementById("target03")

  const d = new Date();

  const year = d.getFullYear()
  const moth = d.getMonth() + 1
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const second = d.getSeconds();

  target.textContent = `${year}年 ${moth}月  ${date}日 ${hour}時 ${minutes}分 ${second}秒`;
}



























