import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild("loginForm", {static:false}) loginForm:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    
  }
}