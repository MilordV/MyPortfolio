import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  show: boolean = false;
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationStart){
        this.show = true;
      }else if (e instanceof NavigationEnd){
        this.show = false;
      }
    })
  }

}
