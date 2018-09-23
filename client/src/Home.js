import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
    this.getProjects = this.getProjects.bind(this)
    this.getProject = this.getProject.bind(this)
  }

  componentDidMount () {
    this.getProjects()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProjects () {
    this.fetch('/api/projects')
      .then(projects => {
        if (projects.length) {
          this.setState({projects: projects})
          this.getProject(projects[0].id)
        } else {
          this.setState({projects: []})
        }
      })
  }

  getProject (id) {
    this.fetch(`/api/projects/${id}`)
      .then(project => this.setState({project: project}))
  }

  render () {
    let {projects, project} = this.state
    return projects
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            Task List
          </Header.Content>
        </Header>
        <Divider hidden section />
        {projects && projects.length
          ? <Button.Group color='teal' fluid widths={projects.length}>
            {Object.keys(projects).map((key) => {
              return <Button active={project && project.id === projects[key].id} fluid key={key} onClick={() => this.getProject(projects[key].id)}>
                {projects[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No projects found.</Container>
        }
        <Divider section />
        {project &&
          <Container>
            <Header as='h2'>{project.title}</Header>
            {project.description && <p>{project.description}</p>}
            {project.tasks &&
              <Segment.Group>
                {project.tasks.map((task, i) => <Segment key={i}>{task.description}</Segment>)}
              </Segment.Group>
            }
            {project.steps && <p>{project.steps}</p>}
            {project.source && <Button basic size='tiny' color='teal' href={project.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default Home