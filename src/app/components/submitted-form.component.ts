import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHomePage() {
    this.router.navigate(['/']);      
  }
}
