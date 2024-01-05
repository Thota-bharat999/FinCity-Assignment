import './index.css'

const Project = props => {
  const {projectDetails} = props
  const {description, projectName} = projectDetails
  return (
    <li className="project-container">
      <div className="project-details-container">
        <h1 className="name">{projectName}</h1>
        <p className="pro-description">{description}</p>
        <button type="button" className="project-button">
          View Project
        </button>
      </div>
      <img
        src="https://i.ibb.co/6sCfHvm/pexels-elly-fairytale-3823207-1.png" alt="pexels-elly-fairytale-3823207-1"
        alt={projectName}
        className="project-image"
      />
    </li>
  )
}
export default Project
