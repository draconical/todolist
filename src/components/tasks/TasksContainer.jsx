import React from 'react';
import Tasks from './Tasks';
import { connect } from 'react-redux';
import { setEditId, setCurrentPage, setTotalTasksLength, getTasksThunk, deleteTaskThunk, updateTaskThunk, toggleIsDoneThunk } from '../../redux/tasksReducer'

class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.getTasksThunk()
    }
    
    componentDidUpdate() {
        this.props.setTotalTasksLength(this.props.tasksData.length)
    }

    render() {
        return (
            <Tasks tasksData={this.props.tasksData}
                currentlyEditing={this.props.currentlyEditing} setEditId={this.props.setEditId}
                currentPage={this.props.currentPage} tasksPerPage={this.props.tasksPerPage}
                totalTasksLength={this.props.totalTasksLength} setCurrentPage={this.props.setCurrentPage}
                deleteTaskThunk={this.props.deleteTaskThunk} updateTaskThunk={this.props.updateTaskThunk}
                toggleIsDoneThunk={this.props.toggleIsDoneThunk} />
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
    setEditId,
    setCurrentPage,
    setTotalTasksLength,
    getTasksThunk,
    deleteTaskThunk,
    updateTaskThunk,
    toggleIsDoneThunk
})(TasksContainer);