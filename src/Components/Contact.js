import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = (props) => {
  return (
    <div className="row">
      {props.contacts.map((item) => {
        return (
          <div className="col-md-4 my-1">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <p>{item.number}</p>
                <p>{item.location}</p>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
