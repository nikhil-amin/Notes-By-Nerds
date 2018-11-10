import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';

// declare var M: any;

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  providers: [NoteService]
})
export class ControlPanelComponent implements OnInit {
  formSuccess = false;
  formFailure = false;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshNoteList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.noteService.selectedNote = {
      _id: "",
      title: "",
      author: "",
      price: "",
      uploaderName: "",
      uploaderEmail: ""
    }
  }

  refreshNoteList() {
    this.noteService.getNoteList().subscribe((res) => {
      this.noteService.notes = res as Note[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.noteService.postNote(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshNoteList();
        this.formSuccess = true;
        setTimeout(() => this.formSuccess = false, 4000);
        this.formFailure = false;
      });
    }
    else {
      this.noteService.putNote(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshNoteList();
        // this.formSuccess = false;
        // this.formFailure = true;
        // setTimeout(() => this.formFailure = false, 4000);
      });
    }
  }

  onEdit(note: Note) {
    this.noteService.selectedNote = note;
  }
  
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.noteService.deleteNote(_id).subscribe((res) => {
        this.refreshNoteList();
        this.resetForm(form);
        console.log("Deleted Successfully");
        // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
