import { Component, OnInit } from '@angular/core';
import { UsersService , User} from '../users.service';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: any = [];
  constructor(private router:Router , private userService:UsersService) { }

  ngOnInit(): void {
  this.userService.getUser().subscribe((data : User[]) => {
    console.log(data);
    this.users = data;
    
  });

  }

  onSubmit(loginForm: { value: any; }){
    console.log(loginForm.value);
    for(let user of this.users){
      if(user.userName==loginForm.value.text && user.password==loginForm.value.password){
        console.log('valid user');
        this.router.navigateByUrl('home');
        this.userService.setUserName(user.userName);
        return;
      }
    } 
    alert("username or password uncorrect");
  }

}