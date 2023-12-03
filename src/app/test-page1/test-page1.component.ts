import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {
  numberValue = 1;

  onClickIncrementValue() {
    this.numberValue++;
  }
  /*onInputChanged($event: Event) {
    console.log("input changed", $event);
    const input = <HTMLInputElement> $event.target;
    const textValue: string = input.value;
    console.log('input text value:', textValue);
    const numberValue: number = +textValue;
    console.log('input number value:', numberValue);
  }*/
  onInputChanged($event: Event) {
    this.numberValue = +(<HTMLInputElement>$event.target).value;
  }

  }
