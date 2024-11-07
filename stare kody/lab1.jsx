// src/App.jsx
import React from 'react';
import { Navbar, Container, Nav, Carousel, Card, Button } from 'react-bootstrap';


function App() {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">My Cat Gallery</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="/To-Do_List">To-Do List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Slider */}
            <Carousel className="my-4">
                <Carousel.Item>
                    <img className="d-block w-100" src="https://cataas.com/cat?width=800&height=300" alt="Cat 1" />
                    <Carousel.Caption>
                        <h3>Jestem kotem jeden</h3>
                        <p>To jest zdjecie pierwszego kota</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://cataas.com/cat?width=801&height=300" alt="Cat 2" />
                    <Carousel.Caption>
                        <h3>Jestem kotem dwa</h3>
                        <p>To jest zdjecie drugiego kota</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://cataas.com/cat?width=802&height=300" alt="Cat 3" />
                    <Carousel.Caption>
                        <h3>Jestem kotem trzy</h3>
                        <p>To jest zdjecie trzeciego kota</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Card */}
            <Container className="my-4">
                <Card style={{ width: '18rem' }} className="mx-auto">
                    <Card.Img variant="top" src="https://cataas.com/cat?width=400&height=200" />
                    <Card.Body>
                        <Card.Title>Adorable Cat</Card.Title>
                        <Card.Text>
                            This cat is looking for a home! Adopt today and give this cute friend a loving family.
                        </Card.Text>
                        <Button variant="primary">Adopt Now</Button>
                    </Card.Body>
                </Card>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>&copy; 2023 My Cat Gallery | All Rights Reserved</p>
                </Container>
            </footer>
        </div>
    );
}

export default App;

