import { TextField } from '@mui/material'

export default function SearchField ({ search, setSearch }) {
  return (
    <TextField
      type='search'
      name='search'
      id='search'
      label='Rechercher'
      placeholder='Recherchez un étudiant'
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  )
}
