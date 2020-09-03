import React from 'react';
import { connect } from 'react-redux';
import { updateNewTaskText, addTaskThunk } from '../../redux/tasksReducer'
import Input from './Input';

class InputContainer extends React.Component {
    render() {
        return (
            <Input tasksData={this.props.tasksData}
                newTaskText={this.props.newTaskText}
                updateNewTaskText={this.props.updateNewTaskText}
                addTaskThunk={this.props.addTaskThunk} />
        )
    }
}

let mapStateToProps = (state) => ({
    tasksData: state.tasks.tasksData,
    newTaskText: state.tasks.newTaskText
})

export default connect(mapStateToProps, {
    updateNewTaskText,
    addTaskThunk
})(InputContainer);