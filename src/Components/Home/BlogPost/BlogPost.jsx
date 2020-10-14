import React from 'react';

const BlogPost = (props) => {
  const { title, description, author, authorImg, date } = props.blog
  return (
    <div class="card shadow-sm ">
      <div className="card-header d-flex align-items-center">
        <div >
          <img className="mx-3" width="60" src={authorImg} alt="" />
        </div>
        <div className="mt-3">
          <h6 className="font-weight-bold" style={{ color: '#3A4256' }}>{author}</h6>
          <p className="text-secondary">{date}</p>
        </div>
      </div>
      <div class="card-body">
        <h5>{title}</h5>
        <p class="card-text text-secondary mt-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogPost;