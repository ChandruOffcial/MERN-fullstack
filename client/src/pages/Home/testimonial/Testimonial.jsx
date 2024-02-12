import './testimonial.css'

const Testimonial = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2'>
                    <figure>
                        <img src="/images/home/testimonials/testimonials.png" alt="" className='w-100' />
                    </figure>
                </div>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2'>
                    <div className='text-start mb-5'>
                        <p className=' text-danger  fs-14 fw-semibold text-uppercase '>Testimonials</p>
                        <h2 className=' fw-bold fs-lg-2 fs-sm-4 w-md-25 '>What Our Customers Say About Us</h2>
                    </div>
                    <p className='w_75'>“I had the pleasure of dining at Foodi last night, and Im still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                </div>

            </div>
        </div>
    )
}

export default Testimonial