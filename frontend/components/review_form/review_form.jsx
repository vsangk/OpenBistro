import React from 'react';
import Modal from 'react-modal';
import { modalStyle } from './modal_style';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      rating: 0,
      body: ""
    };

    this._handleClick = this._handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({
      body: this.state.body,
      rating: parseInt(this.state.rating),
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId
    });
    this.closeModal();
  }

  render() {
    return(
      <div>
        <button onClick={this._handleClick}>Leave A Review</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}>

          <form onSubmit={this.handleSubmit}>
            {[1,2,3,4,5].map(rating => (
              <label key={rating}>
                <input key={rating} type="radio" name="rating"
                  value={rating} onChange={this.update('rating')} />
                {rating}
              </label>
            ))}

            <label>Review:
              <textarea rows="4" cols="30" onChange={this.update('body')}/>
            </label>

            <button>Submit Review</button>
          </form>

        </Modal>
      </div>
    );
  }
}

export default ReviewForm;
