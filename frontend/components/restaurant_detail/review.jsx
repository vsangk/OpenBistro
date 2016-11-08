import React from 'react';

const Review = ({ review, deleteReview, currentUserId }) => {
  const links = () => {
    if (review.user_id === currentUserId) {
      return (
        <div>
          <a>Edit</a>
          <a onClick={() => deleteReview(review.id)}>Delete</a>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return(
    <div className="review-content">
      {review.rating} {review.body} {links()}
    </div>
  );
};

export default Review;
