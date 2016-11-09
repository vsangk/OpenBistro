import React from 'react';

export const starRating = (rating) => {
  let starStyle = {width: `${rating}%`};

  return (
    <div className="star-ratings-css">
      <div className="star-ratings-css-top"
        style={starStyle}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <div className="star-ratings-css-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};
