import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaintroComponent } from './qaintro.component';

describe('QaintroComponent', () => {
  let component: QaintroComponent;
  let fixture: ComponentFixture<QaintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
