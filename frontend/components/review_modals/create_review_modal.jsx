import React from 'react';
import Modal from 'react-modal';
import { modalStyle } from './modal_style';

class CreateReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      rating: 1,
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
    this.setState({ body: "" });
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
      rating: this.state.rating,
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurantId
    });

    if (this.state.body !== "") {
      this.closeModal();
      this.setState({ rating: 1, body: "" });
    } else {
      let body = document.getElementById("createBody");
      body.style.border = "2px solid red";
      setTimeout( () => {
        body.style.border = "1px solid black";
      }, 200);
    }
  }

  render() {
    return(
      <div className="create-review-modal">
        <button onClick={this._handleClick}>Write a Review</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}>

          <form onSubmit={this.handleSubmit} className="modal-form">
            <p>Leave Your Review</p>

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

              <textarea rows="8" cols="60" id="createBody"
                placeholder="Review..."
                onChange={this.update("body")}
                style={{fontSize: `14px`}}/>
            <br/>

            <button>Create Review!</button>
          </form>

        </Modal>
      </div>
    );
  }
}

export default CreateReviewModal;
