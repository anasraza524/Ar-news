import './PostBody.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from "react";
function NavBar(defaultExpanded) {
const [query, setquery] = useState([])

const getNews =(e)=>{
  e.preventDefault();
  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: query, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'a6520c8da0msh46150d8e072a35bp1388d1jsn92387066c6e9',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    
  }).catch(function (error) {
    console.error(error);
  });
}


  return (
    <>
    <Navbar bg="light" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#">Ar News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Politics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              War
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Education
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Economy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
              Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
              Sport
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#action2">About</Nav.Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{
                setquery(e.target.value)
              }}
              
            />
            <Button onClick={getNews} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
</>
  );
}

export default NavBar;