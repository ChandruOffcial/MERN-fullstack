import './specialdishes.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';

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
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        ]
    };
    return (
        <>
            <div className=' container'>
                <div className=' mb-5'>
                    <p className=' text-danger  fs-14 fw-semibold text-uppercase'>Special Dishes</p>
                    <h2 className=' fw-bold fs-lg-2 fs-sm-4  d-md-inline-flex w-md-25'>Standout Dishes From Our Menu</h2>
                </div>
                <Slider {...settings}>
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

export default SpecialDishes
