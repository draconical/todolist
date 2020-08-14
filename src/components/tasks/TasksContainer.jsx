import React from 'react';
import Tasks from './Tasks';
import { connect } from 'react-redux';
import { editTask, toggleIsDone, deleteTask, setData, setEditId, setCurrentPage, setTotalTasksLength } from '../../redux/tasksReducer'

class TasksContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3000/data/tasks.json')
            .then((response) => response.json())
            .then((data) => {
                this.props.setData(data)
                this.props.setTotalTasksLength(data.length)
            })
    }
    
    componentDidUpdate() {
        this.props.setTotalTasksLength(this.props.tasksData.length)
    }

    render() {
        return (
            <Tasks tasksData={this.props.tasksData} editTask={this.props.editTask}
                toggleIsDone={this.props.toggleIsDone} deleteTask={this.props.deleteTask}
                currentlyEditing={this.props.currentlyEditing} setEditId={this.props.setEditId}
                currentPage={this.props.currentPage} tasksPerPage={this.props.tasksPerPage}
                totalTasksLength={this.props.totalTasksLength} setCurrentPage={this.props.setCurrentPage}/>
        )
    }
}

let mapStateToProps = (state) => ({
    tasksData: state.tasks.tasksData,
    currentlyEditing: state.tasks.currentlyEditing,
    tasksPerPage: state.tasks.tasksPerPage,
    totalTasksLength: state.tasks.totalTasksLength,
    currentPage: state.tasks.currentPage
})

export default connect(mapStateToProps, {
    editTask,
    toggleIsDone,
    deleteTask,
    setData,
    setEditId,
    setCurrentPage,
    setTotalTasksLength
})(TasksContainer);