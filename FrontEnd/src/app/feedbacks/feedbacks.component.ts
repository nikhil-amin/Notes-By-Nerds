import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FeedbackService } from '../shared/feedback.service';
import { Feedback } from '../shared/feedback.model';

var completeForm : boolean;
var incompleteForm : boolean;

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css'],
  providers: [FeedbackService]
})
export class FeedbacksComponent implements OnInit {
  completeForm = false;
  incompleteForm = false;
  constructor(private feedbackService: FeedbackService) { 
    document.body.style.backgroundImage = "url('assets/homeBG.jpg')";
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.feedbackService.selectedFeedback = {
      _id: "",
      name: "",
      email: "",
      message: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.message != "") {
      this.feedbackService.postFeedback(form.value).subscribe((res) => {
        this.resetForm(form);
        this.completeForm = true;
        setTimeout(() => this.completeForm = false, 4000);
        this.incompleteForm = false;
      });
    }
    else {
      this.completeForm = false;
      this.incompleteForm = true;
      setTimeout(() => this.incompleteForm = false, 4000);
    }
  }

}
