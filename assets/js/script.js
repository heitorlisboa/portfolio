(() => {
  function toggleDarkMode() {
    document.body.classList.toggle('dark')
  }

  function copyDiscord() {
    const discord = 'Heitor#7447'
    const onTooltipClickText = 'Copiado!'
    const discordTooltip = document.querySelector('[data-discord][data-tooltip]')
    navigator.clipboard.writeText(discord)
      .then(
        () => { discordTooltip.setAttribute('data-tooltip', onTooltipClickText) },
        () => { window.alert('Falha ao copiar') }
      )
  }

  function resetTooltip(tooltip, index) {
    tooltip.setAttribute('data-tooltip', tooltipsTexts[index])
  }

  const buttonDarkMode = document.querySelector('[data-btn-dark-mode]')
  buttonDarkMode.addEventListener('click', toggleDarkMode)

  const discordIcon = document.querySelector('[data-discord]')
  discordIcon.addEventListener('click', copyDiscord)

  const tooltips = document.querySelectorAll('[data-tooltip]')
  var tooltipsTexts = [];
  tooltips.forEach((tooltip, index) => {
    tooltipsTexts.push(tooltip.getAttribute('data-tooltip'))
    tooltip.addEventListener('mouseout', resetTooltip.bind(null, tooltip, index))
  })
})()