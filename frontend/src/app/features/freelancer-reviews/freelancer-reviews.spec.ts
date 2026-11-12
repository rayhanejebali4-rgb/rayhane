import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreelancerReviews } from './freelancer-reviews';

describe('FreelancerReviews', () => {
  let component: FreelancerReviews;
  let fixture: ComponentFixture<FreelancerReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerReviews],
    }).compileComponents();

    fixture = TestBed.createComponent(FreelancerReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
