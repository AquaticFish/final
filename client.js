window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const ball = document.querySelector("div.ball")

  let mouseX = 0
  let mouseY = 0
  
  let ballX = 0
  let ballY = 0
  
  let speed = 0.25

  function animate() {
    let distX = mouseX - ballX
    let distY = mouseY - ballY
    
    ballX = ballX + (distX * speed)
    ballY = ballY + (distY * speed)
    
    ball.style.left = ballX + "px"
    ball.style.top = ballY + "px"
    
    requestAnimationFrame(animate)
  }

animate()

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})
