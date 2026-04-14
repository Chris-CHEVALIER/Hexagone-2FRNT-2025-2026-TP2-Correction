import { Navigate } from 'react-router-dom'
import { useLoginStore } from '../store/useLoginStore'

export default function ProtectedRoute ({ children }) {
  const user = useLoginStore(state => state.user)

  if (!user) {
    return <Navigate to='/' />
  }

  return children
}
