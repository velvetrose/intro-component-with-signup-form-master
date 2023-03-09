import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./scss/app.component.scss']
})
export class AppComponent {
  title = 'intro-component-with-signup-form-master';
  form:any;
  invalidBorder:boolean=false;
  validBorder:boolean=false;
  errorMessageVisibility:boolean=false;


  constructor(){
    this.form= new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      Email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      Password: new FormControl('',Validators.required)
    })
  }

  get firstName(){
    return this.form.get('firstName');
  }
  get lastName(){
    return this.form.get('lastName');
  }
  get Email(){
    return this.form.get('Email');
  }
  get Password(){
    return this.form.get('Password');
  }

  onSubmit(){
    if(this.form.invalid){
      //this.form.markAllAsTouched();
      this.invalidBorder=true;
      this.errorMessageVisibility=true;
    }
    if(this.form.valid){
      this.validBorder=true;
      this.invalidBorder=false;
      alert('Success! 😊'); 
      this.form.reset();
      this.errorMessageVisibility=false;
    }
  }
  
}
