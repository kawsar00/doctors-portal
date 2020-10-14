import React from 'react';
import './Testimonials.css'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
  {
      quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name : 'Wilson Harry',
      from : 'California',
      img : wilson
  },
  {
      quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name : 'Ema Gomez',
      from : 'California',
      img : ema
  },
  {
      quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
      name : 'Aliza Farari',
      from : 'California',
      img : aliza
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials my-5">
      <div className="container">
        <div className="my-5">
        <h5 className="font-weight-bold text-uppercase text-brand">testimonial</h5>
        <h1 className=" mt-3 header-brand">What's Our Patients <br/> Says</h1>
        </div>
        <div className="card-deck">
          {
            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;