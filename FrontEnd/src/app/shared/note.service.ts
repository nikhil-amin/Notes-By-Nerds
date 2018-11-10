import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Note } from './note.model';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  selectedNote: Note;
  notes: Note[];
  readonly baseURL = 'http://127.0.0.1:3000/notes';

  constructor(private http: HttpClient) { }

  postNote(emp: Note) {
    return this.http.post(this.baseURL, emp);
  }

  getNoteList() {
    return this.http.get(this.baseURL);
  }

  putNote(emp: Note) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteNote(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
