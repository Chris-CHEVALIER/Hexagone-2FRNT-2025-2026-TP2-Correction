import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { getStarsFromLevel } from '../services/skillsService'

export default function FilterFields ({ skills, levels, filters, setFilters }) {
  const handleChange = e => {
    if (filters.includes(e.target.name)) {
      const newFilters = filters.filter(filter => e.target.name !== filter)
      setFilters(newFilters)
    } else {
      setFilters([...filters, e.target.name])
    }
  }

  return (
    <>
      <h3>Compétences</h3>
      <FormGroup>
        {skills.map(skill => (
          <FormControlLabel
            key={skill}
            control={<Checkbox />}
            label={skill}
            name={skill}
            id={skill}
            onChange={handleChange}
          />
        ))}

        <h3>Niveaux</h3>
        {levels.map(level => (
          <FormControlLabel
            key={level}
            control={<Checkbox />}
            label={getStarsFromLevel(level)}
            name={level}
            id={level}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
    </>
  )
}
