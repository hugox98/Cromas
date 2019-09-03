import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLotesComponent } from './details-lotes.component';

describe('DetailsLotesComponent', () => {
  let component: DetailsLotesComponent;
  let fixture: ComponentFixture<DetailsLotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
