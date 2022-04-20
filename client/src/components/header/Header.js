import React from 'react'
import NavBar from '../navbar/NavBar';
import {Container, FormControl, Button} from 'react-bootstrap'
import './Style.css';

export default function Header({products}) {
    return (
        <>
            <div className="topBar">
                <Container className="d-flex justify-content-between align-items-center w-100">
                    <div className="SubTitle">ARTGRI.IO </div>
                    <div className="IconClass">
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="icon_link" href="https://www.facebook.com/Buithanh.2422"><i className="fab fa-facebook"></i></a>
                            <a className="icon_link" href="mailto:thanh@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a className="icon_link" href="https://www.linkedin.com/in/quang-v%C5%A9-l%C6%B0u-c%C3%B4ng-973305171/"><i className="fab fa-linkedin"></i></a>
                            <a className="icon_link" href="https://www.instagram.com/trust.for.me/"><i className=" fab fa-instagram"></i></a>
                        </div>
                    </div>

                </Container>
            </div>
            <div>
                <Container className="d-flex justify-content-between align-items-center centerBar w-100">
                    
                    <div className="gps-bar" style={{display: 'flex'}}>
                        {/* <div className="d-flex justify-content-center align-items-center">
                            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/05/x-1.png" alt="gps" width='36' height='34'/>
                            <div className="gps-font">Đại học Công Nghiệp Hà Nội, Bắc Từ Liêm, Hà Nội</div>
                        </div> */}
                        <FormControl
                            type="text"
                            placeholder="Tìm kiếm..."
                            style={{ width: "1050px",height: "40px",marginLeft: "30px" }}
                            className="mr-sm-2"
                            size="sm"
                            />
                            <Button style={{ width: "50px",height: "40px" }} variant="outline-success" className="font-custom" size="sm">
                            <i className="fas fa-search"></i>
                            </Button>
                    </div>
                   
                </Container>
            </div>
            
        </>            
    )
}
