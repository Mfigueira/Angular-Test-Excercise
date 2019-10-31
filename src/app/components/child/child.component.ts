import { Component, OnInit, Input } from '@angular/core';
import { DataObject } from 'src/app/interfaces/data-object';

@Component({
  selector: 'child-table',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data: DataObject[];
  @Input() heading: string;
  
  constructor() { }

  ngOnInit() {
  }

}