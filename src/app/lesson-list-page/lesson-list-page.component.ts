import { Component, OnDestroy,OnInit  } from '@angular/core';

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log("LessonListPageComponent.constructor()");
  }
  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
  }
  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }

}
