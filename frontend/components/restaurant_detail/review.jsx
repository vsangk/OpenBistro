import React from 'react';
import UpdateReviewModalContainer from '../review_modals/update_review_modal_container';
import { starRating } from '../misc/stars';

const Review = ({ review, deleteReview, currentUser, restaurantId }) => {
  const links = () => {
    if (review.user_id === currentUser.id) {
      let handleDelete = id => {
        if (confirm("Delete your review?") === true) {
          deleteReview(id);
        }
      };

      return (
        <div>
          <ul>
            <li><UpdateReviewModalContainer
              restaurantId={restaurantId}
              currentUserId={currentUser.id}
              review={review}
              />
            </li>
            <li className="spacer">|</li>
            <li><a onClick={() => handleDelete(review.id)}>Delete</a></li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return(
    <div className="review-item">
      <div className="review-rating">
        <ul>
          <li id="review-stars">{starRating(review.rating * 20)}</li>
          <li>Reviewed by: {review.username}</li>
        </ul>
      </div>
      <div className="review-body">
        {review.body}
      </div>
      <div className="review-links">
        <div>
          <ul>
            <li>Last updated: {review.updated_at}</li>
          </ul>
        </div>
          {links()}
      </div>
    </div>
  );
};

export default Review;
