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
    this.props.updateReview({
      id: this.props.review.id,
      body: this.state.body,
      rating: this.state.rating,
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurantId
    });

    if (this.state.body !== "") {
      this.closeModal();
    }
  }

  render() {
    return(
      <div>
        <a onClick={this._handleClick}>Edit</a>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}>

          <form onSubmit={this.handleSubmit} className="modal-form">
            <p>Edit Your Review</p>
            <div className="rate">
              <input type="radio" id="star5" name="5" value="5"
                checked={this.state.rating.toString() === "5"}
                onChange={this.update("rating")}/>
              <label htmlFor="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="4" value="4"
                checked={this.state.rating.toString() === "4"}
                onChange={this.update("rating")}/>
              <label htmlFor="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="3" value="3"
                checked={this.state.rating.toString() === "3"}
                onChange={this.update("rating")}/>
              <label htmlFor="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="2" value="2"
                checked={this.state.rating.toString() === "2"}
                onChange={this.update("rating")}/>
              <label htmlFor="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="1" value="1"
                checked={this.state.rating.toString() === "1"}
                onChange={this.update("rating")}/>
              <label htmlFor="star1" title="text">1 star</label>
            </div>
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
