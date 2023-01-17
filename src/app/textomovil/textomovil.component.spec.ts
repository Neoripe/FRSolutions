import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextomovilComponent } from './textomovil.component';

describe('TextomovilComponent', () => {
  let component: TextomovilComponent;
  let fixture: ComponentFixture<TextomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextomovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
