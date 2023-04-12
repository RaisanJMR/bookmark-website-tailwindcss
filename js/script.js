const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// add event listener to all the tabs
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  // deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-b-4',
      'md:border-b-0',
      'border-softRed'
    )
  })
  //   Hide All Panels
  panels.forEach((panel) => panel.classList.add('hidden'))
  //   Acivate a new tab and panel based on target
  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}
