window.onscroll = function() {
  var header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

function openModal(n) {
  document.body.style.overflow = "hidden";
  if (n === 1) {
    document.getElementById('bigscreen1')
    .classList.replace("bigscreen-none", "bigscreen");
  }
  if (n === 2) {
    document.getElementById('bigscreen2')
    .classList.replace("bigscreen-none", "bigscreen");
  }
  if (n === 3) {
    document.getElementById('bigscreen3')
    .classList.replace("bigscreen-none", "bigscreen");
  }
  if (n === 4) {
    document.getElementById('bigscreen4')
    .classList.replace("bigscreen-none", "bigscreen");
  }
  if (n === 5) {
    document.getElementById('bigscreen5')
    .classList.replace("bigscreen-none", "bigscreen");
  }
}

function closeModal(n) {
  document.body.style.overflow = "auto";
  if (n === 1) {
    document.getElementById('bigscreen1')
    .classList.replace("bigscreen", "bigscreen-none");
  }
  if (n === 2) {
    document.getElementById('bigscreen2')
    .classList.replace("bigscreen", "bigscreen-none");
  }
  if (n === 3) {
    document.getElementById('bigscreen3')
    .classList.replace("bigscreen", "bigscreen-none");
  }
  if (n === 4) {
    document.getElementById('bigscreen4')
    .classList.replace("bigscreen", "bigscreen-none");
  }  
  if (n === 5) {
    document.getElementById('bigscreen5')
    .classList.replace("bigscreen", "bigscreen-none");
  } 
}