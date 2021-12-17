import { Button, Badge, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function PostCard(props) {
  const { id, name, description, price, imgUrl, category } = props;

  return (
    <Col>
      <Card className="m-2">
        <Card.Img variant="top" src={ imgUrl } />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">{ name } <Badge pill bg="secondary">{ price }</Badge></Card.Title>
          <Card.Text>{ description }</Card.Text>
          <Button className="w-100" size="sm" as={ Link } to={`/products/${id}`}>Ver más →</Button>
        </Card.Body>
        <Card.Footer className="text-muted small">{ category }</Card.Footer>
      </Card>
    </Col>
  )
}

export default PostCard
