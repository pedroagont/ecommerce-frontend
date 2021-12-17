import NavigationBar from '../components/NavigationBar'
import { useAuth } from  '../contexts/AuthContext'

async function Login() {
  const { login } = useAuth();
  console.log(await login('user4@email.com', 'abc1234!'))

  return (
    <>
      <NavigationBar />
      <h1>LOGIN</h1>
    </>
  )
}

export default Login
