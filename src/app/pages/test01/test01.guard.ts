import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Test01Guard implements CanActivate  {
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url:string = state.url;
    return this.checkLogin(url);
  }
  

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { 
      console.log('路由守卫返回了TRUE');
      return true; 
    }

    // Store the attempted URL for redirecting
    // 保存前一步路由地址以便以后可以回退
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    // 没有登录则跳转到登录路由
    this.router.navigate(['/login']);
    console.log('路由守卫返回了false');
    return false;
  }


}
