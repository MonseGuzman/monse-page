import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMeComponent } from './nav-bar-me.component';

describe('NavBarMeComponent', () => {
  let component: NavBarMeComponent;
  let fixture: ComponentFixture<NavBarMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
