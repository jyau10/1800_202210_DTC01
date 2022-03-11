const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClassFromAll();
    panel.classList.add('active');
  });
});

function removeActiveClassFromAll() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
};