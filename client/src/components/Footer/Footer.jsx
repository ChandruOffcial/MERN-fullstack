
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted container'>


            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <img src="/logo.png" alt="logo" className='mb-md-4 m-2' />
                            <p>
                                Savor the artistry where every dish is a culinary masterpiece
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Events
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Blogs
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQ
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Main Menu</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Offers
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Menus
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Reservation
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4'>
                <MDBIcon fab icon="facebook" />
                © 2021 Copyright:
                <a className='text-reset fw-bold' >
                    Mr.Smile
                </a>
            </div>
        </MDBFooter>
    );
}