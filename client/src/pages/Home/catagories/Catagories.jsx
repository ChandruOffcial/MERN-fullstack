import './catagories.css'

export const Catagories = () => {
    const catagoryItems = [
        { id: 1, dishname: "Main Dish", dishDesc: "(86 dishes)", img: "/images/home/category/img1.png" },
        { id: 2, dishname: "Break Fast", dishDesc: "(12 Break Fast)", img: "/images/home/category/img2.png" },
        { id: 3, dishname: "Dessert", dishDesc: "(7 Dessert)", img: "/images/home/category/img3.png" },
        { id: 4, dishname: "Browse All", dishDesc: "(225 items)", img: "/images/home/category/img4.png" },
    ]
    return (
        <>
            <div className='container-md mt-4 mb-5 pb-4'>
                <div className='text-center mb-5'>
                    <p className=' text-danger  fs-14 fw-semibold text-uppercase'>Customer Favorites</p>
                    <h2 className=' fw-bold fs-lg-2 fs-sm-4'>Popular Catagories</h2>
                </div>
                <div className='mt-5 d-flex flex-column flex-wrap flex-md-row gap-5 justify-content-around align-items-center'>
                    {catagoryItems.map((item, index) => (
                        <div key={index} className=' p-5 pt-4 pb-2 rounded-5 shadow hover__style'>
                            <div className=' rounded-circle img__style d-flex justify-content-between align-items-center'>
                                <img src={item.img} alt={item.dishname} className='w-100 rounded-circle custom__style' />
                            </div>
                            <div className='text-center'>
                                <h5 className=' fw-bold mt-2 mb-0'>{item.dishname}</h5>
                                <p className='fs_custom'>{item.dishDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
