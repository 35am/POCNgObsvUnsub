/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithSubComponent } from './with-sub.component';

describe('WithSubComponent', () => {
  let component: WithSubComponent;
  let fixture: ComponentFixture<WithSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
