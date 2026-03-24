
export default function TaskItem(props) {
    return (
        <div>
            <span>{props.task.text}</span>{' '}
            <span>
                {props.task.completed ? '(Completed)' : '(Not completed)'}
            </span>
        </div>
    )
}