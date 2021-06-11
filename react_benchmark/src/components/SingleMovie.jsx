import React from "react";
import {Card} from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    status: null,
  };

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.movie.album.cover_medium} />
        <Card.Body>
          <Card.Title style={{color: "black"}}>
            {this.props.movie.album.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleMovie;
