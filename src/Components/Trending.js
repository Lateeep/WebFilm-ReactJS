import { Card, Col, Container, Row, Image, Button } from "react-bootstrap"
import avatarImage from "../assets/Trending/Avatar.jpg"
import fast9Image from "../assets/Trending/Fast9.jpg"
import m3ganImage from "../assets/Trending/M3gan.jpg"
import venomImage from "../assets/Trending/Venom.jpg"
import theraidImage from "../assets/Trending/theraid.jpg"
import avengerImage from "../assets/Trending/Avenger.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="trending">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={avatarImage}
                                alt="Avatar Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">AVATAR: THE WAY OF WATER</Card.Title>
                            <Card.Text className="text-center">
                                Action, Adventure, Fantasy
                            </Card.Text>
                            <Card.Text className="text-center">3h 12m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=d9MyW72ELq0">Watch Trailer</Button>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={fast9Image}
                                alt="F9 Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">F9: THE FAST SAGA</Card.Title>
                            <Card.Text className="text-center">
                                Action, Thriller, Crime
                            </Card.Text>
                            <Card.Text className="text-center">2h 23m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=aSiDu3Ywi8E">Watch Trailer</Button>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={m3ganImage}
                                alt="M3gan Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">M3GAN</Card.Title>
                            <Card.Text className="text-center">
                                Horror, Sci-Fi, Thriller
                            </Card.Text>
                            <Card.Text className="text-center">1h 42m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=BRb4U99OU80">Watch Trailer</Button>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={venomImage}
                                alt="Venom Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">VENOM: LET THERE BE CARNAGE</Card.Title>
                            <Card.Text className="text-center">
                                Action, Adventure, Sci-Fi
                            </Card.Text>
                            <Card.Text className="text-center">1h 37m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=-FmWuCgJmxo">Watch Trailer</Button>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={theraidImage}
                                alt="Theraid Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">THE RAID: REDEMPTION</Card.Title>
                            <Card.Text className="text-center">
                                Action, Crime, Thriller
                            </Card.Text>
                            <Card.Text className="text-center">1h 41m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=m6Q7KnXpNOg">Watch Trailer</Button>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-light movieImages">
                            <Image
                                src={avengerImage}
                                alt="Avenger Movie"
                                className="Poster"
                            />
                            <Card.Title className="text-center">AVENGERS: INFINITY WAR</Card.Title>
                            <Card.Text className="text-center">
                                Action, Adventure, Sci-Fi
                            </Card.Text>
                            <Card.Text className="text-center">2h 29m</Card.Text>
                            <Button a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8">Watch Trailer</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending
