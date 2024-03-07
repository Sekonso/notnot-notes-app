class NoteForm extends HTMLElement {
  static observedAttributes = ["mode", "identifier"];

  // Data lokal form
  _noteData = {
    id: "",
    title: "",
    body: "",
    createdAt: "",
    archived: false,
  };

  constructor() {
    super();

    this._mode = this.getAttribute("mode");
  }

  connectedCallback() {
    this.render();
    this.hideForm();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;

    this.render();
  }

  render() {
    this.innerHTML = "";
    this.appendChild(this.generateForm());

    this.elementsEventHandler();
  }

  // Membuat elemen form dan isinya
  // @return: HTML element
  generateForm() {
    const form = document.createElement("form");

    const formCancel = document.createElement("button");
    formCancel.classList.add("form-cancel");
    formCancel.setAttribute("type", "button");
    formCancel.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    const titleFormGroup = document.createElement("div");
    titleFormGroup.classList.add("title-form-group");
    titleFormGroup.innerHTML = `
      <input
        type="text"
        id="title-input"
        value="${this._noteData.title}"
        placeholder="Insert a title"
        autocomplete="off"
        minlength="0"
        maxlength="50"
        required
      />
    `;

    const bodyFormGroup = document.createElement("div");
    bodyFormGroup.classList.add("body-form-group");
    bodyFormGroup.innerHTML = `
      <textarea
        name="body-input"
        id="body-input"
        placeholder="Start typing"
        autocomplete="off"
        minlength="0"
        maxlength="250"
        required
      >${this._noteData.body}</textarea>
    `;

    const noteSubmit = document.createElement("button");
    if (this._mode === "add") {
      noteSubmit.classList.add("note-add");
      noteSubmit.innerText = "Add";
    } else if (this._mode === "edit") {
      noteSubmit.classList.add("note-edit");
      noteSubmit.innerText = "Save";
    }

    form.appendChild(formCancel);
    form.appendChild(titleFormGroup);
    form.appendChild(bodyFormGroup);
    form.appendChild(noteSubmit);

    return form;
  }

  // Menampilkan note-form sesuai opsi atribut mode
  // @params: string
  displayForm(option) {
    this.setAttribute("mode", option);

    document.querySelector("note-form").style.display = "flex";
  }

  // Menyembunyikan tampilan note-form
  hideForm() {
    document.querySelector("note-form").style.display = "none";
  }

  // Membuat id unik
  // @return: string
  generateNoteId() {
    return `notes-${+new Date()}`;
  }

  // Membuat tanggal
  // @return: string
  generateDate() {
    const currentDate = new Date();
    return currentDate.toISOString();
  }

  // Menambah note baru ke note-list
  addNote() {
    const newNote = {
      id: this.generateNoteId(),
      title: this.querySelector("#body-input").value,
      body: this.querySelector("#body-input").value,
      createdAt: this.generateDate(),
      archived: false,
    };

    document.querySelector("note-list").addNoteList(newNote);
  }

  // Mengganti nilai note-item ke note-list
  editNote() {
    const noteList = document.querySelector("note-list");
    const notes = noteList.getNoteList();

    const newNotes = notes.map((note) => {
      if (note.id === this._noteData.id) {
        note.title = this.querySelector("#title-input").value;
        note.body = this.querySelector("#body-input").value;
      }
      return note;
    });

    noteList.setNoteList(newNotes);
  }

  // Menetapkan nilai _noteData
  // @params: string
  setNoteData(id) {
    const noteList = document.querySelector("note-list");
    const notes = noteList.getNoteList();

    this._noteData = notes.find((note) => note.id === id);
  }

  // Membersihkan nilai _noteData
  clearNoteData() {
    this._noteData = {
      id: "",
      title: "",
      body: "",
      createdAt: "",
      archived: false,
    };
  }

  // Menambah elemen peringatan
  // Params: string, string
  appendWarning(element, message) {
    const warning = document.createElement("p");
    warning.classList.add("warning");
    warning.innerText = message;

    element.insertAdjacentElement("afterend", warning);
  }

  // Menambah event listener ke element
  // @params: string, string, function
  addElementEvent(elementName, eventName, callback) {
    const element = document.querySelector(elementName);
    element.addEventListener(eventName, callback);
  }

  // Set event ke semua element yang dibutuhkan
  elementsEventHandler() {
    // Menutup form
    this.addElementEvent(".form-cancel", "click", this.hideForm);

    // Merespon submit
    this.addElementEvent("note-form form", "submit", (e) => {
      e.preventDefault();
      if (this._mode === "add") {
        this.addNote();
      } else if (this._mode === "edit") {
        this.editNote();
      } else {
        console.log("Error submit");
      }

      this.clearNoteData();
      this.hideForm();
    });

    // Validasi realtime, membatasi karater input title
    this.addElementEvent("#title-input", "input", (e) => {
      const warning = e.target.nextElementSibling;

      if (e.target.value.length <= 0) {
        warning.remove();
        this.appendWarning(e.target, "Please fill this field");
      } else if (e.target.value.length >= 50) {
        if (!warning)
          this.appendWarning(
            e.target,
            "You have reach your character limit (50)"
          );
      } else if (warning) {
        warning.remove();
      }
    });

    // Validasi realtime, membatasi karater input body
    this.addElementEvent("#body-input", "input", (e) => {
      const warning = e.target.nextElementSibling;

      if (e.target.value.length <= 0) {
        warning.remove();
        this.appendWarning(e.target, "Please fill this field");
      } else if (e.target.value.length >= 250) {
        if (!warning)
          this.appendWarning(
            e.target,
            "You have reach your character limit (250)"
          );
      } else if (warning) {
        warning.remove();
      }
    });
  }
}

customElements.define("note-form", NoteForm);
