import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TravelCard(props){
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.desc}
            </Card.Text>
            <Button href={props.link} variant="primary">Document!</Button>
          </Card.Body>
        </Card>
      );
}
    