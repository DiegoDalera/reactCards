import React from 'react';
import Card from './Card';

import img1 from '../assets/hombre1.jpeg'
import img2 from '../assets/hombre2.jpeg'
import img3 from '../assets/hombre3.jpeg'

const cards = [
  {
    id: 1,
    title: 'Web Developer',
    image: img1
  },
  {
    id: 2,
    title: 'Tester',
    image: img2
  },
  {
    id: 3,
    title: 'Data analist',
    image: img3
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cards;