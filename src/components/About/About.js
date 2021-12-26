import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/Rolex-SA-Headquarters-2.webp'
const About = () => {
    return (
        <Container>
        <Row>
          <Col><img src={img} alt="" /></Col>
          <Col>There can be no watch house less in need of an introduction than Rolex. It is a brand whose name echoes beyond the boundaries of our industry. Synonymous with luxury, interchangeable with quality, imbued with a heritage that no amount of money, spin, or PR stunts can synthesize, Rolex almost occupies its own territory. Sometime during the last decade, the brand founded by a wide-eyed Hans Wilsdorf in 1905 has transmogrified. It is no longer a watch brand, but rather a phenomenon. The rules do not apply to this relentless juggernaut as it rolls over all-comers. No, when it comes to playing the game, Rolex has a distinct, insurmountable advantage: It wrote the rule book.So rolex

</Col>
        </Row>
      </Container>
    );
};

export default About;