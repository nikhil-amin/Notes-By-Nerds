import { Note } from './../shared/note.model';
import { NoteService } from './../shared/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService) { 
    document.body.style.backgroundImage = "url('assets/homeBG.jpg')";
  }

  ngOnInit() {
    this.refreshNoteList();
  }

  refreshNoteList() {
    this.noteService.getNoteList().subscribe((res) => {
      this.noteService.notes = res as Note[];
    });
  }

}
