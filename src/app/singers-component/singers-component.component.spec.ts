import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingersComponentComponent } from './singers-component.component';

describe('SingersComponentComponent', () => {
  let component: SingersComponentComponent;
  let fixture: ComponentFixture<SingersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
