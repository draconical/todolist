import React from 'react';
import Tasks from './Tasks';
import { connect } from 'react-redux';
import { editTask, toggleIsDone, deleteTask, setData, setEditId } from '../../redux/tasksReducer'

class TasksContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3000/data/tasks.json')
            .then((response) => response.json())
            .then((data) => {
                this.props.setData(data)
            })
    }

    render() {
        return (
            <Tasks tasksData={this.props.tasksData}
                editTask={this.props.editTask}
                toggleIsDone={this.props.toggleIsDone}
                deleteTask={this.props.deleteTask}
                currentlyEditing={this.props.currentlyEditing}
                setEditId={this.props.setEditId} />
        )
    }
}

let mapStateToProps = (state) => ({
    tasksData: state.tasks.tasksData,
    currentlyEditing: state.tasks.currentlyEditing
})

export default connect(mapStateToProps, {
    editTask,
    toggleIsDone,
    deleteTask,
    setData,
    setEditId
})(TasksContainer);