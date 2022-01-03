import { Button, ListGroupItem } from "reactstrap";

// Functional Component

const List = (props) => {   
	return (
		<ListGroupItem>
			{props.value}
			<Button close className="position-absolute end-0" onClick={() => props.removeTodo(props.idx)}/>
		</ListGroupItem>
	)
}

export default List