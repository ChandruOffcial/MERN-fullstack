import { useState, } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./signup.css"
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";



function FormExample() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const inputElement = document.getElementById('validationCustom02'); // Assuming the input has an id of 'validationCustom03'        
        if (inputElement.checkValidity()) {
            const { name, email, password } = data
            try {
                if (!name || !email || !password) {
                    console.log('Fill all')
                }
                const { data } = await axios.post('/register', {
                    name, email, password
                })

                if (data.error) {
                    toast.error(data.error)
                } else {
                    toast.success(data.success)
                    navigate("/")
                }

            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <div className=' d-flex justify-content-center align-items-center form p-3'>
            <div className=' sign_up'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className='p-md-3 fs-6'
                                required
                                type="text"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02" className='mb-3'>
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

                        <Form.Group as={Col} md="12" controlId="validationCustom03" className='mb-md-4 '>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className='p-md-3  pb-2 fs-6'
                                required
                                type="Password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit" className='w-100 p-md-3 submit__btn border-0 mb-3'>Submit form</Button>
                    <p className=' text-center mb-2'>New here? <Link to='/' className=' fw-bold text-black'>Home</Link> </p>
                    <p className=' text-center mb-3'>Or sign in with</p>
                    <div className=' d-flex justify-content-center align-items-center gap-3'>
                        <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaGoogle /></button>
                        <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaFacebook /></button>
                        <button className=' d-flex justify-content-center align-items-center rounded-circle  link_btn'><FaGithub /></button>
                    </div>

                </Form>
            </div>
        </div>
    );
}

export default FormExample;