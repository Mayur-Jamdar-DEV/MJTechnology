import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public signUpForm !: FormGroup;
  mobileNumber : number;
  constructor(private formBuilder : FormBuilder, private http : HttpClient) { 
    this.mobileNumber = 0;
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phoneNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signUpForm.value)
    .subscribe(res=>{
      alert("Message send succesful");
      this.signUpForm.reset();
    })
  }
  get mobno(){
    return this.signUpForm.controls;
  }
  get emailid(){
    return this.signUpForm.controls;
  }

  doSubmit(){
    console.log(this.signUpForm.value);
  }



}