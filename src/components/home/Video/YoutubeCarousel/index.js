import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./YoutubeCarousel.scss";

const YoutubeCarousel = ({ items }) => {
  const responsive = {
    bigDesktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    smallDesktop: {
      breakpoint: { max: 1399, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div id="youtubeCarousel">
      <Carousel
        //   swipeable={false}
        //   draggable={false}
        // showDots={true}
        responsive={responsive}
        //   infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        styles={{
          diplay: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {items.map((item) => {
          const { id } = item;
          const { videoId } = id;

          return (
            <div key={videoId} className="carouselItem">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default YoutubeCarousel;
