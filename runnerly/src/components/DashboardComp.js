import React, { useState } from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const DashboardComp = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassSelect = (selected) => {
    setSelectedClass(selected);
  };

  return (
    <Container>
      <h1>Dashboard</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Beginner Class</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button
                variant={selectedClass === 'beginner' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('beginner')}
              >
                {selectedClass === 'beginner' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Intermediate Class</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button
                variant={selectedClass === 'intermediate' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('intermediate')}
              >
                {selectedClass === 'intermediate' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Advance Class</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button
                variant={selectedClass === 'advance' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('advance')}
              >
                {selectedClass === 'advance' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardComp;
