import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReviewApi } from './review-api';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews implements OnInit {

  reviews: any[] = [];

  review = {
    reviewerId: 0,
    reviewedUserId: 0,
    rating: 5,
    comment: ''
  };

  constructor(private reviewApi: ReviewApi) {}

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
  this.reviewApi.getReviews().subscribe({
    next: (data: any) => {
      this.reviews = data.filter(
        (r: any) => r.reviewType === 'CLIENT'
      );
    },
    error: (err) => {
      console.log(err);
    }
  });
}

  addReview() {
  const newReview = {
    ...this.review,
    reviewType: 'CLIENT'
  };

  this.reviewApi.addReview(newReview).subscribe({
    next: () => {
      alert('Client review added successfully!');

      this.review = {
        reviewerId: 0,
        reviewedUserId: 0,
        rating: 5,
        comment: ''
      };

      this.loadReviews();
    },
    error: (err) => {
      console.log(err);
      alert('Error adding review!');
    }
  });
}
}
