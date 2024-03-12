// Style import
import "./styles/main.css";
import "./styles/notes.css";

// Component import
import "./components/note-list.js";
import "./components/note-item.js";
import "./components/note-form.js";
import "./components/confirm-dialogue.js";

const formToggler = document.querySelector(".form-toggler");
const noteForm = document.querySelector("note-form");

// Menampilkan note-form
formToggler.addEventListener("click", () => {
  noteForm.clearNoteData();
  noteForm.displayForm("add");
});

const notesTypeSelector = document.querySelector("#notes-type-selector");
const noteList = document.querySelector("note-list");
notesTypeSelector.addEventListener("change", () => {
  if (notesTypeSelector.value === "non-archived") {
    noteList.setAttribute("type", "non-archived");
    noteList.getNotes();
  } else if (notesTypeSelector.value === "archived") {
    noteList.setAttribute("type", "archived");
    noteList.getArchivedNotes();
  }
});
