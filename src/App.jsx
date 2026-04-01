import { useState } from 'react'
import StudentTable from './components/StudentTable'
import SearchField from './components/SearchField'
import FilterFields from './components/FilterFields'
import { students } from './data/students'
import { getSkillLevels, getSkillNames } from './services/skillsService'

export default function App () {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState([])

  const matchesSearch = student => {
    return (
      student.firstName.toLowerCase().includes(search.toLowerCase()) ||
      student.lastName.toLowerCase().includes(search.toLowerCase()) ||
      student.location.toLowerCase().includes(search.toLowerCase())
    )
  }

  const matchesFilters = student => {
    if (filters.length === 0) return true
    return student.skills.some(skill =>
      filters.some(filter => {
        const matchName = filter
          ? skill.name.toLowerCase() === filter.toLowerCase()
          : true

        const matchLevel = filter
          ? skill.level.toLowerCase() === filter.toLowerCase()
          : true
        return matchName || matchLevel
      })
    )
  }

  const filteredStudents = students.filter(
    student =>
      matchesSearch(student, search) && matchesFilters(student, filters)
  )

  return (
    <main>
      <h1>CVthèque</h1>
      <SearchField search={search} setSearch={setSearch} />
      <FilterFields
        filters={filters}
        setFilters={setFilters}
        skills={getSkillNames(students)}
        levels={getSkillLevels(students)}
      />
      <StudentTable filteredStudents={filteredStudents} />
    </main>
  )
}
