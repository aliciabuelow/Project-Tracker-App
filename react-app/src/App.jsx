import { useState, useEffect } from 'react';
import NewProjectForm from './components/NewProjectForm';
import ProjectList from './components/ProjectList';
import './styles/App.css';

export default function App() {
  const [projects, setProjects] = useState(() => {
  const savedProjects = localStorage.getItem('projects');

  if (savedProjects) {
    return JSON.parse(savedProjects);
  }

  return [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Update project section and improve layout.',
      tasks: [
        { id: 1, text: 'Rewrite hero text', completed: false },
        { id: 2, text: 'Add AI Travel App', completed: true },
      ],
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
  ];
});

  const [editingProject, setEditingProject] = useState(null);
  const [userName, setUserName] = useState(() => {
    const savedName = localStorage.getItem('userName');
    return savedName ? savedName : '';
  });
  const [isEditingName, setIsEditingName] = useState(() => {
    const savedName = localStorage.getItem('userName');
    return savedName ? false : true;
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  function addProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function addTask(projectId, taskText) {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const newTask = {
          id: Date.now(),
          text: taskText,
          completed: false,
        };

        return {
          ...project,
          tasks: [...project.tasks, newTask],
        };
        }

        return project;
      });

      setProjects(updatedProjects);
      }

function toggleTaskCompleted(projectId, taskId) {
  const updatedProjects = projects.map((project) => {
    if (project.id === projectId) {
      const updatedTasks = project.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      });

      return {
        ...project,
        tasks: updatedTasks,
      };
    }
        return project;
  });

  setProjects(updatedProjects);
  }

function deleteTask(projectId, taskId) {
      const updatedProjects = projects.map((project) => {
        if (project.id === projectId) {
          const filteredTasks = project.tasks.filter((task) => {
            return task.id !== taskId;
          });
          return {
            ...project,
            tasks: filteredTasks
          };
        }
        return project;
        });
        setProjects(updatedProjects);
      }

function deleteProject(projectId) {
  setProjects((prevProjects) =>
    prevProjects.filter((project) => project.id !== projectId)
  );
}

function handleEditProject(project) {
  setEditingProject(project);
}

function handleUpdateProject(updatedProject) {
  setProjects((prevProjects) =>
    prevProjects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    )
  );
  setEditingProject(null);
}

  return (
    <div className="app-shell">
      <p className="app-label">Project Tracker</p>

    <header className="app-hero">
      <h1 className="hero-heading">
        <span>Hello, </span>

        {isEditingName ? (
          <input
            type="text"
            className="hero-name-input"
            placeholder="Creator"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            onBlur={() => {
              if (userName.trim()) {
                setIsEditingName(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && userName.trim()) {
                setIsEditingName(false);
              }
            }}
            autoFocus
          />
        ) : (
          <span
            className="hero-accent hero-name-text"
            onClick={() => setIsEditingName(true)}
          >
            {userName}
          </span>
        )}
      </h1>

      <div className="hero-line"></div>
    </header>
      
      <div className="new-project-wrapper">
      <NewProjectForm 
      onAddProject={addProject} 
      onUpdateProject={handleUpdateProject}
      editingProject={editingProject}
      />
      </div>
      
      <ProjectList 
      projects={projects} 
      onAddTask={addTask} 
      onToggleTaskCompleted={toggleTaskCompleted} 
      onDeleteTask={deleteTask}
      onDeleteProject={deleteProject}
      onEditProject={handleEditProject}
      />
    </div>
  );
}