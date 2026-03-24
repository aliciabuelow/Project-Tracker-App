import { useState } from 'react';
import NewProjectForm from './components/NewProjectForm';
import ProjectList from './components/ProjectList';

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Update project section and improve layout.',
      tasks: [
        { id: 1, text: 'Rewrite hero text', completed: false },
        { id: 2, text: 'Add AI Travel App', completed: true },
      ]
    },
    {
      id: 2,
      title: 'Project Tracker App',
      description: 'Build v1 of the tracker app in React.',
      tasks: [
        { id: 1, text: 'Set up project files', completed: true },
        { id: 2, text: 'Create components', completed: false },
      ],
    },
  ]);

  function addProject(title, description) {
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
      tasks: [],
    };
    setProjects([...projects, newProject]);
  }

  return (
    <div>
      <h1>Project Tracker</h1>
      <NewProjectForm onAddProject={addProject} />
      <ProjectList projects={projects} />
    </div>
  )
}