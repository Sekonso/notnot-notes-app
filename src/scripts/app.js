import "./components/note-list.js";
import "./components/note-item.js";
import "./components/note-form.js";
import notesData from "./data/dummy.js";

const formToggler = document.querySelector(".form-toggler");
const noteForm = document.querySelector("note-form");
const noteList = document.querySelector("note-list");

// Memasukkan data dummy ke data note-list
noteList.setNoteList(notesData);

// Menampilkan note-form
formToggler.addEventListener("click", () => {
  noteForm.clearNoteData();
  noteForm.displayForm("add");
});
