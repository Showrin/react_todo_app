import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onsubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={ this.onsubmit } style={{ display: "flex" }}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Add ToDo ....."
                    value={ this.state.title }
                    style={{flex: "10", padding: "5px"}}
                    onChange={ this.onchange }
                />

                <input 
                    type="submit"
                    name="submit"
                    value="Add"
                    className="btn"
                    style={{flex: "1", padding: "5px"}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
