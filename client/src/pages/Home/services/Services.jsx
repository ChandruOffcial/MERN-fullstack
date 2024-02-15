import './services.css'

const serviceLists = [
    { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/images/home/services/icon1.png" },
    { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/images/home/services/icon2.png" },
    { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering", img: "/images/home/services/icon3.png" },
    { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/images/home/services/icon4.png" },
]


const Services = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2 mt-lg-5 mt-3 w_100'>
                    <div className='text-start mb-md-4 md-3'>
                        <p className=' text-danger  fs-14 fw-semibold text-uppercase '>Our Story & Services</p>
                        <h2 className=' fw-bold fs-lg-2 fs-sm-4 w-md-25 '>Our Culinary Journey And Services</h2>
                    </div>
                    <p className='w_75 mb-md-5 md-3 mb-3'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                    <div className=' d-flex justify-content-start mt-2'>

                        <button className=' rounded-5 text-white p-2 px-5 btn__style border-0'>Explore</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6  p-lg-4 p-md-3 p-2 m-0 row d-flex flex-wrap justify-content-center w_100'>
                    {serviceLists.map((service, index) => (
                        <div key={index} className=' shadow rounded-5 col-sm-10 col-md-5 d-flex justify-content-center flex-column m-md-3 mt-3 py-md-4 py-1 _custom_style'>
                            <img src={service.img} alt={service.title} className=' mx-auto mb-3' />
                            <h5 className=' fw-semibold text-center'>{service.title}</h5>
                            <p className=' fs-14 text-center'>{service.des}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Services