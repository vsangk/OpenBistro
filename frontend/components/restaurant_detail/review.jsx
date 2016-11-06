import React from 'react';

const Review = ({ review }) => {
  return(
    <div className="review-content">
      {review.rating} {review.body}
    </div>
  );
};

export default Review;
