import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export default class App extends Component{
  state = {
  image: null,
}

  componentDidMount() {
    fetch(`https://pixabay.com/api/?q=cat&page=1&key=25723466-237a46130ce218f798049a33b&image_type=photo&orientation=horizontal&per_page=12`).then(res=>res.json()).then(console.log)
  }

  render() {
    return (
      <div>
        {this.state.image && <div>тут будет картинка</div>}
        <ToastContainer autoClose={3000}/>
      </div>
    )
  }
};
