import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-2';
  form !: FormGroup;
  result!:number;
  now !: string
  solutionArray = new Array();

  constructor(){

  }

  resolver(values: any): void {
    let simbol !: string;

    switch (values['operations']) {
      case("addition"):
        this.result = values['number_1'] + values['number_2'];
        simbol = '+';
        break;
      case("subtraction"):
        this.result = values['number_1'] - values['number_2'];
        simbol = '-';
        break;
      case("multiplication"):
        this.result = values['number_1'] * values['number_2'];
        simbol = 'x';
        break;
      case("division"):
        this.result = values['number_1'] / values['number_2'];
        simbol = '/';
        break;
    }

    this.setTime();
    this.addItem(this.getSolution(values['number_1'], values['number_2'], simbol));
  }

  setTime(): void {
    let today = new Date();
    this.now = today.toLocaleDateString() + ' at ' + today.toLocaleTimeString();
  }

  getSolution(n1:number, n2:number, simbol: string): Map<string, string> {
    let dictSolution = new Map<string, string>();

    dictSolution.set('operation', 'Operation: ' + n1 + ' ' + simbol + ' ' + n2);
    dictSolution.set('result', 'The result is ' + this.result);
    dictSolution.set('date', 'The time of the operation is ' + this.now);

    return dictSolution;
  }

  addItem(mapitem:Map<string, string>): void {
    this.solutionArray.push(mapitem);
  }

  popElement(): void {
    this.solutionArray.pop();
  }
}
