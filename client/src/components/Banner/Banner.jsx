import './banner.css'
import { FaPlayCircle } from "react-icons/fa";
import banner from '../../../public/banner/banner.png'
import Rating from '@mui/material/Rating';

const Banner = () => {
    return (

        <section className='bg-body-tertiary'>
            <div className='container'>
                <div className="row">
                    <div className="col-md ">
                        <div className='py-md-4 py-2 position-relative top-10 respon__class ms-lg-5 mt-lg-4'>
                            <h2 className='Banner__title pt-md-1 pb-md-5 pb-3'>Dive into Delights Of Delectable <span className='highlight'>Food</span></h2>
                            <p className='fw-medium pb-md-4 pb-3 pb-md-5 pb-2 para' >Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                            <div className=' mb-3'>
                                <button className='btn btn-success me-3 rounded-pill order__btn mb-2'>Order Now</button>
                                <button className='border-0 bg-transparent fs-5 fw-medium'>Watch Video <FaPlayCircle className='Play__btn shadow-lg ms-3' /></button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md">
                        <div className='position-relative'>
                            <img src={banner} alt="Banner Img" className='banner__img' width="430" />
                            <div className='d-md-flex  d-none justify-content-around align-items-center gap-4 mt_20 __dish__box'>
                                <div className='dish'>
                                    <div className=' d-flex gap-2 banner__shotimg__container p-2 shadow rounded-3'>
                                        <img src="images/home/b-food1.png" className='rounded' height='80' width='80' />
                                        <div className='ms-3'>
                                            <h5 className=' fw-semibold fs-6 mb-1'>Spicy noodles</h5>
                                            <Rating name="read-only" value='4' readOnly className='fs-6' />
                                            <p className=' text-danger pb-0 mb-0 fs-6'>$18.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish'>
                                    <div className=' d-flex gap-2 banner__shotimg__container p-2 shadow rounded-3'>
                                        <img src="images/home/b-food1.png" className='rounded' height='80' width='80' />
                                        <div className='ms-3'>
                                            <h5 className=' fw-semibold fs-6 mb-1'>Spicy noodles</h5>
                                            <Rating name="read-only" value='4' readOnly className='fs-6' />
                                            <p className=' text-danger pb-0 mb-0 fs-6'>$18.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default Banner
