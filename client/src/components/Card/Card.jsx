import { Link } from 'react-router-dom';
import './card.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";



const Card = ({ item }) => {
    const [itsFillHeart, setItsFillHeart] = useState(false)

    const handleHeart = () => {
        setItsFillHeart(!itsFillHeart)

    }
    return (
        <>
            <div className="card m-lg-2 m-md-2 shadow rounded-5 p-3 position-relative">
                <div className=' position-absolute heart__style__container ' onClick={handleHeart}>


                    {itsFillHeart ? (<FaHeart className=' heart__style' />) : (<FaRegHeart className=' heart__style' />)}
                </div>
                <div className=''>
                    <Link to={`/menu/${item._id}`} className={`d-flex justify-content-center align-items-center`}>
                        <img src={item.image} className="card-img-top w-50 mx-auto mt-5 hover__effect mb-3" alt="..." />
                    </Link>

                    <div className="card-body mb-5 ">
                        <Link to={`/menu/${item._id}`}>
                            <h5 className="card-title fw-bold text-black">{item.name}</h5>
                        </Link>
                        <p className="card-text">{item.recipe}</p>
                        <div className='aligin__footer'>
                            <div className=' d-flex justify-content-between align-items-center'>
                                <h5><span className=' text-danger'>$</span><span>{item.price}</span></h5>
                                <a href="#" className="btn btn-success">Add To Order</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
Card.propTypes = {
    item: PropTypes.object.isRequired
};
export default Card