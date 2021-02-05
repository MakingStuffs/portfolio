import { msQuery, msQueryAll } from 'making-stuffs-queries'

const modalButtons = msQueryAll('[data-modal]')

function toggleModal() {
  const modal =
    msQuery(`#${this.dataset.modal}`) ||
    msQuery(`#${this.getAttribute('aria-controls')}`)
  if (!modal) {
    return
  }

  const closeButton = msQuery('.stuffs-modal__close', modal)
  if (!closeButton) {
    return
  }

  if (modal.getAttribute('aria-hidden') === 'true') {
    modal.setAttribute('aria-hidden', 'false')
    closeButton.addEventListener('click', toggleModal)
    modal.focus()
  } else {
    modal.setAttribute('aria-hidden', 'true')
    closeButton.removeEventListener('click', toggleModal)
    modal.blur()
  }
}

if (modalButtons.length > 0) {
  modalButtons.forEach((button) =>
    button.addEventListener('click', toggleModal)
  )
}
