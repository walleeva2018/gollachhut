import React from 'react';
import '../../styles/offers.css'; // Assuming you're storing styles in a separate CSS file
import { Heading } from '@chakra-ui/react';

const Offers = () => {
  return (
    <div className="container">
      
      <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, green.500, cyan.500, pink.500)"

            margin={4}
            bgClip="text"  // This clips the background gradient to text
          >
            Our Services
          </Heading>

      {/* Box 1 */}
      <div className="box">
        <div className="row">
          <span>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </span> <br />
          <span>Basic</span>
        </div>
        <div className="row">
          <span>2500</span>
          <span>BDT</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>10% Discount On Items</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>One Toy Free*</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>Complimentary Gifts</span>
        </div>
        <div className="row live-support">
          <span>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
          <span>Live Playing Man</span>
        </div>
        <div className="row">
          <a href="#">Order Now</a>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box">
        <div className="row">
          <span>
            <i className="fa fa-plane" aria-hidden="true"></i>
          </span> <br />
          <span>Standard</span>
        </div>
        <div className="row">
          <span>5000</span>
          <span>TK</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>Best for 3-7 years</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>One Premium Course</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>One Complimentary Chess</span>
        </div>
        <div className="row live-support">
          <span>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
          <span>Live Playing Man</span>
        </div>
        <div className="row">
          <a href="#">Order Now</a>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box">
        <div className="row">
          <span>
            <i className="fa fa-rocket" aria-hidden="true"></i>
          </span> <br />
          <span>Premium</span>
        </div>
        <div className="row">
          <span>100000</span>
          <span>BDT</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>5% Discount on Each Offer</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>Personal Guide</span>
        </div>
        <div className="row">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>Luxury Gift Free</span>
        </div>
        <div className="row live-support">
          <span>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span>Live Playing Support</span>
        </div>
        <div className="row">
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default Offers;