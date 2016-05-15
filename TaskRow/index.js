import React, { Component } from 'react';
import {
    Animated,
    Easing,
} from 'react-native';

import Render from './Render';



class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            doneAnimation: new Animated.Value(0),
        };
    }

    handleDonePress() {
        Animated.timing(          // Uses easing functions
            this.state.doneAnimation, {
                toValue: 1,
                duration: 300,
                easing: Easing.easeOutSine,
            },
        ).start();

        setTimeout(()=> {
            this.props.onTodoDone(this.props.todo);
            this.setState({deleted: true});
        }, 500);
    }

    render() {
        return Render.bind(this)();
    }
}

TaskRow.propTypes = {
    onTodoDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.required,
        state: React.PropTypes.string.required,
    }).isRequired,
};

export default TaskRow;
