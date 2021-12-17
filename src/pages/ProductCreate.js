import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext';
import NavigationBar from '../components/NavigationBar';

function NewPost() {
  const productName = useRef();
  const productDescription = useRef();
  const productPrice = useRef();
  const productCategory = useRef();
  const formRef = useRef();

  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState('');

  const { token } = useAuth();

  function handleReset() {
    formRef.current.reset();
  }

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      
      console.log(headers)

      const data = {
        name: productName.current.value,
        description: productDescription.current.value,
        price: productPrice.current.value,
        category: productCategory.current.value
      }
      
      console.log(data)
      
      const URL_PRODUCTS_API = 'https://ecommerce-backend-g7.herokuapp.com/api/v1/products';
      const productCreated = await axios.post(URL_PRODUCTS_API, data, { headers })
      console.log(productCreated)
      
      formRef.current.reset();

      setLoading(false);
      setMessage('Post publicado!');
    } catch (e) {
      setError('Error al crear post: ' + e.stack)
      setLoading(false)
    }
  }

  return (
    <div style={{ marginBottom: '10em' }}>
      <NavigationBar />
      <Card className="w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className="display-4 text-center my-3">Nuevo Post</h1>
          { error && <Alert variant="danger">{ error }</Alert> }
          { message && <Alert variant="success">{ message }</Alert> }
          <Form onSubmit={ handleSubmit } ref={ formRef }>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control ref={ productName } type="text" placeholder="Escribe aquí el nombre del producto" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control ref={ productDescription } as="textarea" rows={4} placeholder="Escribe aquí una descripción de tu producto" autoComplete="off" required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Control ref={ productPrice } type="text" placeholder="990.90" autoComplete="off" required />
            </Form.Group>

            <Form.Select ref={ productCategory } className="mb-3" aria-label="Categoría" defaultValue="">
              <option value="">Categoría</option>
              <option value="women">👩🏻‍💼 Dama</option>
              <option value="men">👨🏻‍💼 Caballero</option>
              <option value="kids">👧🏻 Niñxs</option>
              <option value="accesories">⌚️ Accesorios</option>
            </Form.Select>

            <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
              Publicar
            </Button>
            <Button onClick={handleReset } className="w-100 my-2" variant="secondary">
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewPost;
