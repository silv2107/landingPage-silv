import "./CarouselItem.scss"
function CarouselItem({image, copy, ctaLink, ctaCopy}){
    return(
        
        <div className="carouselItem">
            <img className="carouselItem__image" src={image} alt=""/>
            <div className="carouselItem__content">
                <p className="carouselItem__item">{copy}</p>
                <a href={ctaLink} className="carouselItem__CTA"
                //eslint-disable-next-line
                 onClick={gtag("event", "select_content", {"content_type": ctaLink})}>
                {ctaCopy}</a>
            </div>
        </div>
        
    )
}

export default CarouselItem;

