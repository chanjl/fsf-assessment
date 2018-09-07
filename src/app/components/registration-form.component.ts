import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface RegInfo {
  // name: string;
  // artist: string;
  // rating: number,
  // image: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  @Output() //events
  sendRegInfo = new EventEmitter<RegInfo>();

  @ViewChild('regForm')
  regForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  register() {
    const eventObject: RegInfo = {
      // name: this.addLPForm.value["lp-name"],
      // artist: this.addLPForm.value["lp-artist"],
      // rating: _rating,
      // image: url
    }
    this.sendRegInfo.next(eventObject);
    // this.regForm.resetForm();
  }
}
