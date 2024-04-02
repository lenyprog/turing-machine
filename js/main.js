document.querySelectorAll('.topnav a, .arrow').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    let targetId = this.getAttribute('href');
    targetId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});