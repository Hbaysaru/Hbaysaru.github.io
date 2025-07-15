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
            previousElement.style.transition = 'all 1s';
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
        timeline.style.transition = 'opacity 1s';
      } else {
        timeline.style.height = '0px';
      }
    });

    document.querySelectorAll('.timeline-horizontal').forEach(function(horizontal) {
      const a = horizontal.querySelector('.timeline-a');
      const b = horizontal.querySelector('.timeline-b');
      const c = horizontal.querySelector('.timeline-c');
      if (!a || !b || !c) return;

      const rect = horizontal.getBoundingClientRect();
      const trigger = screenHeight / 2;
      const progress = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));

      // .timeline-a : 0% à 33% (hauteur)
      if (progress > 0) {
        let aProgress = Math.min(progress * 3, 1);
        a.style.opacity = aProgress > 0 ? 1 : 0;
        a.style.height = (aProgress * 50) + "px"; // 50px = hauteur max
        a.style.width = (aProgress * 50) + "px";  // 50px = largeur max
      } else {
        a.style.opacity = 0;
        a.style.height = "0px";
        a.style.width = "0px";
      }

      // .timeline-b : 33% à 66% (largeur)
      if (progress > 0.33) {
        let bProgress = Math.min((progress - 0.33) * 3 / 2, 1);
        b.style.opacity = bProgress > 0 ? 1 : 0;
        b.style.left = "50px";
        b.style.right = "50px";
        b.style.borderBottomWidth = "7.5px";
        b.style.width = `calc(${bProgress * 100}% - 100px)`; // largeur dynamique
      } else {
        b.style.opacity = 0;
        b.style.width = "0px";
      }

      // .timeline-c : commence quand b est fini (progress >= 1)
      if (progress >= 1) {
        c.style.opacity = 1;
        c.style.height = "50px";
        c.style.width = "50px";
      } else if (progress > 0.99) {
        // Animation très courte pour donner l'effet de jonction parfaite
        let cProgress = Math.min((progress - 0.99) * 100, 1);
        c.style.opacity = cProgress > 0 ? 1 : 0;
        c.style.height = (cProgress * 50) + "px";
        c.style.width = (cProgress * 50) + "px";
      } else {
        c.style.opacity = 0;
        c.style.height = "0px";
        c.style.width = "0px";
}
    });
    
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

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger-menu');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('close-menu');
  const navLinks = nav.querySelectorAll('a');

  burger.addEventListener('click', function() {
    nav.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', function() {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});