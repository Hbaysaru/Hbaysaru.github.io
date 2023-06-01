window.addEventListener('scroll', function() {
    var suns = document.querySelectorAll('.sunsvg');
    var timelines = document.querySelectorAll('.timeline');
    var texts = document.querySelectorAll('.text');
    var screenHeight = window.innerHeight;
  
    suns.forEach(function(sun) {
      var sunRect = sun.getBoundingClientRect();
      var previousElement = sun.previousElementSibling;
  
      if (sunRect.top <= screenHeight / 2) {
        sun.style.transition = 'all 1.5s';
        sun.style.transform = 'rotate(180deg)';
        sun.style.opacity = 1;
        if (previousElement && previousElement.tagName === 'H2'){
            previousElement.style.opacity = 1;
        }
      }
    });

    timelines.forEach(function(timeline) {
      var timelineRect = timeline.getBoundingClientRect();
      var timelineTop = timelineRect.top;
    
      var timelineHeight = screenHeight / 2 - timelineTop;
    
      if (timelineTop <= screenHeight / 2) {
        timeline.style.height = timelineHeight + 'px';
        timeline.style.opacity = 1;
      } else {
        timeline.style.height = '0px';
      }
    });

    var timelineA = document.querySelector('.timeline-a');
    var timelineB = document.querySelector('.timeline-b');
    var timelineC = document.querySelector('.timeline-c');
  
    var timelineARect = timelineA.getBoundingClientRect();
  
    if (timelineARect.top <= screenHeight / 2) {
      timelineA.style.opacity = 1;
      timelineB.style.opacity = 1;
      timelineC.style.opacity = 1;
    } else {
      timelineA.style.opacity = 0;
      timelineB.style.opacity = 0;
      timelineC.style.opacity = 0;
    }

    texts.forEach(function(text) {
      var textRect = text.getBoundingClientRect();
  
      if (textRect.top <= screenHeight / 2) {
        if (text.classList.contains('js-small-block-text')){
          text.style.right = 0;
        } else {
          text.style.left = 0;
        }
        text.style.opacity = 1;
      }
    });
  });
