import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //Internal Template
  template:`<h1>{{name1}}</h1>
            <body>
                How to know about angular and TypeScript?
            </body>`,
  /*External template
  templateUrl: './my-component.component.html',*/
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  name1="Welcome to Angular Platform";

  constructor(){}

  ngOnInit(): void {
    
  }

}
