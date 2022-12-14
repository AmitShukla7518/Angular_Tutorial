import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTutComponent } from './pipes-tut.component';

describe('PipesTutComponent', () => {
  let component: PipesTutComponent;
  let fixture: ComponentFixture<PipesTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
