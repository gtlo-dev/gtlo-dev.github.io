class Modal {
  constructor(id) {
    // if there is no modal container
    if (!Modal.container) {
      // create it
      document.body.innerHTML =
        '<div id="modal-container" class="hidden"></div>' +
        document.body.innerHTML;

      // give it to static property
      Modal.container = document.getElementById("modal-container");

      // add event listener
      Modal.container.addEventListener("click", (e) => {
        if (e.target.id === "modal-container") Modal.hide();
      });
    }

    // create new modal with given id
    this.element = document.createElement("div");
    this.element.classList.add("modal");
    this.element.classList.add("glass");
    this.element.classList.add("hidden");
    this.element.id = id;
    Modal.container.appendChild(this.element);

    // add to static property instances
    Modal.instances.push(this);
  }

  static instances = [];
  static container;

  static show() {
    Modal.container.classList.remove("hidden");
  }

  static hide() {
    Modal.container.classList.add("hidden");
  }

  setHeader(header) {
    this.element.innerHTML =
      `<h2 class="modal-header">${header}</h2>` + this.element.innerHTML;
  }

  setBody(html) {
    this.element.innerHTML = html;
  }

  show() {
    // hide other modal
    Modal.instances.forEach((modal) => {
      modal.hide();
    });
    // show this modal
    this.element.classList.remove("hidden");
  }

  hide() {
    this.element.classList.add("hidden");
  }

  addClass(class_) {
    this.element.classList.add(class_);
  }
}
