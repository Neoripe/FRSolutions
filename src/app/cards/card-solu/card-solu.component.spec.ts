import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoluComponent } from './card-solu.component';

describe('CardSoluComponent', () => {
  let component: CardSoluComponent;
  let fixture: ComponentFixture<CardSoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSoluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
