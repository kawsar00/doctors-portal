import React from 'react';
import './Blogs.css'
import wilson from '../../../images/wilson.png'
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
  {
      title : 'Check at least a doctor in a year for your teeth',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Cudi',
      authorImg : wilson,
      date : '23 April 2019'
  },
  {
      title : 'Two time brush in a day can keep you healthy',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Sinthia',
      authorImg : wilson,
      date : '23 April 2019'
  },
  {
      title : 'The tooth cancer is taking a challenge',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Cudi',
      authorImg : wilson,
      date : '23 April 2019'
  },
]


const Blogs = () => {
  return (
    <section className="my-5 py-5 blog-container">
      <div className="container">
        <div className="text-center my-5">
          <h5 className="font-weight-bold text-uppercase text-brand">Our Blog</h5>
          <h1 className=" mt-3 header-brand">From Our Blog News</h1>
        </div>
        <div className="card-deck pt-5">
          {
            blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
          }
        </div>
      </div>
    </section>
  );
};

export default Blogs;