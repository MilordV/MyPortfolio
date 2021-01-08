import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
<<<<<<< HEAD
import {Howl, Howler} from 'howler';
=======
>>>>>>> d8e4a86ddc148534ef55674f1cc78cb64b950565

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD

export class HomeComponent implements OnInit{
   soundinit:Howl;
   soundHover:Howl;
  constructor(private _ac: ActivatedRoute) {
        this.soundinit = new Howl({src: ['../../../assets/Music/electric.mp3'],loop: true,volume:0.2});
        this.soundHover = new Howl({src: ['../../../assets/Music/hover.mp3'],volume:0.2});
   }

  ngOnInit(): void {
    console.log(this._ac.snapshot.data)
    var x = this.soundinit.play();
  }
  reproduce(){
    this.soundHover.play();
  }
  stop(){
    this.soundHover.stop();
  }
  finish(){
    this.soundHover.unload();
    this.soundinit.unload();
=======
export class HomeComponent implements OnInit{

  constructor(private _ac: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._ac.snapshot.data)
>>>>>>> d8e4a86ddc148534ef55674f1cc78cb64b950565
  }

}
