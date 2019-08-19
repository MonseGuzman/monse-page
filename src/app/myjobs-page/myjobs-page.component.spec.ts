import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobsPageComponent } from './myjobs-page.component';

describe('MyjobsPageComponent', () => {
  let component: MyjobsPageComponent;
  let fixture: ComponentFixture<MyjobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
