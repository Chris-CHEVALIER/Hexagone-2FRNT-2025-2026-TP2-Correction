export function getSkillNames (students) {
  let skillNames = []
  students.forEach(student => {
    student.skills.forEach(skill => {
      skillNames.push(skill.name)
    })
  })
  return skillNames
}

export function getSkillLevels (students) {
  let skillLevels = []
  students.forEach(student => {
    student.skills.forEach(skill => {
      skillLevels.push(skill.level)
    })
  })
  return skillLevels
}

export function getStarsFromLevel (level) {
  let stars = ''
  switch (level) {
    case 'beginner':
      stars = '⭐'
      break
    case 'intermediate':
      stars = '⭐⭐'
      break
    case 'advanced':
      stars = '⭐⭐⭐'
      break
    default:
      stars = 'gros NULL'
      break
  }
  return stars
}
