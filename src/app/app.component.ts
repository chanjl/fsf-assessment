import { Component } from '@angular/core';
import { RegInfo } from './components/registration-form.component';
import { Router } from '@angular/router';
import { SendJSService } from './services/send-js.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsf-assessment';
  
  constructor(private router: Router, private jsSvc: SendJSService){}
  
  sendToServer(eventObject: RegInfo) {
    //call service to ExpressJS
    // this.jsSvc.sendRegistration(eventObject).subscribe((data: any) => {
    //   this.router.navigate(['/done']);      
    // });
  }
}
