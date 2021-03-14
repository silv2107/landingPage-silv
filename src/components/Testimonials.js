import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

function Testimonials(){
    return(
        <section className="testimonials">
            <TestimonialCard
            image="https://picsum.photos/200/200?ramdom=1"
            copy="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque rerum velit. Nam necessitatibus doloribus illo eos quia eligendi rerum, esse alias obcaecati sit eaque blanditiis repudiandae iusto, repellendus laudantium!"
            />
            <TestimonialCard
            image="https://picsum.photos/200/200?ramdom=2"
            copy="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque rerum velit. Nam necessitatibus doloribus illo eos quia eligendi rerum, esse alias obcaecati sit eaque blanditiis repudiandae iusto, repellendus laudantium!"
            />
            <TestimonialCard
            image="https://picsum.photos/200/200?ramdom=3"
            copy="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque rerum velit. Nam necessitatibus doloribus illo eos quia eligendi rerum, esse alias obcaecati sit eaque blanditiis repudiandae iusto, repellendus laudantium!"
            />
        </section>
    )
}

export default Testimonials;