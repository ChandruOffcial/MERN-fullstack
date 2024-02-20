import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaFacebook, FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './model.css'
import { Link, useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "../../../context/UserContext.jsx"


function Example() {

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    useContext(UserContext);



    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const inputElement = document.getElementById('validationCustom02');
        if (inputElement.checkValidity()) {
            const { email, password } = data;
            try {
                const { data } = await axios.post('/login', {
                    email, password
                });
                if (data.error) {
                    toast.error(data.error)
                } else {
                    toast.success(data.success)

                    handleClose()
                    navigate(from, { replace: true })

                }

            } catch (error) {
                console.log(error)
            }
        }
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-outline-success d-flex align-items-center gap-3" onClick={handleShow}><FaUser />Login</button>


            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body className=' p-md-5 p-2'>
                    <h5 className='mb-3 fw-bold fs-4'>Login!</h5>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className='p-md-3 fs-6'
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02" className='mb-md-4 '>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className='p-md-3  pb-2 fs-6'
                                    required
                                    type="Password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                                />
                                <p className='mt-2 fs-14 forgot__pass'>Forgot Password</p>
                            </Form.Group>
                        </Row>
                        <Button type="submit" className='w-100 p-md-3 submit__btn border-0 mb-3'>Submit form</Button>
                        <p className=' text-center mb-2'>New here? <Link to='/signup' className=' fw-bold text-black'>Create a New Account</Link> </p>
                        <p className=' text-center mb-3'>Or sign in with</p>
                        <div className=' d-flex justify-content-center align-items-center gap-3'>
                            <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaGoogle /></button>
                            <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaFacebook /></button>
                            <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaGithub /></button>
                        </div>
                        <div>

                        </div>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Example;
