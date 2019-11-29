import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  allowNewServer: Boolean = false;
  buttonStatus: String = "Unclicked";
  serverName: String = 'Initial Value';
  serverStatus: Number;

  displayDetails: Boolean = false;
  details: Array<String> = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
    this.serverStatus = Math.random() > 0.5 ? 1 : 0;
  }

  onButtonClicked() {
    this.buttonStatus = "Button was clicked! Output is " + this.serverName;

    this.displayDetails = !this.displayDetails;
    this.details.push(new Date().toUTCString());
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  setColor() {
    return this.serverStatus === 0 ? 'red' : 'green';
  }

}
