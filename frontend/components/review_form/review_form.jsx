import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="review-form">
        <input type="textarea" placeholder="Review..."></input>
      </form>
    );
  }
}

export default ReviewForm;
