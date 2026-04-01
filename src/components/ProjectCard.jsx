import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div>
      
      <h3>{project.name}</h3>
      <p>{project.tech}</p>
      <p>{project.description}</p>
    </div>
  )
}
