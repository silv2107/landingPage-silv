import Carousel from "react-grid-carousel";
import CarouselItem from "./CarouselItem";

function Gallery(){
    return(
        <Carousel cols={1} rows={1} gap={0} loop autoplay={3000} >
            <Carousel.Item>
                <CarouselItem
                image="https://picsum.photos/1920/1080?ramdom=1"
                copy="vær med fra starten"
                ctaLink="/founders"
                ctaCopy="Nyeste features"
                />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem
                image="https://picsum.photos/1920/1080?ramdom=2"
                copy="bliv klogere"
                ctaLink="/news-letter"
                ctaCopy="Få gratis nyheder"
                />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem
                 image="https://picsum.photos/1920/1080?ramdom=3"
                 copy="the man"
                 ctaLink="/theman"
                 ctaCopy="Build your muscles"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery;