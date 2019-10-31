import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTableComponent } from './geo-table.component';

describe('GeoTableComponent', () => {
  let component: GeoTableComponent;
  let fixture: ComponentFixture<GeoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
