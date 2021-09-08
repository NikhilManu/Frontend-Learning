import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[] = [];
  usersSubscription: Subscription | undefined;

  constructor( private userService: UserService) { // 1. Connect with service using the dependency injection
    console.log('Inside Constructor')
  }

  // Lifecycle Hook, called after the constructor
  ngOnInit(): void {
    console.log('Inside ngOnInit')
    // Ideal place for ajax calls
    
    // 2. Send the req to the service
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: any) => { //3. get the response from service
        console.log(res);
        this.userList = res;
      });

  }

  ngOnDestroy(): void{
    console.log('Inside Destroy');
    if (this.usersSubscription){
      this.usersSubscription.unsubscribe();
    }
    if(this.userList && this.userList.length > 0){
      this.userList.length = 0;
    }
  }

}
