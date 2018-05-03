import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-grandchild3',
  templateUrl: './grandchild3.component.html',
  styleUrls: ['./grandchild3.component.css']
})
export class Grandchild3Component implements OnInit {

  constructor() { 
  }
  @Input() recObj:Object;

  ngOnInit() {
  }

}
