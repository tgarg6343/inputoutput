import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

@Input() child2:string;
  constructor() { }


public sendObj:Object={
	prop1:"property1",
	prop2:"property2"
}
  ngOnInit() {
  }

}
