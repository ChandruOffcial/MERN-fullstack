import './specialdishes.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



const SimpleNext = (props) => {
    const { className, style, onclick } = props
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onclick}
        >
            Next

        </div>
    )
}
const SimplePrev = (props) => {
    const { className, style, onclick } = props
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onclick}
        >
            back
        </div>
    )
}


const SpecialDishes = () => {

    const [recipes, setRecipes] = useState([])
    const slider = React.useRef(null)


    useEffect(() => {
        fetch('/menu.json').then(res => res.json()).then(data => {
            const specialDish = data.filter((item) => (item.category === 'popular'))
            setRecipes(specialDish)
            console.log(specialDish)

        }).catch((err) => console.log(err))
    }, [])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNext />,
        prevArrow: <SimplePrev />
    };
    return (
        <>
            <div className=' container-md position-relative'>
                <div className=' mb-5 '>
                    <p className=' text-danger  fs-14 fw-semibold text-uppercase'>Special Dishes</p>
                    <h2 className=' fw-bold fs-lg-2 fs-sm-4  d-md-inline-flex w-md-25'>Standout Dishes From Our Menu</h2>
                </div>
                <div className=' next__prev__style position-absolute'>
                    <button onClick={() => slider?.current?.slickPrev()} className=' btn__nextandPrev  rounded-circle'><IoIosArrowBack /></button>
                    <button onClick={() => slider?.current?.slickNext()} className=' btn__nextandPrev rounded-circle green'><IoIosArrowForward /></button>
                </div>
                <Slider ref={slider} {...settings} className=' overflow-hidden  gap-2'>
                    {recipes.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                        />
                    ))}
                </Slider>


            </div>
        </>
    )
}
SimplePrev.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onclick: PropTypes.func,
};
SimpleNext.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onclick: PropTypes.func,
};

export default SpecialDishes
