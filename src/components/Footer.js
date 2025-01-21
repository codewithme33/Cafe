import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"

export default function Footer (){

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Opening Hours</h1>
                </Col>
                <Col>
                    <h1>Locations</h1>
                </Col>
                <Col>
                    <h1>Contacts</h1>
                </Col>
            </Row>
        </Container>
    );
}