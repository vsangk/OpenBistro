import React from 'react';
import { Link, hashHistory } from 'react-router';

class City extends React.Component {
  componentDidMount() {
    this.props.requestAllCities();
  }

  render() {
    let cityStyle;

    return (
      <div className="city-flex-container">
        <div className="city-flex-items">
          <div className="city-header"><h2>Available Cities:</h2></div>
          <div className="city-item-container">
            {this.props.cities.map( city => {
              cityStyle = {backgroundImage: `url(${city.image_url})`};
              return(
                <Link to={`/city/${city.id}`} key={city.id} >
                  <div style={cityStyle} className="city-item">
                    <h3>{city.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default City;
