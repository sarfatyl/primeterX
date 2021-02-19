import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableSettings:{
    headers: {title: string; key: string}[],
    data: any[]
  };

  @Output() back = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
