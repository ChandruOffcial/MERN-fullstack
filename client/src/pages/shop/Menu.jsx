import { useEffect } from "react"
import Card from "../../components/Card/Card"
import { useState } from "react"
import './menu.css'
import { FaFilter } from "react-icons/fa";


const Menu = () => {
    const [menu, setMenu] = useState([])
    const [filterItem, setFilterItem] = useState([])
    const [selectedCatagory, setSelectedCatagory] = useState('all')
    const [sortOption, setSortOption] = useState('default')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage] = useState(8)

    //loadiing Data
    useEffect(() => {
        const fetchData = async () => {

            fetch("http://localhost:8000/menu")
                .then(response => response.json())
                .then(data => {
                    setMenu(data)
                    setFilterItem(data)
                })
                .catch(error => {
                    console.log(error);
                });
        };

        fetchData();
    }, []);

    // Fliter data
    const filteredItem = (category) => {
        const filterItem = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilterItem(filterItem)
        setSelectedCatagory(category)
        setCurrentPage(1)

    }

    // show All data 
    const showAll = () => {
        setFilterItem(menu)
        setSelectedCatagory("all")
        setCurrentPage(1)
    }

    //sorting 
    const handleSort = (option) => {
        setSortOption(option)

        let sortedItem = [...filterItem]

        switch (option) {
            case "A-Z":
                sortedItem.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedItem.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "low-to-high":
                sortedItem.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItem.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }

        setFilterItem(sortedItem)
        setCurrentPage(1)
    }

    //Paginate

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = filterItem.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className='bg-body-tertiary position-relative mt-5 pb-5'>
                {/* Banner */}
                <div className='container'>
                    <div className="row flex-sm-row-reverse">
                        <div className="col-md text-center mt-lg-5 mt-3">
                            <div className='py-md-4 py-2 position-relative top-10  ms-lg-5 mt-lg-4'>
                                <h2 className='Banner__title pt-md-1 pb-md-5 pb-3'>Dive into Delights Of Delectable<span className='highlight'>Food</span></h2>
                                <p className='fw-medium pb-md-4 pb-3 pb-md-5 pb-2' >Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                                <div className=' mb-3'>
                                    <button className='btn btn-success me-3 rounded-pill order__btn mb-2 px-5 py-3 shadow fs-5 fw-semibold'>Order Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Menu Shop  */}
                <div className=" container mt-4 p-2">
                    {/* Catgory Section */}
                    <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap">
                        {/*  Button */}
                        <div className=" d-flex gap-3  mb-3 mt-3 flex-wrap" style={{ cursor: "pointer" }}>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "all" ? "style__active" : ""}`} onClick={() => showAll()}>All</button>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "salad" ? "style__active" : ""}`} onClick={() => filteredItem("salad")}>Salad</button>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "pizza" ? "style__active" : ""}`} onClick={() => filteredItem("pizza")}>Pizza</button>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "soup" ? "style__active" : ""}`} onClick={() => filteredItem("soup")}>Soups</button>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "dessert" ? "style__active" : ""}`} onClick={() => filteredItem("dessert")}>Desserts</button>
                            <button className={`border-0 btn-outline-white bg-transparent fw-semibold ${selectedCatagory === "drinks" ? "style__active" : ""}`} onClick={() => filteredItem("drinks")}>Drinks</button>
                        </div>

                        {/* Sorting Section */}
                        <div className=" d-flex gap-2 mb-3">
                            <div><FaFilter /></div>
                            <div>
                                <select name="sort" id="sort"
                                    onChange={(e) => { handleSort(e.target.value) }}
                                    value={sortOption}
                                >
                                    <option value="default">Default</option>
                                    <option value="A-Z">Sort A-Z</option>
                                    <option value="Z-A">Sort Z-A</option>
                                    <option value="low-to-high">Sort Low to High</option>
                                    <option value="high-to-low">Sort High to Low</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* Production Card Section */}

                    <div className="row row-gap-4">
                        {currentItem.map((item) => (
                            <div key={item._id} className=" col-lg-4 col-md-6 col-sm-12">
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}

                    <div className=" d-flex justify-content-center align-items-center gap-1">
                        {
                            Array.from({ length: Math.ceil(filterItem.length / itemPerPage) }).map((_, index) => (
                                <button key={index + 1} className={`mt-4 rounded-circle custom__btn ${currentPage === index + 1 ? "activing" : ""}`} onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>

                            ))
                        }
                    </div>


                </div>
            </section >
        </>
    )
}

export default Menu