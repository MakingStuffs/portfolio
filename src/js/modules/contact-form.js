import { msQueryAll, msQuery } from "making-stuffs-queries";

(() => {
  const openButtons = msQueryAll(".contact-open");
  if (!openButtons[0]) {
    return;
  }

  const wrapper = msQuery("#contact-container");
  if (!wrapper) {
    return;
  }

  const form = msQuery("form", wrapper);
  if (!form) {
    return;
  }

  const closeButton = msQuery("#contact-close", wrapper);
  if (!closeButton) {
    return;
  }

  const formClear = msQuery("#home-contact-clear", wrapper);
  if (!formClear) {
    return;
  }

  let shiftDown = false;

  const getRegex = (fieldType) => {
    switch (fieldType) {
      case "text":
        return /^[a-z\s\.,-0-9]+$/i;
      case "tel":
        return /^[\d+-]+$/;
      case "number":
        return /^[\d]+$/;
      case "email":
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      default:
        return /^[a-z\s\.,-0-9]+$/i;
        return;
    }
  };

  const validateField = (input) => {
    const regex = getRegex(input.type);
    const minLength = input.hasAttribute("minlength")
      ? input.getAttribute("minlength")
      : 3;
    return regex.test(input.value) && input.value >= minLength;
  };

  const addListenersToFields = (form) => {
    for (let field of form) {
      if (field.tagName.toLowerCase() === "button") {
        continue;
      }

      if (field.type === "submit") {
        continue;
      }

      if (
        field.tagName.toLowerCase() === "input" ||
        field.tagName.toLowerCase() === "textarea"
      ) {
        field.addEventListener("input", handleInput);
      }
    }
  };

  const getFormFields = (form) => {
    const fieldsArray = [];
    for (let field of form) {
      fieldsArray.push(field);
    }
    return fieldsArray;
  };

  const getCurrentIndex = (fields, currentId) => {
    let returnIndex;
    fields.forEach((field, index) => {
      if (field.id === currentId) {
        returnIndex = index;
      }
    });
    return returnIndex;
  };

  const moveFocus = (oldElement, newElement) => {
    oldElement.blur();
    newElement.focus();
  };

  const changeField = (currentIndex, direction = "forwards") => {
    const formLength = form.elements.length;

    switch (direction) {
      case "forwards":
        return currentIndex < formLength - 1
          ? moveFocus(
              form.elements[currentIndex],
              form.elements[currentIndex + 1]
            )
          : moveFocus(form.elements[currentIndex], form.elements[0]);
      case "backwards":
        return currentIndex === 0
          ? moveFocus(
              form.elements[currentIndex],
              form.elements[form.length - 1]
            )
          : moveFocus(
              form.elements[currentIndex],
              form.elements[currentIndex - 1]
            );
    }
  };

  const clearValidationClasses = () => {
    for (let field of form) {
      field.parentNode.classList.remove("valid");
      field.parentNode.classList.remove("validating");
      field.parentNode.classList.remove("invalid");
    }
  };

  function handleKeyDown(event) {
    if (event.keyCode === 16) {
      shiftDown = true;
      return;
    }
    if (event.keyCode === 9) {
      event.preventDefault();
      return;
    }
  }

  function handleKeyUp(event) {
    event.preventDefault();
    const fields = getFormFields(this);
    const currentIndex = getCurrentIndex(fields, event.target.id);

    switch (event.keyCode) {
      // enter
      case 13:
        return handleFormSubmit.call(this, event);
      // shift
      case 16:
        return (shiftDown = false);
      // Tab
      case 9:
        return shiftDown
          ? changeField(currentIndex, "backwards")
          : changeField(currentIndex, "forwards");
      // esc
      case 27:
        return menuToggle(event, true);
      // left
      case 37:
        return changeField(currentIndex, "backwards");
      // up
      case 38:
        return changeField(currentIndex, "backwards");
        break;
      //right
      case 39:
        return changeField(currentIndex, "forwards");
      // down
      case 40:
        return changeField(currentIndex, "forwards");
      default:
        break;
    }
  }

  function handleInput(event) {
    this.parentNode.classList.remove("valid");
    this.parentNode.classList.remove("invalid");
    this.parentNode.classList.add("validating");
  }

  function handleFieldValidation(event) {
    const isValid = validateField(this);
    const parent = this.parentNode;
    parent.classList.remove("validating");
    return isValid
      ? (parent.classList.add("valid"), parent.classList.remove("invalid"))
      : (parent.classList.remove("valid"), parent.classList.add("invalid"));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    for (let field of form) {
      if (field.type === "submit") {
        return;
      }
      handleFieldValidation.call(field);
    }
  }

  function menuToggle(event, close = null) {
    event.preventDefault();

    if (close || this.classList.contains("contact-close")) {
      wrapper.setAttribute("aria-expanded", "false");
      wrapper.blur();
    } else {
      const associatedMenu = document.querySelector(`#${this.dataset.menu}`);

      if (associatedMenu) {
        associatedMenu.setAttribute("aria-expanded", "false");
      }

      wrapper.setAttribute("aria-expanded", "true");

      const firstElement = form.elements[0];

      this.blur();
      form.ontransitionend = () => {
        form.elements[0].focus();
        form.ontransitionend = null;
      };
    }
  }

  function handleFormClear(event) {
    event.preventDefault();
    clearValidationClasses();
    form.reset();
    return;
  }

  addListenersToFields(form);
  openButtons.forEach((button) => button.addEventListener("click", menuToggle));
  form.addEventListener("keyup", handleKeyUp);
  form.addEventListener("keydown", handleKeyDown);
  form.addEventListener("submit", handleFormSubmit);
  closeButton.addEventListener("click", menuToggle);
  formClear.addEventListener("click", handleFormClear);
})();
