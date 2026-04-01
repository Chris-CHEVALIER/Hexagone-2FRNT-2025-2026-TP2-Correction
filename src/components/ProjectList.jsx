import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectList({projects}) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project=>(
      <ProjectCard key={project.id} project={project}/>
    ))}</div>
  )
}
