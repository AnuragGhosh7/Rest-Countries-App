import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecountryViewComponent } from './singlecountry-view.component';

describe('SinglecountryViewComponent', () => {
  let component: SinglecountryViewComponent;
  let fixture: ComponentFixture<SinglecountryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecountryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
