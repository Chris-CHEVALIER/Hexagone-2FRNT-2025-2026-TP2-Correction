import SearchField from '../components/SearchField'
import FilterFields from '../components/FilterFields'
import StudentTable from '../components/StudentTable'
import { useState } from 'react'
import { students } from '../data/students'
import { getSkillLevels, getSkillNames } from '../services/skillsService'
import { useLoginStore } from '../store/useLoginStore'
import { useSearchStore } from '../store/useSearchStore'

export default function Students () {
  const user = useLoginStore(state => state.user)
  const search = useSearchStore(state => state.search)
  const setSearch = useSearchStore(state => state.setSearch)

  const [filters, setFilters] = useState([])

  const matchesSearch = student => {
    return (
      student.firstName.toLowerCase().includes(search.toLowerCase()) ||
      student.lastName.toLowerCase().includes(search.toLowerCase()) ||
      student.location.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Est-ce que cet étudiant correspond aux filtres sélectionnés ?
  const matchesFilters = student => {
    if (filters.length === 0) return true // S’il n’y a aucun filtre, on accepte tout le monde

    // Est-ce qu’il existe au moins une compétence de l’étudiant qui correspond à un filtre ?
    return student.skills.some(skill =>
      // Est-ce qu’il existe au moins un filtre qui correspond à cette compétence ?
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

  if (!user) {
    return <p>Vous n'avez pas accès à cette page</p>
  } else {
    return (
      <>
        <SearchField search={search} setSearch={setSearch} />
        <FilterFields
          filters={filters}
          setFilters={setFilters}
          skills={getSkillNames(students)}
          levels={getSkillLevels(students)}
        />
        <StudentTable filteredStudents={filteredStudents} />
      </>
    )
  }
}
