import ProjectCard from './ProjectCard';

export default function ProjectList(props) {
    return (
       <div>
        {props.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
       </div>
    )
}