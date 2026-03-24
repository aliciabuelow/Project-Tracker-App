import { useState } from 'react';``

export default function NewProjectForm(props) {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 function handleSubmit(event) {
    event.preventDefault();
    
    props.onAddProject(title, description);

    setTitle('');
    setDescription('');
 }

    return (
        <form onSubmit={handleSubmit}>
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