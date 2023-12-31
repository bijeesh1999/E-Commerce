import Slider from "react-slick";
import "./slicCorosal.css"


function Slick() {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow"> ⫸ </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow"> ⫷ </div>
    //   </div>
    // ),
  };

  return (
    <div id="Slider">
      <Slider {...settings}>
        {/* {image &&
          image.map((image, index) => (
            <div key={index}>
              <div id="image">
                <img id="Images" src={image} alt="images"></img>
              </div>
            </div>
          ))}  */}
            <div className="slikImage">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Gw/Dec/one/Monthly/Deals-Unrec-PC-3000._CB586257034_.jpg" alt="image"/>
          </div>
          <div className="slikImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/decatf23/eoss/unrec/oneweekly/WA_ETH_3000._CB586386964_.jpg" alt="image"/>
          </div>
          <div className="slikImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Dec_23/GW/GW-Hero-Pc-6._CB586809257_.jpg" alt="image"/>
          </div>
          <div className="slikImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200-Toy-Fiesta-APAY_2x_unrec._CB570529351_.jpg" alt="image"/>
          </div>
          <div className="slikImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" alt="image"/>
          </div>
          <div className="slikImage">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/decatf23/eoss/unrec/oneweekly/MA_3000._CB586386964_.jpg" alt="image"/>
          </div>
      </Slider>
    </div>
  );
}

export default Slick;
