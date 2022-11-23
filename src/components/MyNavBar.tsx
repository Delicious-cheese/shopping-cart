import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../assets/tao.png'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import { useShoppingContext } from '../context/ShoppingContext'
import MyOffCanvas from './MyOffCanvas';


const MyNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getTotalCount } = useShoppingContext()

    return (
        <div>
            <Navbar bg="light" style={{ height: '60px', position: 'relative' }}>
                <Container>
                    <Navbar.Brand>
                        <img src={imgLogo} height="30" alt="" />
                    </Navbar.Brand>
                    {/* <Nav className="me-auto"> 靠左 */}
                    <Nav>
                        <Nav.Link to='/clothes' as={NavLink} >衣服</Nav.Link>
                        <Nav.Link to='/electronic' as={NavLink}>电器</Nav.Link>
                        <Nav.Link to='/gift' as={NavLink}>纪念品</Nav.Link>
                    </Nav>
                    <Button
                        variant="outline-warning"
                        className='rounded-circle d-flex justify-content-center align-items-center'
                        style={{ height: '34px', width: '34px', position: 'relative' }}
                        onClick={handleShow}
                    >
                        {/* <img src="src/assets/car.png" height="23" alt="" /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                        >
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '20px', width: '20px', position: 'absolute', right: '-10px', bottom: '-5px', backgroundColor: 'red', borderRadius: '50%', color: 'white', overflow: ' hidden', textOverflow: 'ellipsis' }}
                        >
                            {getTotalCount()}
                        </div>
                    </Button>
                </Container>
            </Navbar >
            <MyOffCanvas show={show} onHide={handleClose} />
            {/* <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='d-flex align-items-center'>
                        购物车
                        <img src="src/assets/trash.png" width="20" height="20" alt="" style={{ marginLeft: '10px', cursor: ' pointer' }} onClick={clearCar} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        carItems.map(item => {
                            const { id, type, count } = item
                            const res = data[type as keyof typeof data].find(item => item.id === id)
                            return (
                                count > 0 &&
                                (
                                    <div key={id} className="d-flex justify-content-between mb-3">
                                        <div>
                                            <img src={res?.imgUrl} height="50" width="50" alt="" className='p-1' style={{ boxSizing: 'content-box', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }} />
                                            <span>{res?.name}</span>
                                        </div>

                                        <div>
                                            <div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <Button onClick={() => subGood(id)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '19px', height: '19px', marginRight: '7px' }} >
                                                        <span style={{ fontSize: '16px' }}>-</span>
                                                    </Button>
                                                    <span>数量{getCurcentCount(id)}</span>
                                                    <Button onClick={() => addGood(id, type)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '19px', height: '19px', marginLeft: '7px' }} >
                                                        <span style={{ fontSize: '16px' }}>+</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='text-muted' style={{ fontSize: '.8rem', marginTop: '7px' }}>价格</div>
                                        </div>
                                    </div>
                                )
                            )
                        })
                    }
                    {
                        getTotalCount() > 0 && <div className='ms-auto' style={{ width: '130px' }}>
                            总计
                        </div>
                    }
                </Offcanvas.Body>
            </Offcanvas> */}
        </div>
    )
}

export default MyNavBar