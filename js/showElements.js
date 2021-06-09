
function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if(revealTop < windowHeight - revealpoint){
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
