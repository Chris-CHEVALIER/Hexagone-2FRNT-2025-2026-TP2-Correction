import React from 'react'
import { getStarsFromLevel } from '../services/skillsService'

export default function SkillItem ({ skill }) {
  const stars = getStarsFromLevel(skill.level)
  return (
    <div>
      <p>
        {skill.name}: {stars}
      </p>
    </div>
  )
}
