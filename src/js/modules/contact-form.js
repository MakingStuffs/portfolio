import { msQueryAll, msQuery } from 'making-stuffs-queries'

import { load } from 'recaptcha-v3'
;(() => {
  const openButtons = msQueryAll('.contact-open')
  if (!openButtons[0]) {
    return
  }

  const wrapper = msQuery('#contact-container')
  if (!wrapper) {
    return
  }

  const form = msQuery('form', wrapper)
  if (!form) {
    return
  }

  const closeButton = msQuery('#contact-close', wrapper)
  if (!closeButton) {
    return
  }

  const formClear = msQuery('#home-contact-clear', wrapper)
  if (!formClear) {
    return
  }

  let shiftDown = false

  const getRegex = (fieldType) => {
    switch (fieldType) {
      case 'text':
        return /^[a-z\s.,-0-9]+$/i
      case 'tel':
        return /^[\d+-]+$/
      case 'number':
        return /^[\d]+$/
      case 'email':
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      default:
        return /^[a-z\s.,-0-9]+$/i
    }
  }

  const validateField = (input) => {
    const regex = getRegex(input.type)
    const minLength = input.hasAttribute('minlength')
      ? input.getAttribute('minlength')
      : 3
    return regex.test(input.value) && input.value >= minLength
  }

  const addListenersToFields = (form) => {
    for (let field of form) {
      if (field.tagName.toLowerCase() === 'button') {
        continue
      }

      if (field.type === 'submit') {
        continue
      }

      if (
        field.tagName.toLowerCase() === 'input' ||
        field.tagName.toLowerCase() === 'textarea'
      ) {
        field.addEventListener('input', handleInput)
      }
    }
  }

  const getFormFields = (form) => {
    const fieldsArray = []
    for (let field of form) {
      fieldsArray.push(field)
    }
    return fieldsArray
  }

  const getCurrentIndex = (fields, currentId) => {
    let returnIndex
    fields.forEach((field, index) => {
      if (field.id === currentId) {
        returnIndex = index
      }
    })
    return returnIndex
  }

  const moveFocus = (oldElement, newElement) => {
    oldElement.blur()
    newElement.focus()
  }

  const changeField = (currentIndex, direction = 'forwards') => {
    const formLength = form.elements.length

    switch (direction) {
      case 'forwards':
        return currentIndex < formLength - 1
          ? moveFocus(
              form.elements[currentIndex],
              form.elements[currentIndex + 1]
            )
          : moveFocus(form.elements[currentIndex], form.elements[0])
      case 'backwards':
        return currentIndex === 0
          ? moveFocus(
              form.elements[currentIndex],
              form.elements[form.length - 1]
            )
          : moveFocus(
              form.elements[currentIndex],
              form.elements[currentIndex - 1]
            )
    }
  }

  const clearValidationClasses = () => {
    for (let field of form) {
      field.parentNode.classList.remove('valid')
      field.parentNode.classList.remove('validating')
      field.parentNode.classList.remove('invalid')
    }
  }

  const getRecaptchaToken = async () => {
    try {
      const recaptcha = await load('6LchCtkZAAAAALwQQto3xBWJXrXSG9EipvjABNGt')
      const token = await recaptcha.execute('submit')
      return token
    } catch (error) {
      console.log(error)
    }
  }

  const setLoader = () => {
    const loader = msQuery('.page-loader')
    if (!loader) return
    const loading = loader.getAttribute('aria-visible')
    return loading === 'true'
      ? loader.setAttribute('aria-visible', 'false')
      : loader.setAttribute('aria-visible', 'true')
  }

  const sendForm = async (data) => {
    try {
      const request = await fetch('/contact/submit', {
        method: 'POST',
        body: data,
      })
      const response = await request.json()

      return handleFormResponse(response)
    } catch (error) {
      console.log(error)
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 16) {
      shiftDown = true
      return
    }
    if (event.keyCode === 9) {
      event.preventDefault()
      return
    }
  }

  function handleKeyUp(event) {
    event.preventDefault()
    const fields = getFormFields(this)
    const currentIndex = getCurrentIndex(fields, event.target.id)

    switch (event.keyCode) {
      // enter
      case 13:
        return handleFormSubmit.call(this, event)
      // shift
      case 16:
        return (shiftDown = false)
      // Tab
      case 9:
        return shiftDown
          ? changeField(currentIndex, 'backwards')
          : changeField(currentIndex, 'forwards')
      // esc
      case 27:
        return menuToggle(event, true)
      // left
      case 37:
        return changeField(currentIndex, 'backwards')
      // up
      case 38:
        return changeField(currentIndex, 'backwards')
      //right
      case 39:
        return changeField(currentIndex, 'forwards')
      // down
      case 40:
        return changeField(currentIndex, 'forwards')
      default:
        break
    }
  }

  function handleInput() {
    this.parentNode.classList.remove('valid')
    this.parentNode.classList.remove('invalid')
    this.parentNode.classList.add('validating')
  }

  function handleFieldValidation() {
    const isValid = validateField(this)
    const parent = this.parentNode
    parent.classList.remove('validating')
    return isValid
      ? (parent.classList.add('valid'),
        parent.classList.remove('invalid'),
        true)
      : (parent.classList.remove('valid'),
        parent.classList.add('invalid'),
        false)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    setLoader()

    const recaptchaToken = await getRecaptchaToken(event)

    let isValid

    if (!recaptchaToken) {
      return handleFormResponse(event)
    }

    for (let field of form) {
      if (field.type === 'submit') {
        continue
      }
      if (!handleFieldValidation.call(field)) {
        isValid = false
      } else {
        isValid = true
      }
    }

    if (!isValid) {
      return setTimeout(() => {
        setLoader()
      }, 1000)
    }

    const requestData = new FormData(form)
    requestData.append('token', recaptchaToken)
    sendForm(requestData)
  }

  function handleFormResponse(response) {
    const responseElement = msQuery(
      '.home-contact__response',
      form.parentElement
    )

    const responseHeader = msQuery(
      '.home-contact-response__header',
      responseElement
    )
    const responseText = msQuery(
      '.home-contact-response__text',
      responseElement
    )
    const closeButton = msQuery(
      '.home-contact-response__close',
      responseElement
    )
    const saveButton = msQuery('.home-contact-response__save', responseElement)

    if (response.success) {
      responseElement.classList.add('success')
      responseElement.classList.remove('error')
      responseHeader.textContent = 'Success'
      responseText.textContent =
        'Your message has been received and I will  reply as soon as possible.'
    } else {
      responseElement.classList.add('error')
      responseElement.classList.remove('success')
      responseHeader.textContent = 'Error'
      responseText.textContent =
        'There has been an error sending your message. Try saving your input and refreshing the page.'
    }

    const toggle = () =>
      responseElement.getAttribute('aria-visible') === 'true'
        ? responseElement.setAttribute('aria-visible', 'false')
        : responseElement.setAttribute('aria-visible', 'true')

    const saveInput = () => {
      const fields = getFormFields(form).reduce((acc, curr) => {
        if (curr.value !== '' && curr.name !== '') {
          acc[curr.name.toLowerCase()] = curr.value
        }
        return acc
      }, {})
      const storage = window.localStorage
      storage.setItem('formData', JSON.stringify(fields))
    }

    if (!closeButton.onclick) {
      closeButton.onclick = toggle
    }

    if (!saveButton.onclick) {
      saveButton.onclick = saveInput
    }

    setTimeout(() => {
      responseElement.setAttribute('aria-visible', 'true')
      setLoader()
    }, 1000)
  }

  function menuToggle(event, close = null) {
    event.preventDefault()

    if (close || this.classList.contains('contact-close')) {
      wrapper.setAttribute('aria-expanded', 'false')
      wrapper.blur()
    } else {
      const associatedMenu = document.querySelector(`#${this.dataset.menu}`)

      if (associatedMenu) {
        associatedMenu.setAttribute('aria-expanded', 'false')
      }

      wrapper.setAttribute('aria-expanded', 'true')

      this.blur()
      form.ontransitionend = () => {
        form.elements[0].focus()
        form.ontransitionend = null
      }
    }
  }

  function handleFormClear(event) {
    event.preventDefault()
    clearValidationClasses()
    form.reset()
    return
  }

  addListenersToFields(form)
  openButtons.forEach((button) => button.addEventListener('click', menuToggle))
  form.addEventListener('keyup', handleKeyUp)
  form.addEventListener('keydown', handleKeyDown)
  form.addEventListener('submit', handleFormSubmit)
  closeButton.addEventListener('click', menuToggle)
  formClear.addEventListener('click', handleFormClear)
})()
