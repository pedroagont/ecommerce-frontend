import NavigationBar from '../components/NavigationBar'
import { useAuth } from  '../contexts/AuthContext'

function Register() {
  const { register } = useAuth();
  console.log(register('user4@email.com', 'abc1234!'))

  return (
    <>
      <NavigationBar />
      <h1>REGISTER</h1>
    </>
  )
}

export default Register
