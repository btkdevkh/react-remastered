import { Fragment } from 'react';

export default function TechList({ techs, handleDelete }) {
  return (
    // React Fragments (<></>, <Fragment></Fragment>, <React.Fragment></React.Fragment>)
    <Fragment>
      <ul>
        {/* Outputting Lists */}
        {techs.map(tech => (
          <li 
            key={tech.id}
            onClick={() => handleDelete(tech.id)}
          >
            {tech.techno.toUpperCase()}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
