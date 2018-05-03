import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

@Input() child1:string;

public msg1:string = "from child 1st message";
public msg2:string = "from child 2nd message";

  constructor() { }
  ngOnInit() {
  }

public importing:string;
  receiveMsgFromGrandChild1(event){
  	this.importing=event;
  	console.log(event);
  }
}
