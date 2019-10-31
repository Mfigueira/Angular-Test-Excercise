import { Component, OnInit, Input } from '@angular/core';
import { GeoItem } from 'src/app/interfaces/geo-item';

@Component({
  selector: 'geo-table',
  templateUrl: './geo-table.component.html',
  styleUrls: ['./geo-table.component.scss']
})
export class GeoTableComponent implements OnInit {

  @Input() data: GeoItem[];
  @Input() heading: string;
  
  constructor() { }

  ngOnInit() {
  }

}