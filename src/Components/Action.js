import { Card, Col, Container, Row, Image } from "react-bootstrap"
import diehardImage from "../assets/Action/Diehard.jpg"
import headshotImage from "../assets/Action/Headshot.jpg"
import madmaxImage from "../assets/Action/Mad Max.jpg"
import matrixImage from "../assets/Action/Matrix.jpg"
import mile22Image from "../assets/Action/Mile 22.jpg"
import monsterhunterImage from "../assets/Action/MonsterHunter.jpg"


const Action = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="action">ACTION MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={diehardImage}
                                alt="DieHard Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">DIE HARD</Card.Title>
                            <Card.Text className="text-center">
                                Action, Thriller
                            </Card.Text>
                            <Card.Text className="text-center">2h 12m</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={headshotImage}
                                alt="Headshot Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">HEADSHOT</Card.Title>
                            <Card.Text className="text-center">
                                Action, Drama, Thriller
                            </Card.Text>
                            <Card.Text className="text-center">1h 58m</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={madmaxImage}
                                alt="Madmax Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">MAD MAX: FURY ROAD</Card.Title>
                            <Card.Text className="text-center">
                                Action, Adventure, Sci-Fi
                            </Card.Text>
                            <Card.Text className="text-center">2h</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={matrixImage}
                                alt="Matrix Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">THE MATRIX</Card.Title>
                            <Card.Text className="text-center">
                                Action, Sci-Fi
                            </Card.Text>
                            <Card.Text className="text-center">2h 16m</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={mile22Image}
                                alt="Mile22 Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">MILE 22</Card.Title>
                            <Card.Text className="text-center">
                                Action, Thriller
                            </Card.Text>
                            <Card.Text className="text-center">1h 34m</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={monsterhunterImage}
                                alt="Monsterhunter Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">MONSTER HUNTER</Card.Title>
                            <Card.Text className="text-center">
                                Action, Adventure, Fantasy
                            </Card.Text>
                            <Card.Text className="text-center">1h 43m</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Action