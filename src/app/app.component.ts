import { Component } from '@angular/core';
import * as rx from "rxjs";
import {query,animate,style,keyframes,stagger,state,trigger,transition} from "@angular/animations";
import { Router } from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('listAnimation',[
      transition('*=>*',[
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter',stagger('200ms',[
           animate("1s ease-in",keyframes([
             style({opacity:0,transform:'translateY(-50px)'}),
             style({opacity:.5,transform:'translateY(20px)'}),
             style({opacity:1,transform:'translateY(0px)'}),
           ]))
        ]),{optional:true}),

          query(':leave',stagger('300ms',[
            animate("1s ease-in",keyframes([
               style({opacity:1,transform:'translateY(0)'}),
               style({opacity:.5,transform:'translateY(+50px)'}),
               style({opacity:0,transform:'translateY(-75px)'})
             ]))
         ]),{optional:true}),
  ])
    ]),
    trigger('divAnim',[
      transition('*=>*',[
         query('.col',style({opacity:0,transform:'translateX(-80px)'})),
         query('.col',stagger('500ms',[
           animate('800ms 1.2s  ease-out',style({opacity:1,transform:'translateX(0px)'}))
         ]))
      ])
    ])
  ]
})
export class AppComponent {
  isOpen :boolean=false;
  title:string="Home";
  items=[];
  constructor(public router:Router){
    this.items=["Here is first one","Here another one","Here comes another one"]
    router.events.subscribe((route)=>{
      this.title=this.router.url;
    });
   }
    AddItem(){
       this.items.push("Here comes another one");
    }
    AddItemAtFirst(){
      this.items.unshift("Here Comes First element ");
    }
    RemoveFirstItem()
    {
     console.log("removed item :"+ this.items.shift());
    }

    RemoveLastElement(){
     console.log("Removed item"+ this.items.pop());
    }
    
  }
