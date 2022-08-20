const balls = document.getElementsByClassName('ball'); //this grabs the div and assigns it to balls

document.onmousemove = (event) => {//Within the document(aka the whole page) the movement of the mouse cals an annoymous function with a parameter of event. This function is continously called on while mouse is on the page
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
//console.log(x) returns a % is a ratio of the x postion vs the windows height of length
//console.log(y)

//loop through and set style properites for the pupils. Looks like something called jQuery each() that can do this too.
for (let i = 0; i < 2; i++){
//these below will change the style property?
  balls[i].style.left = x; //this sets the how far left the left point of the pupil wil go
  balls[i].style.top = y; // this sets where the top point of the pupil wqill be
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
