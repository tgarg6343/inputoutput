import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-grandchild1',
  templateUrl: './grandchild1.component.html',
  styleUrls: ['./grandchild1.component.css']
})
export class Grandchild1Component implements OnInit {

@Input() child11:string;
@Input() child12:string;
public message:string="from grandchild 1 to child 1"
@Output() messageEvent=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  	this.messageEvent.emit("hello");
  }

sendMessage(){
	
}
}
