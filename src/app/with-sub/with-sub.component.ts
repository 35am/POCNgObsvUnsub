import { Component, OnInit } from '@angular/core';
import { SubscriberComp } from 'app/subscriber-comp.component';

@Component({
  selector: 'app-with-sub',
  templateUrl: './with-sub.component.html',
  styleUrls: ['./with-sub.component.css']
})
export class WithSubComponent extends SubscriberComp implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    // this.getObs(service.getX()).subscribe((v: any) => console.log("Value : ", v));
  }

}
