import { Link } from 'react-router-dom'
import { useLoginStore } from '../store/useLoginStore'

export default function Navbar () {
  const user = useLoginStore(state => state.user)
  const logout = useLoginStore(state => state.logout)

  return (
    <nav>
      <Link to='/'>Accueil</Link>
      {!user ? (
        <Link to='/login'>Login</Link>
      ) : (
        <Link onClick={logout}>Logout</Link>
      )}
      <Link to='/students'>Nos étudiants</Link>

      {user ? (
        <p>
          {' '}
          Bienvenue {user.firstName} {user.lastName} !
        </p>
      ) : (
        <p> Vous n'êtes pas connecté </p>
      )}
    </nav>
  )
}
