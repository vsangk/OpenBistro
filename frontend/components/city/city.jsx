import React from 'react';

class City extends React.Component {
  componentDidMount() {
    this.props.requestAllCities();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.cities.map( city => (
            <li key={city.id}>
              <img src={city.image_url}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default City;
