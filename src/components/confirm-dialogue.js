export class ConfirmDialogue extends HTMLElement {
  static observedAttributes = ["option", "target"];

  constructor() {
    super();

    this._option = this.getAttribute("option");
    this._target = this.getAttribute("target");
  }

  connectedCallback() {
    this.render();
    this.hideConfirmDialogue();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;

    this.render();
  }

  render() {
    this.innerHTML = "";

    const confirmContainer = document.createElement("div");
    confirmContainer.classList.add("confirm-container");

    const confirmMessage = document.createElement("h1");
    confirmMessage.classList.add("confirm-message");
    confirmMessage.innerText = `Are you sure to ${this._option} this note?`;

    const confirmButtonsContainer = document.createElement("div");
    confirmButtonsContainer.classList.add("confirm-buttons-container");

    const confirmYes = document.createElement("button");
    confirmYes.innerText = "Yes";
    const confirmNo = document.createElement("button");
    confirmNo.innerText = "No";

    confirmYes.addEventListener("click", () => {
      if (this._option === "archive") document.querySelector("note-list").archiveNote(this._target);

      if (this._option === "unarchive")
        document.querySelector("note-list").unarchiveNote(this._target);

      if (this._option === "delete") document.querySelector("note-list").deleteNote(this._target);

      this.hideConfirmDialogue();
    });

    confirmNo.addEventListener("click", this.hideConfirmDialogue);

    confirmButtonsContainer.appendChild(confirmYes);
    confirmButtonsContainer.appendChild(confirmNo);

    confirmContainer.appendChild(confirmMessage);
    confirmContainer.appendChild(confirmButtonsContainer);

    this.appendChild(confirmContainer);

    setTimeout(() => {
      document.querySelector(".confirm-container").classList.add("appended");
    }, 100);
  }

  displayConfirmDialogue(value) {
    this.setAttribute("option", value);

    document.querySelector("confirm-dialogue").style.display = "flex";
  }

  hideConfirmDialogue() {
    document.querySelector("confirm-dialogue").style.display = "none";
  }
}

customElements.define("confirm-dialogue", ConfirmDialogue);
