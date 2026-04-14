import { useLoginStore } from '../store/useLoginStore'

export default function Login () {
  const login = useLoginStore(state => state.login)

  const handleLogin = () => {
    login({
      firstName: 'Chris',
      lastName: 'Chevalier',
      email: 'chris.chevalier@ecole-hexagone.com',
      role: 'student'
    })
  }

  return <button onClick={handleLogin}>Se connecter</button>
}
