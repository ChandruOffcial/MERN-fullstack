import './testimonial.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2'>
                    <figure>
                        <img src="/images/home/testimonials/testimonials.png" alt="" className='w-100' />
                    </figure>
                </div>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2 m-auto'>
                    <div className='text-start mb-md-5 md-3'>
                        <p className=' text-danger  fs-14 fw-semibold text-uppercase '>Testimonials</p>
                        <h2 className=' fw-bold fs-lg-2 fs-sm-4 w-md-25 '>What Our Customers Say About Us</h2>
                    </div>
                    <p className='w_75 mb-md-5 md-3'>“I had the pleasure of dining at Foodi last night, and Im still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    <div className=' d-flex justify-content-start'>
                        <AvatarGroup max={3}>
                            <Avatar alt="Remy Sharp" src="/images/home/testimonials/testimonial1.png" />
                            <Avatar alt="Travis Howard" src="/images/home/testimonials/testimonial2.png" />
                            <Avatar alt="Cindy Baker" src="/images/home/testimonials/testimonial3.png" />
                        </AvatarGroup>
                        <div>

                            <h5 className=' ms-2 mb-1 fw-bold fs-16'>Customer Feedback</h5><p className=' fs-14'><FaStar className=' ms-2 mb-1 me-2 star__style' /><span className=' fw-semibold'>4.9</span> <span className=' fw-light'>(18.6k Reviews)</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial