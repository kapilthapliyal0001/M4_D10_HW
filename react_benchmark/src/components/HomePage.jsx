import {Component} from "react";
import {Col, Container, Form, Row, Button, Card} from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends Component {
  state = {
    searchQuery: null,
    selectedMovie: null,
    movieArray: [],
  };

  componentDidMount = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${
        this.state.se ? this.state.searchQuery : "Harry"
      }`
    ).then((file) => file.json());

    console.log(response);
    this.setState({movieArray: response.data});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <Form>
                  <Form.Label className="m-2">Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Movie"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({searchQuery: e.target.value})
                    }
                  />
                  {/* <Button variant="primary" type="submit">
                    Submit
                  </Button> */}
                </Form>
              </Col>
            </Row>
            <Row className="d-flex">
              {this.state.movieArray.map((m) => (
                <Col className="d-flex flex-wrap m-2" lg={3} key={m.id}>
                  <SingleMovie movie={m} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
