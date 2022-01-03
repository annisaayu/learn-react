import React from "react";
import {
	Nav, 
	NavLink, 
	NavItem, 
	Input, 
	Button, 
	Row, 
	Col, 
	FormFeedback, 
	ListGroup, 
	ListGroupItem,
} from "reactstrap";
import List from "../components/List";

// Class Component

class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			value: "",
			todos: [
				"Makan siang",
				"Cuci Baju",
				"Belanja"
			],
			invalid: false,
		}
		this.removeTodo = this.removeTodo.bind(this) //pass the data as an argument to the function
	}

	changeValue(element) {
		this.setState({
			value: element.target.value,
			invalid: false,
		})
	}

	addTodo() {
		console.log(this.state.value)
		if(this.state.value !== "") {
			this.setState({
				todos: [this.state.value, ...this.state.todos],
				value: "",
			})
		} else {
			this.setState({
				invalid: true
			})
		}
	}

	removeTodo(index) {
		let filterTodos = this.state.todos
		filterTodos.splice(index, 1)
		this.setState({ todos: filterTodos })
	}
	
	onKeyPress(e) {
		//it triggers by pressing the enter key
		if (e.key === "Enter") {
			this.addTodo()
		}
	}

	render() {
		return (
			<div>
				<Nav>
					<NavItem>
						<NavLink active href="#">
							Todo
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
								Another Link
						</NavLink>
					</NavItem>
				</Nav>
				
				<div className="container">
					<Row>
						<Col md={10}>
							<Input 
								value={this.state.value} 
								invalid={this.state.invalid} 
								placeholder="Add your new todo" 
								onChange={(e) => this.changeValue(e)}
								onKeyPress={(e) => this.onKeyPress(e)}
							/>
							<FormFeedback>Ooops! Please add your todo</FormFeedback>
						</Col>
						<Col md={2}>
							<Button block color="primary" onClick={() => this.addTodo()}> Add Todo </Button>
						</Col>
					</Row>
					<div className="mt-3">
						<ListGroup flush>
							{
								this.state.todos.map((todo, idx) => {
									return (
										<List key={idx} value={todo} idx={idx} removeTodo={this.removeTodo}/>
									)
								})
							}
						</ListGroup>
					</div>
				</div>
				<footer className="fixed-bottom text-center py-3 mb-1 border-top">
					Todos &copy; 2021
				</footer>
			</div>
		)
	}
}

export default Homepage