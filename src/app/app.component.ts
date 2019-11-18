import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guard';

  constructor(
    private authService:AuthService
  ){}

  login(){
    this.authService.login().subscribe(
      res=>console.log('登录了！'),error=>console.log('登录失败！')
    )
  }

  logout(){
    this.authService.logout();
  }


}
