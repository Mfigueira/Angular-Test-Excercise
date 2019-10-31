import { MainDataService } from '../../services/main-data.service';
import { Component, OnInit } from '@angular/core';
import { GeoItem } from 'src/app/interfaces/geo-item';
import { GeoTable } from 'src/app/interfaces/geo-table-dto';

@Component({
  selector: 'geo-tables-container',
  templateUrl: './geo-tables-container.component.html',
  styleUrls: ['./geo-tables-container.component.scss']
})
export class GeoTablesContainerComponent implements OnInit {
  
  rawData: Array<string>;

  departments: GeoItem[];
  provinces: GeoItem[];
  districts: GeoItem[];

  tables: GeoTable[] = []

  constructor( private MainDataService: MainDataService ) { }

  ngOnInit() {

    this.MainDataService.getTextData().subscribe(data => {

      this.rawData = data.replace(/\"/g, "").split('\n').filter(str => str.trim().length > 0);

      this.buildMainData(this.rawData);

      this.tables = [
        {
          heading: "Departamento",
          tableData: this.departments
        },
        {
          heading: "Provincia",
          tableData: this.provinces
        },
        {
          heading: "Distrito",
          tableData: this.districts
        }
      ]
      // console.log("tables: ", this.tables);
      // console.log("raw data: ", this.rawData);
    });
  }

  buildMainData(rawData) {

    var dep: GeoItem[] = [];
    var prov: GeoItem[] = [];
    var dist: GeoItem[] = [];

    rawData.forEach(el => {
      var first = el.slice(0, el.indexOf("/")).trim();
      var second = el.slice(el.indexOf("/")+1, el.lastIndexOf("/")).trim();
      var third = el.slice(el.lastIndexOf("/")+1).trim();

      if(first) {
        var depObject: GeoItem = {
          id: parseInt(first.slice(0, first.indexOf(" "))),
          title: first.slice(first.indexOf(" ")).trim(),
          parent: null
        }
        var found = dep.find(item => { return item.id == depObject.id; })
        if (!found) { dep.push(depObject); }
      }


      if(second) {
        var provObject: GeoItem = {
          id: parseInt(second.slice(0, second.indexOf(" "))),
          title: second.slice(second.indexOf(" ")).trim(),
          parent: {
            id: parseInt(first.slice(0, first.indexOf(" "))),
            title: first.slice(first.indexOf(" ")).trim(),
            parent: null
          }
        }
        var found = prov.find(item => { return item.id == provObject.id; })
        if (!found) { prov.push(provObject); }
      }


      if(third) {
        var distObject: GeoItem = {
          id: parseInt(third.slice(0, third.indexOf(" "))),
          title: third.slice(third.indexOf(" ")).trim(),
          parent: {
            id: parseInt(second.slice(0, second.indexOf(" "))),
            title: second.slice(second.indexOf(" ")).trim(),
            parent: {
              id: parseInt(first.slice(0, first.indexOf(" "))),
              title: first.slice(first.indexOf(" ")).trim(),
              parent: null
            }
          }
        }
        var found = dist.find(item => { return item.id == distObject.id; })
        if (!found) { dist.push(distObject); }
      }
      // console.log("1: "+first,"2: "+second,"3: "+third);
    });

    // console.log(dep);
    // console.log(prov);
    // console.log(dist);

    this.departments = dep;
    this.provinces = prov;
    this.districts = dist;
  }
}