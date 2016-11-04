import React from 'react';
import { Link, hashHistory } from 'react-router';

class City extends React.Component {
  componentDidMount() {
    this.props.requestAllCities();
  }

  render() {
    let cityStyle;

    return (
      <div className="city-container">
        {this.props.cities.map( city => {
          cityStyle = {backgroundImage: `url(${city.image_url})`};
          return(
            <Link to={`/city/${city.id}`} key={city.id} >
              <div style={cityStyle} className="city-item">
                <h2>{city.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default City;
