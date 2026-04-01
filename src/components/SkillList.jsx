import React from 'react'
import SkillItem from './SkillItem'

export default function SkillList({ skills }) {
  return (
    <div>
      <h2>Compétences</h2>
      {skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  )
}
