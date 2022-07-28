import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'bpw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beauty-product-website';
  loading:boolean = false;
  constructor(private wowService: NgwWowService, private router: Router) {
     this.wowService.init();
     this.router.events.subscribe((event) => {
       this.checkRouterEvent(event);
     });
  }



  checkRouterEvent(routerEvent) {
    console.log(routerEvent)
    if(routerEvent instanceof NavigationStart || routerEvent instanceof ResolveEnd) {
      this.loading = true;
      console.log(this.loading)
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        setTimeout(() => {
          this.loading = false;

        }, 1000)
      }
  }


}
