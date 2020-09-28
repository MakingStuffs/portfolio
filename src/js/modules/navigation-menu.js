import { msQuery, msQueryAll } from "making-stuffs-queries";

(function () {
  const buttons = [
    ...msQueryAll(".stuffs-drawer-menu__button"),
    ...msQueryAll(".stuffs-drawer-menu__close"),
  ];
  const menus = msQueryAll(".stuffs-drawer-menu");

  let shiftDown = false;

  const addListenersToLinks = (menu) => {
    const links = [
      ...msQueryAll(".stuffs-drawer-menu__link", menu),
    ].map((link) => msQuery("a", link));
    links.forEach((link) => link.addEventListener("click", toggle));
  };

  const getCurrentIndex = (fields, currentField) => {
    let returnIndex;
    fields.forEach((field, index) => {
      if (field === currentField) {
        returnIndex = index;
      }
    });
    return returnIndex;
  };

  const getElementsToTarget = (menu) => {
    const buttons = msQueryAll("button", menu);
    const links = msQueryAll("a", menu);
    const inputs = msQueryAll("input", menu);
    const textAreas = msQueryAll("textarea", menu);
    let elementArray = [];

    if (buttons) {
      elementArray = [...elementArray, ...buttons];
    }
    if (links) {
      elementArray = [...elementArray, ...links];
    }
    if (inputs) {
      elementArray = [...elementArray, ...inputs];
    }
    if (textAreas) {
      elementArray = [...elementArray, ...textAreas];
    }

    return elementArray;
  };

  const moveFocus = (oldElement, newElement) => {
    oldElement.blur();
    newElement.focus();
  };

  const changeField = (elements, currentIndex, direction = "forwards") => {
    const numberOfElements = elements.length;

    switch (direction) {
      case "forwards":
        return currentIndex < numberOfElements - 1
          ? moveFocus(elements[currentIndex], elements[currentIndex + 1])
          : moveFocus(elements[currentIndex], elements[0]);
      case "backwards":
        return currentIndex === 0
          ? moveFocus(elements[currentIndex], elements[numberOfElements - 1])
          : moveFocus(elements[currentIndex], elements[currentIndex - 1]);
    }
  };

  const addKeyListeners = (target, callbacks = null) => {
    if (!callbacks) {
      return;
    }
    callbacks.forEach((callback) => {
      target.addEventListener(callback.event, callback.handler);
    });
  };
  const removeKeyListeners = (target, callbacks = null) => {
    if (!callbacks) {
      return;
    }
    callbacks.forEach((callback) => {
      target.removeEventListener(callback.event, callback.handler);
    });
  };

  function handleKeyPress(event) {}

  function handleKeyDown(event) {
    event.preventDefault();
    if (event.keyCode === 16) {
      shiftDown = true;
      return;
    }
  }

  function handleKeyUp(event) {
    event.preventDefault();
    const elementsToTarget = getElementsToTarget(this);
    const currentIndex = getCurrentIndex(elementsToTarget, event.target);
    console.log(currentIndex, elementsToTarget);

    switch (event.keyCode) {
      // enter
      case 13:
        return;
      // shift
      case 16:
        return (shiftDown = false);
      // Tab
      case 9:
        return shiftDown
          ? changeField(elementsToTarget, currentIndex, "backwards")
          : changeField(elementsToTarget, currentIndex, "forwards");
      // esc
      case 27:
        return toggle.call(this);
      // left
      case 37:
        return changeField(elementsToTarget, currentIndex, "backwards");
      // up
      case 38:
        return changeField(elementsToTarget, currentIndex, "backwards");
        break;
      //right
      case 39:
        return changeField(elementsToTarget, currentIndex, "forwards");
      // down
      case 40:
        return changeField(elementsToTarget, currentIndex, "forwards");
      default:
        break;
    }
  }

  function toggle() {
    if (this === document) return;

    const associatedMenu = Array.from(menus).find(
      (menu) => menu.id === this.id || this.getAttribute("aria-controls")
    );
    const callbacksArray = [
      {
        event: "keyup",
        handler: handleKeyUp,
      },
      {
        event: "keydown",
        handler: handleKeyDown,
      },
    ];

    const outsideClickListener = (event) => {
      if (event.target === associatedMenu) {
        associatedMenu.onclick = null;
        toggle.call(this);
      }
    };

    if (associatedMenu.getAttribute("aria-expanded") === "true") {
      associatedMenu.setAttribute("aria-expanded", "false");
      associatedMenu.onclick = null;
      removeKeyListeners(associatedMenu, callbacksArray);
      document.removeEventListener("click", toggle);
      associatedMenu.blur();
      this.focus();
      return;
    } else {
      associatedMenu.setAttribute("aria-expanded", "true");
      associatedMenu.onclick = outsideClickListener;
      document.addEventListener("click", toggle);
      addKeyListeners(associatedMenu, callbacksArray);
      associatedMenu.focus();
      this.blur();
      return;
    }
  }

  menus.forEach((menu) => {
    addListenersToLinks(menu);
  });

  buttons.forEach((button) => button.addEventListener("click", toggle));
})();
