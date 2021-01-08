import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  show: boolean = false;
<<<<<<< HEAD
  soundloader:Howl;
  constructor(private router:Router) { 

  }
=======

  constructor(private router:Router) { }
>>>>>>> d8e4a86ddc148534ef55674f1cc78cb64b950565

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
