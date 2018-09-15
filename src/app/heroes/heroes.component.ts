import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id:1,
    name:'Winstom'
  };

  isSpecial = true;
  isSpecial2 = false;

  constructor() {
    //window['hero'] = this.hero;
  }

  ngOnInit() {
  }

  // ES6 방식
  onSave(e:any){ //any 어떤걸 넣어도 허용
    console.log(e);
    this.isSpecial = !this.isSpecial; //toggle 방식처럼 사용
  }

  // ES5
  // onSave= function(e:any){
  //   console.log(e);
  // }

}
