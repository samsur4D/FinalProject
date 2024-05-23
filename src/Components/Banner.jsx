


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assets/home/01.jpg'
import b2 from '../assets/home/02.jpg'
import b3 from '../assets/home/03.png'
import b4 from '../assets/home/04.jpg'
import b5 from '../assets/home/05.png'
import b6 from '../assets/home/06.png'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={banner1} />
         
        </div>
        <div>
            <img src={b2} />
      
        </div>
        <div>
            <img src={b3} />
         
        </div>
        <div>
            <img src={b4} />
          
        </div>
        <div>
            <img src={b5} />
         
        </div>
        <div>
            <img src={b6} />
          
        </div>
    </Carousel>
    );
};

export default Banner;