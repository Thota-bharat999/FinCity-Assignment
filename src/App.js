// import {Route, Switch} from 'react-router-dom'

// import Home from './components/Home'
// import NotFound from './components/NotFound'
// import TeamMatches from './components/TeamMatches'

// import './App.css'

// const App = () => (
//   <>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/team-matches/:id" component={TeamMatches} />
//       <Route component={NotFound} />
//     </Switch>
//   </>
// )

// export default App

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'

// import Appointments from './components/Appointments'
import ProjectsContext from './context'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'

import './App.css'

const projectsList = [
  {
    id: 1,
    projectName: 'Project Name',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
  },
  {
    id: 2,
    projectName: 'Project Name',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing.',
  },
]

const App = () => {
  const [projects, setProjects] = useState(projectsList)

  const onAddProjects = event => {
    const data = new FormData(event.target)
    const formDetails = Object.fromEntries(data)
    formDetails.id = uuidv4()
    // console.log(formDetails)

    setProjects(prev => [...prev, formDetails])
  }
  console.log(projects)

  return (
    <ProjectsContext.Provider value={{projects, onAddProjects}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ProjectsContext.Provider>
  )
}

export default App
