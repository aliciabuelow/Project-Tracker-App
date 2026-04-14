import { useState, useEffect } from 'react';
import '../styles/NewProjectForm.css';

export default function NewProjectForm(props) {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    
    if (props.editingProject) {
        const updatedProject = {
            ...props.editingProject,
            title: title,
            description: description,
        };

        props.onUpdateProject(updatedProject);
    } else {
        const newProject = {
            id: Date.now(),
            title: title,
            description: description,
            tasks: [],
        };

        props.onAddProject(newProject);
    }

    setTitle('');
    setDescription('');
 }

 useEffect(() => {
    if (props.editingProject) {
        setTitle(props.editingProject.title);
        setDescription(props.editingProject.description);
    }
 }, [props.editingProject]);

    return (
        <form className="new-project-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Project title" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Project description" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Add Project</button>
        </form>
    );
}