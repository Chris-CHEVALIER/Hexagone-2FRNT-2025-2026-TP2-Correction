import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper
} from '@mui/material'
import StudentRow from './StudentRow'

export default function StudentTable ({ filteredStudents }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Prénom</TableCell>
            <TableCell align='right'>Nom</TableCell>
            <TableCell align='right'>Âge</TableCell>
            <TableCell align='right'>Titre</TableCell>
            <TableCell align='right'>Localisation</TableCell>
            <TableCell align='right'>Bio</TableCell>
            <TableCell align='right'>Compétences</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStudents.map(student => (
            <StudentRow key={student.id} student={student} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
