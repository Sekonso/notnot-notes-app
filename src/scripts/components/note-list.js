class NoteList extends HTMLElement {
  // Data note-list
  _noteList = [];

  constructor() {
    super();

    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const noteItemElements = this.generateNoteItemElements();

    this.innerHTML = "";
    this.append(this._style, ...noteItemElements);
  }

  // Mengambil data note-list
  // @return: array of object
  getNoteList() {
    return this._noteList;
  }

  // Mengubah data note-list
  // @params: array  of object
  setNoteList(notes) {
    this._noteList = notes;

    this.render();
  }

  // Menambah data baru ke data note-list
  // @params: object
  addNoteList(note) {
    this._noteList.push(note);

    this.render();
  }

  // Membuat kumpulan elemen note-item
  // @return: array of HTML element
  generateNoteItemElements() {
    return this._noteList.map((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.setNote(note);

      return noteItem;
    });
  }
}

customElements.define("note-list", NoteList);
