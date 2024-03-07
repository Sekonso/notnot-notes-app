export class NoteItem extends HTMLElement {
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._style = document.createElement("style");
  }

  connectedCallback() {
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

    const noteDetailToggler = document.createElement("button");
    noteDetailToggler.classList.add("note-detail-toggler");
    noteDetailToggler.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;

    const noteForm = document.querySelector("note-form");
    noteDetailToggler.addEventListener("click", () => {
      noteForm.setNoteData(this._note.id);
      noteForm.displayForm("edit");
    });

    this.appendChild(noteTitle);
    this.appendChild(noteBody);
    this.appendChild(noteDetailToggler);
  }

  // Menetapkan isi data note
  // @params: object
  setNote(noteData) {
    this._note = noteData;

    this.render();
  }
}

customElements.define("note-item", NoteItem);
