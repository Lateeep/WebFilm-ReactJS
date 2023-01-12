import { Button, Col, Container, Row } from 'react-bootstrap';


const intro = () => {
    return (
        <div className='intro'>
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className='title'>TEMPAT NONTON FILM</div>
                        <div className='title'>TANPA RIBET</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default intro
