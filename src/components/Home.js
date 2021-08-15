import React, { Component } from 'react';
import {Header} from "./layout/Header";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg'
];

export class Home extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (       
          <div className="site-main">   
            <Header/>            
          </div>
        )
    }
}


export default Home;
