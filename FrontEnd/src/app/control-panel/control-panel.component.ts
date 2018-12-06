import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';
import { UserService } from '../shared/user.service';

// declare var M: any;

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  providers: [NoteService]
})
export class ControlPanelComponent implements OnInit {
  submitSuccess = false;
  updateSuccess = false;
  deleteSuccess = false;
  activeTab = 'yournotes';
  userDetails;

  constructor(private userService: UserService, private noteService: NoteService) { 
    document.body.style.backgroundImage = "url('assets/homeBG.jpg')";
  }

  ngOnInit() {
    this.resetForm();
    this.refreshNoteList();
    this.userService.loginStatusEmitter.subscribe(status => {
      this.getUserDetails();
    });
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res['user'];
    }, err => { 
      console.log(err);
    });
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
        this.activeTab = 'yournotes';
        this.submitSuccess = true;
        setTimeout(() => this.submitSuccess = false, 3000);
      });
    }
    else {
      this.noteService.putNote(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshNoteList();
        this.activeTab = 'yournotes';
        this.updateSuccess = true;
        setTimeout(() => this.updateSuccess = false, 3000);
      });
    }
  }

  switchTab(activeTab){
    this.activeTab = activeTab;
  }
  onEdit(note: Note) {
    this.noteService.selectedNote = note;
    this.activeTab = 'addnotes';
  }
  
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this notes ?') == true) {
      this.noteService.deleteNote(_id).subscribe((res) => {
        this.refreshNoteList();
        this.resetForm(form);
        this.deleteSuccess = true;
        setTimeout(() => this.deleteSuccess = false, 3000);
      });
    }
  }

}
