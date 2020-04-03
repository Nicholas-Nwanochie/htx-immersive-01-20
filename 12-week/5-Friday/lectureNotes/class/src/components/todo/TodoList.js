
import React, { Component } from 'react';
import './styles.css';
import ListItem from './ListItem';
import AddItem from './AddItem'

class TodoList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            inputTxt: ""
        }

    }

    handleInput = (e) => {
        //e.target.value
        //DON"T DO THIS
        // this.state.input = e.target.value

        this.setState({
            inputTxt: e.target.value
        })
    }

    addTaskItem = () => {

        //current value of our inputTXT 
        let input = this.state.inputTxt
        // current array
        let tasks = this.state.tasks
        //push
        tasks.push(input);

        this.setState({
            tasks: tasks,
            inputTxt: ""
        }, () => {
            console.log(this.state.tasks);

        })

        // console.log(this.state.tasks);

        // this.setState({}, ()=>{

        // })
    }



    render() {


        // let {tasks, inputTxt} = this.state;
        //["","", ""]
        let taskList = this.state.tasks.map((task, index) => {

            return <ListItem key={index} taskItem={task} />
        })

        console.log("taskList", taskList);

        return (
            <div className="todo-form">
                {/* {this.state.inputTxt} */}
                <br />

                <AddItem inputTxt={this.state.inputTxt} inputChange={this.handleInput} addItem={this.addTaskItem} />

                <br />

                <ul>
                    {taskList}
                </ul>
            </div>
        )
    }
}

export default TodoList
