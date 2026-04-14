import { useParams } from 'react-router-dom'

export default function StudentDetail () {
  const { id } = useParams()
  return <div>Détails de l'étudiant {id}</div>
}
