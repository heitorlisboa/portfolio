(() => {
  const buttonDarkMode = document.querySelector('[data-btn-dark-mode]')
  buttonDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
  })
})()