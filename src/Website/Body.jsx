import React from 'react';

import Banner from './Body/Banner';
import Deal from './Body/Deal';
import Product from './Body/Product';
import Collection from './Body/Collection';
import Category from './Body/Category';
import Thumbnail from './Body/Thumbnail';
import Testimonial from './Body/Testimonial';
import Brand from './Body/Brand';
import Service from './Body/Service';
import Subscribe from './Body/Subscribe';




const Body = () => {
    return (
        <>
          <Banner />
          <Deal/>
          <Product/>
          <Collection/>
          <Category/>
          <Thumbnail/>
          <Testimonial/>
          <Brand/>
          <Service/>
          <Subscribe/>
        </>
    );
}

export default Body;