import { Component, OnInit, Input } from '@angular/core';
import { ViewComponent } from '../view-component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements ViewComponent, OnInit {
  @Input() viewTemplate: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
