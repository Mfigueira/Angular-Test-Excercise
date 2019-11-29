import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  title: String = 'Buttons';

  buttonsCount: Number = 4;

  constructor() { }

  getTitle() {
    return this.title;
  }

}
