import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTableInfoComponent } from './race-table-info.component';

describe('RaceTableInfoComponent', () => {
  let component: RaceTableInfoComponent;
  let fixture: ComponentFixture<RaceTableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceTableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
