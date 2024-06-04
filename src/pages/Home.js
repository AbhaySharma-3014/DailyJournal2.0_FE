import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Base from "../components/Base";
import CategorySideMenu from "../components/CategorySideMenu";
import NewFeed from "../components/NewFeed";

const Home = () => {
  return (
    <Base style={{background: 'linear-gradient(to right, #f8cdda, #1d2b64)'}}>
      <Container className="mt-3" style={{ height: '100vh'}}>
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={10}>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
