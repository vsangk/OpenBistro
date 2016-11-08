import React from 'react';
import UpdateReviewModalContainer from '../review_modals/update_review_modal_container';

const Review = ({ review, deleteReview, currentUserId, restaurantId }) => {
  const links = () => {
    if (review.user_id === currentUserId) {
      return (
        <div>
          <UpdateReviewModalContainer
            restaurantId={restaurantId}
            currentUserId={currentUserId}
            review={review}
          />
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
