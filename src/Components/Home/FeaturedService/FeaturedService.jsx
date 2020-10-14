import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
  return (
    <section className="features-service row p-5 mb-5">
      <div className="col-md-5">
        <img className="img-fluid" src={featured} alt=""/>
      </div>
      <div className="col-md-7 my-5 align-self-center">
      <h1 className=" mt-3 header-brand">Exceptional Dental <br/>Care, on Your Terms</h1>
      <p style={{lineHeight: '30px', paddingRight: '50px'}} className="text-secondary my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas quis officiis incidunt. Nostrum iure natus pariatur vel aut adipisci eaque placeat quod, dolores esse. Et, odio voluptatem, magnam sed doloribus labore porro molestias iure molestiae, facilis dolorem praesentium. Fugit velit reprehenderit quia sit consequuntur accusantium dolorem corporis at voluptates, vitae distinctio itaque. Quia voluptate sunt sequi odit distinctio quam expedita officiis eum veniam, a reprehenderit fugit consequuntur quis porro.</p>
      <button className="btn btn-primary btn-bg">Learn More</button>
      </div>
    </section>
  );
};

export default FeaturedService;