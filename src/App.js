import Alert from 'react-bootstrap/Alert'
import axios from 'axios'

function App() {
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
  
  return (
    <Alert variant="success" className="m-5">
  Hola mundo!
  </Alert>
  );
}

export default App;
