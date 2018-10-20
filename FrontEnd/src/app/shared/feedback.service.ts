import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  selectedFeedback: Feedback;
  feedbacks: Feedback[];
  readonly baseURL = 'http://localhost:3000/feedbacks';

  constructor(private http: HttpClient) { }

  postFeedback(emp: Feedback) {
    return this.http.post(this.baseURL, emp);
  }
}
