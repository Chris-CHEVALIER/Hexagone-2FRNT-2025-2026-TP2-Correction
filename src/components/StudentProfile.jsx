import React from 'react'

export default function StudentProfile({student}) {
  return (
    <div>
      <h1>{student.firstName} {student.lastName}</h1>
      <p>{student.age} ans.</p>
      <strong>Je recherche le poste de {student.title}.</strong>
      <p>{student.location}</p>
      <p>{student.bio}</p>
    </div>
  )
}
