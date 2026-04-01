import { TableCell, TableRow } from '@mui/material'
import SkillItem from './SkillItem'

export default function StudentRow ({ student }) {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {student.firstName}
      </TableCell>
      <TableCell align='right'>{student.lastName}</TableCell>
      <TableCell align='right'>{student.age}</TableCell>
      <TableCell align='right'>{student.title}</TableCell>
      <TableCell align='right'>{student.location}</TableCell>
      <TableCell align='right'>{student.bio}</TableCell>
      <TableCell align='right'>
        {student.skills.map(skill => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </TableCell>
    </TableRow>
  )
}
