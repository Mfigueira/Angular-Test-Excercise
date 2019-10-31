import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  mockedData = [  "01 Lima /  / ",
                  "01 Lima / 50 Lima / ",
                  "01 Lima / 51 Barranca / ",
                  "01 Lima / 50 Lima / 202 La Molina",
                  "01 Lima / 50 Lima / 203 San Isidro",
                  "02 Arequipa /  / ",
                  "02 Arequipa / 63 Arequipa / ",
                  "02 Arequipa / 64 Caylloma / ",
                  "02 Arequipa / 63 Arequipa / 267 Cercado"
  ]

  constructor() { }

  get() {
    return this.mockedData;
  }
}
