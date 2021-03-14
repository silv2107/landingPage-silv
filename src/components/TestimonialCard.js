import "./TestimonialCard.scss";

function TestimonialCard({image, copy}){
    return(
        <article className="testimonialCard">
            <img src={image} alt="" className="testimonialCard__image"/>
            <p className="testimonialCar__copy">{copy}</p>
        </article>

    )
}

export default TestimonialCard;