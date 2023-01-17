import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIngComponent } from './card-ing.component';

describe('CardIngComponent', () => {
  let component: CardIngComponent;
  let fixture: ComponentFixture<CardIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
