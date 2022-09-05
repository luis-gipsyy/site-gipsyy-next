import Slider from 'react-slick';
import { ArrowIosBack as CloseIcon } from '@styled-icons/evaicons-solid/ArrowIosBack';

import * as Style from './styles';
import Link from 'next/link';

export type CarouselBannerProps = {
  content: {
    category: string;
    imageUrlDesktop: string;
    imageUrlMobile: string;
    associationLink: string;
  }[];
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="icon-arrow">
      <CloseIcon onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="icon-arrow left">
      <CloseIcon onClick={onClick} />
    </div>
  );
}

const CarouselBanner = ({ content }: CarouselBannerProps) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Style.WrapperCarouselBanner>
      {content && (
        <Slider {...settings}>
          {content.map((item, index) => (
            <div key={index} className="item-banner">
              {item.associationLink ? (
                <>
                  <Link href={item.associationLink}>
                    <a target="_blank">
                      <div className="item-banner__mobile">
                        <img src={item.imageUrlMobile} />
                      </div>
                      <div className="item-banner__desktop">
                        <img src={item.imageUrlDesktop} />
                      </div>
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <div className="item-banner__mobile">
                    <img src={item.imageUrlMobile} />
                  </div>
                  <div className="item-banner__desktop">
                    <img src={item.imageUrlDesktop} />
                  </div>
                </>
              )}
            </div>
          ))}
        </Slider>
      )}
    </Style.WrapperCarouselBanner>
  );
};

export default CarouselBanner;
