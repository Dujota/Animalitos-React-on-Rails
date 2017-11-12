import PropTypes from 'prop-types';
import React from 'react';
import Animal from './Animal'
import Album from './Album'

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      active: false
    };
  }

// this is a function that comes with REACT, it is the last thing that is rendered by REACT
  componentDidMount(){
    document.body.addEventListener('keyup', (event) => {
      if (event.keyCode === 27){
        this.setState({
          images: [],
          active: false
        });
      }
    });
  }
// ES 6 style syntax
  loadImages = (animal) => {
    const client_id = '62393e5727adadcc4720c03e66df6a1057398bd2acc4baff70adbefc6c4b2823'
    // once we fetch this data from the internet, we then want to do somehting -- this called a promise
    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${animal.name}`).then(response => response.json()).then(data => {
      this.setState({
        images: data.results,
        active: true
      });
    });
  }

  render() {
    console.log(this.props);
    const {images, active} = this.state
    const {animals} = this.props
    return (
      <div>
        <section className="animals">
          {animals.map(animal =>
          <Animal key={animal.id} animal={animal} loadImages={this.loadImages} />
        )}
        </section>

        <Album images={images} active={active}/>
      </div>
    );
  }
}
