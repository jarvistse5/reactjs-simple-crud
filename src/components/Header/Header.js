import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Simple CRUD demo</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
  
export default Header;