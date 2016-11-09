import React from 'react';
import Modal from 'react-modal';
import { modalStyle } from './modal_style';

class UpdateReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      rating: this.props.review.rating,
      body: this.props.review.body
    };

    this._handleClick = this._handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.getRadioButtons = this.getRadioButtons.bind(this);
  }

  _handleClick() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  getRadioButtons(rating) {
    if (rating === this.state.rating) {
      return(
        <input key={rating} type="radio" name="rating"
          value={rating} checked="checked" onChange={this.update('rating')}/>
      );
    } else {
      return(
        <input key={rating} type="radio" name="rating"
          value={rating} onChange={this.update('rating')}/>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview({
      id: this.props.review.id,
      body: this.state.body,
      rating: this.state.rating,
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurantId
    });
    this.closeModal();
  }

  render() {
    return(
      <div>
        <a onClick={this._handleClick}>Edit</a>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}>

          <form onSubmit={this.handleSubmit}>
            {[1,2,3,4,5].map(rating => (
              <label key={rating}>
                {this.getRadioButtons(rating)}
                {rating}
              </label>
            ))}
            <br/>

            <textarea rows="8" cols="60"
              placeholder="Review..."
              onChange={this.update('body')}
              style={{fontSize: `14px`}}
              value={this.state.body}/>
            <br/>

            <button>Update Review!</button>
          </form>

        </Modal>
      </div>
    );
  }
}

export default UpdateReviewModal;
