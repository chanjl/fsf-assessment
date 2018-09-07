import { Component } from '@angular/core';
import { RegInfo } from './components/registration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsf-assessment';

  sendToServer(eventObject: RegInfo) {
    console.log('sent: ', eventObject);
    //call service to ExpressJS
  }
}
