import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // Step 1: Have the form tag equivalent in TS
  addUserForm: FormGroup = new FormGroup({
    // Step 2: Have the input equivalents in TS
    // Step 3 in the html file
    name: new FormControl('Nikhil', Validators.required), // step 5: validations
    phone: new FormControl('23423', Validators.required), // step 6: go to the HTML file
    email: new FormControl('abc@g.com', [Validators.required, Validators.email]), // multiple validators are used by making into a list
  });

  constructor(private userService: UserService) { //1. Connect with service

   }

  ngOnInit(): void {
  }

  handleAddUser(){
    console.log("Submitted");
    console.log(this.addUserForm) // form state

    console.log(this.addUserForm.value);

    
    //2. Send the daya to the service
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { //3. get the response from 
        console.log(res);

        if(res && res.id){
          this.isSaved = true;
        }
      });
  }

}
