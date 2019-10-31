import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTablesContainerComponent } from './geo-tables-container.component';

describe('GeoTablesContainerComponent', () => {
  let component: GeoTablesContainerComponent;
  let fixture: ComponentFixture<GeoTablesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoTablesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoTablesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
