import { Component, OnInit } from '@angular/core';
import { UsersService , User} from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users ! :User[];
  user = new User();
  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.usersService.getUser().subscribe((data)=>{
      console.log(data);
      this.Users=data;
    });
  }

  userTaken(){
    for(let user of this.Users){
      if(user.userName == this.user.userName){
        window.alert("this user name already taken !!");
        return;
      }
      this.addUser();
    }
  }

  addUser(){
    this.usersService.addUser(this.user).subscribe((data)=>{
     this.refresh();
     this.router.navigateByUrl('login');
    });
  }

  cancel(){
    this.router.navigateByUrl('login');
  }

}
