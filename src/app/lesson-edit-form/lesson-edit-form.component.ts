import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})

export class LessonEditFormComponent {
  constructor(private router: Router) {
  }

  onClickSubmit() {
    this.router.navigate(['lesson-list']).then(res => {})
  }
}

