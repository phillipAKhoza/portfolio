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
            <section>
                <div class="row">
                    <div class="col-sm-5 img1">
                        <img className="img-fluid" src="https://via.placeholder.com/547X850/444444.jpg" title="single-img-five" alt="single-img-five" />
                    </div>
                    <div class="col-sm-7">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </div>
                </div>
            </section>        
          </div>
        )
    }
}


export default Home;
