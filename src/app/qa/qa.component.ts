import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  questionText: string = '';
  // tslint:disable-next-line:no-inferrable-types
  questionIndex: number = 0;

  constructor() {  }

  ngOnInit() {
    this.questionText = 'This is the first question';
  }

  getNextQa() {
    console.log(this.questionIndex);
    this.questionIndex++;
  }

  onGoBack() {
    // go back to task and set the readytoplaybutton to true
  }
}
