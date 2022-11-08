import React from 'react';

const Section = () => {
    return (
        <div>
            <div className="hero h-96 " style={{ backgroundImage: `url("http://wahabali.com/work/travelu/images/parallax/bgparallax-02.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Get 10% Off On Your Next Travel</h1>
      <p className="mb-5">Travel between 22 April to 21 May and get existing offers along with a sure 10% cash discount</p>
      <button className="btn btn-warning">Explore Tours</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Section;