import './Bodycover.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
function Bodycover(){
    return (
    <div className='cardholder'>
        <div className='banner'>
            <h2> Featured </h2>
        </div>
    <CardGroup >
      <Card className='cardbody'>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/627290560/photo/professional-doctor-preparing-patient-for-procedure.jpg?b=1&s=612x612&w=0&k=20&c=EV-qyUzhRAg9ZUPiGvNebqM7Lr8Cw1SU2BMZHlpbcyY=" />
        <Card.Body className='cardbody'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardbody'>
        <Card.Img variant="top" src="med.jpeg" />
        <Card.Body className='cardbody'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.This card has even longer content than{' '}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardbody' >
        <Card.Img variant="top" src="ist4p.jpeg" />
        <Card.Body className='cardbody'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            height action.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    )
}
export default Bodycover;