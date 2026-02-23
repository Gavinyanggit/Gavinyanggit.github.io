(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }

})(document);

function toggleMenu() {
  document.querySelector('.nav-tabs').classList.toggle('show');
}

document.querySelectorAll('.page_guide a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1); // remove #
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});


/*document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('section');
  const banner = document.querySelector('img.my-banner');
  console.log("toggleMenu was invoked!"); // Debug message
  if (section && banner) {
    console.log("toggleMenu was called!"); // Debug message
    const sectionRect = section.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Make banner exactly viewport width
    // banner.style.width = viewportWidth + 'px';

    // Shift it left so its left edge aligns with the viewport's left edge
    banner.style.marginLeft = -(sectionRect.left) + 'px';
  }
}
);*/

