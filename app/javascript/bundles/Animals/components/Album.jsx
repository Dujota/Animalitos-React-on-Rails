import PropTypes from 'prop-types';
import React from 'react';
import player from '../Player';

export default class Animal extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired, // this is passed from the Rails view
    active: PropTypes.bool.isRequired
  };


  render() {
    console.log(this.props);
      // const images = this.props.images;
      // const active = this.props.active;
      const {images, active} = this.props;

      // this is the same as the active ? 'active' : null
      // const classes = ['album'];
      // if (active) {
      //   classes.push('active')
      // }

    return (
      <section className={`album ${active ? 'active' : null}`}>
        {
          images.map(image => (<img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          />
        ))}
      </section>
    );
  }
}
