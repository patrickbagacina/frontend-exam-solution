import { ViewComponent } from './../view-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements ViewComponent, OnInit {
  @Input() viewTemplate: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
