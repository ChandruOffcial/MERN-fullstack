import './card.css'
import PropTypes from 'prop-types';


const Card = ({ item }) => {
    return (
        <>
            <div className="card" >
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.recipe}</p>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <h5><span>$</span><span>{item.price}</span></h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
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