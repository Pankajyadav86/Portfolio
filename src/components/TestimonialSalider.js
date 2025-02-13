import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSalider.css';

const testimonials =[

    {
        text:"Creative and skilled developer well qulified .",
        name: 'Jorg sooras',
        position:"Web application Developer",
        image:"./image/images/person_1.jpg"
    },
    {
        text:"Good to go with PankajYadav.",
        name: 'Shyam Mittal',
        position:"CEO(itc food ltd)",
        image:"./image/images/person_2.jpg"
    },
    {
        text:"Fully satified with your work. its my gratitude to work with you sir!",
        name: 'Anubhav irrani',
        position:"Mannager(IBM)",
        image:"./image/images/person_3.jpg"
    }
];

const TestimonialSlider =()=>{
    const settings={
        dots: true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,

        responsive:[
            {
                breakpoint:768,
                setting:{
                    arrows:false,
                    dots:true
                }
            }
        ]
    };

    return (
        <div className='testimonial-slider'>
            <Slider {...settings}>
                {testimonials.map((testimonial,index)=>(
                    <div key={index} className='testimonial'>
                        <p>{testimonial.text}</p>
                        <div className='testimonial-info'>
                            <img src={testimonial.image} alt={testimonial.name}/>
                            <div>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const SampleNextArrow=(props)=>{
    const {className,style,onClick} =props;
    return(
        <div className={className}
            style={{...style, display:"block", background:"gray"}}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow=(props)=>{
    const {className,style,onClick} = props;
    return(
        <div className={className}
            style={{...style, display:"block",background:"gray"}}
            onClick={onClick}
        />
    );
};

export default TestimonialSlider;