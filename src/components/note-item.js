export class NoteItem extends HTMLElement {
  static observedAttributes = ["type"];

  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._type = this.getAttribute("type");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;

    this.render();
  }

  render() {
    this.innerHTML = ``;

    const noteTitle = document.createElement("h1");
    noteTitle.classList.add("note-title");
    noteTitle.innerText = this._note.title;

    const noteBody = document.createElement("p");
    noteBody.classList.add("note-body");
    noteBody.innerHTML = this._note.body.replace(/\n/g, "<br>");

    const noteButtonsContainer = document.createElement("div");
    noteButtonsContainer.classList.add("note-buttons-container");

    const noteViewButton = document.createElement("button");
    noteViewButton.classList.add("note-view-button", "note-button");
    noteViewButton.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;

    const noteArchiveButton = document.createElement("button");
    noteArchiveButton.classList.add("note-archive-button", "note-button");
    if (this._type === "non-archived") {
      noteArchiveButton.innerHTML = `<i class="fa-solid fa-folder-plus"></i>`;
    } else if (this._type === "archived") {
      noteArchiveButton.innerHTML = `<i class="fa-solid fa-folder-minus"></i>`;
    }

    const noteDeleteButton = document.createElement("button");
    noteDeleteButton.classList.add("note-delete-button", "note-button");
    noteDeleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    const noteForm = document.querySelector("note-form");
    const confirmDialogue = document.querySelector("confirm-dialogue");

    noteViewButton.addEventListener("click", () => {
      noteForm.setNoteData(this._note);
      noteForm.displayForm("view");
    });

    noteArchiveButton.addEventListener("click", () => {
      if (this._type === "non-archived") {
        confirmDialogue.displayConfirmDialogue("archive");
        confirmDialogue.setAttribute("target", this._note.id);
      }

      if (this._type === "archived") {
        confirmDialogue.displayConfirmDialogue("unarchive");
        confirmDialogue.setAttribute("target", this._note.id);
      }
    });

    noteDeleteButton.addEventListener("click", () => {
      confirmDialogue.displayConfirmDialogue("delete");
      confirmDialogue.setAttribute("target", this._note.id);
    });

    noteButtonsContainer.appendChild(noteViewButton);
    noteButtonsContainer.appendChild(noteArchiveButton);
    noteButtonsContainer.appendChild(noteDeleteButton);

    this.appendChild(noteTitle);
    this.appendChild(noteBody);
    this.appendChild(noteButtonsContainer);
  }

  // Menetapkan isi data note
  // @params: object
  setNote(noteData) {
    this._note = noteData;

    this.render();
  }
}

customElements.define("note-item", NoteItem);
