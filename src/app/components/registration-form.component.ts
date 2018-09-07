import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SendJSService } from '../services/send-js.service';
import * as moment from 'moment';

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
  
  @ViewChild('regForm')
  regForm: NgForm;
  constructor(private router: Router, private jsSvc: SendJSService) { }

  maxDate = moment().subtract(18, 'years');

  ngOnInit() {
  }

  register() {
    const eventObject: RegInfo = {
      email: this.regForm.value["reg-email"],
      password: this.regForm.value["reg-password"],
      name: this.regForm.value["reg-name"],
      gender: this.regForm.value["reg-gender"],
      dob: moment(this.regForm.value["reg-dob"]).format("D MMM YYYY"),
      address: this.regForm.value["reg-address"],
      country: this.regForm.value["reg-country"],
      contact: this.regForm.value["reg-contact"]
    }
    console.log(eventObject);
    this.jsSvc.sendRegistration(eventObject).subscribe((data: any) => {
      console.log(data);
      if (data.status == 'SUCCESS') {
        this.router.navigate(['/done']);
        this.regForm.resetForm();
      }      
    });
  }
}
