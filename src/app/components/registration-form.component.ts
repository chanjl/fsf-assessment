import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendJSService } from '../services/send-js.service';
export interface RegInfo {
  email: string;
  password: string;
  name: string,
  gender: string,
  dob: string,
  address: string,
  country: string,
  contact: string,
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  @Output() //events
  // sendRegInfo = new EventEmitter<RegInfo>();

  @ViewChild('regForm')
  regForm: NgForm;

  constructor(private router: Router, private jsSvc: SendJSService) { }

  ngOnInit() {
  }

  register() {
    const eventObject: RegInfo = {
      email: this.regForm.value["reg-email"],
      password: this.regForm.value["reg-password"],
      name: this.regForm.value["reg-name"],
      gender: this.regForm.value["reg-gender"],
      dob: this.regForm.value["reg-dob"],
      address: this.regForm.value["reg-address"],
      country: this.regForm.value["reg-country"],
      contact: this.regForm.value["reg-contact"]
    }
    console.log(eventObject);
    //this.sendRegInfo.next(eventObject);
    //call service to send to Server
    this.jsSvc.sendRegistration(eventObject).subscribe((data: any) => {
      this.router.navigate(['/done']);      
    });
    this.regForm.resetForm();
  }
}
