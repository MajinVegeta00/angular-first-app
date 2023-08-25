import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentsComponent } from './card-comments.component';

describe('CardCommentsComponent', () => {
  let component: CardCommentsComponent;
  let fixture: ComponentFixture<CardCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCommentsComponent]
    });
    fixture = TestBed.createComponent(CardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
