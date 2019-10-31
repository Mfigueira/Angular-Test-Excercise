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
  
  geoData: Array<string>;
  tables: GeoTable[] = []

  constructor( private MainDataService: MainDataService ) { }

  ngOnInit() {
    this.MainDataService.getTextData().subscribe(data => {
      const plainTextToArray = text => text.replace(/\"/g, "").split('\n').filter(str => str.trim().length > 0);
      this.geoData = plainTextToArray(data);
      this.buildMainData(this.geoData);
    });
  }

  buildGeoTables(departments: GeoItem[], provinces: GeoItem[], districts: GeoItem[]) {
    this.tables = [
      {
        heading: "Departamento",
        tableData: departments
      },
      {
        heading: "Provincia",
        tableData: provinces
      },
      {
        heading: "Distrito",
        tableData: districts
      }
    ]
  }

  buildMainData(geoData: Array<string>) {
    
    const parseId = (data: string) => parseInt(data.slice(0, data.indexOf(" ")));
    const parseTitle = (data: string) => data.slice(data.indexOf(" ")).trim();
    const foundInArray = (array: GeoItem[], object: GeoItem) => array.find(item => { return item.id === object.id; });

    let departmentArray: GeoItem[] = [];
    let provinceArray: GeoItem[] = [];
    let districtArray: GeoItem[] = [];

    geoData.forEach(str => {

      let departmentData = str.slice(0, str.indexOf("/")).trim();
      let provinceData = str.slice(str.indexOf("/")+1, str.lastIndexOf("/")).trim();
      let districtData = str.slice(str.lastIndexOf("/")+1).trim();

      if(departmentData) {
        let departmentObject: GeoItem = {
          id: parseId(departmentData),
          title: parseTitle(departmentData),
          parent: null
        }
        if (!foundInArray(departmentArray, departmentObject)) { departmentArray.push(departmentObject); }
      }

      if(provinceData) {
        let provinceObject: GeoItem = {
          id: parseId(provinceData),
          title: parseTitle(provinceData),
          parent: {
            id: parseId(departmentData),
            title: parseTitle(departmentData),
            parent: null
          }
        }
        if (!foundInArray(provinceArray, provinceObject)) { provinceArray.push(provinceObject); }
      }

      if(districtData) {
        let districtObject: GeoItem = {
          id: parseId(districtData),
          title: parseTitle(districtData),
          parent: {
            id: parseId(provinceData),
            title: parseTitle(provinceData),
            parent: {
              id: parseId(departmentData),
              title: parseTitle(departmentData),
              parent: null
            }
          }
        }
        if (!foundInArray(districtArray, districtObject)) { districtArray.push(districtObject); }
      }
    });

    this.buildGeoTables(departmentArray, provinceArray, districtArray);
  }
}