import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import query from '../queries/FetchSongs.js'

class SongCreate extends Component {
    
    constructor(props){
        super(props);
        this.state = { title: '' };
    }

    submitForm(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query }]
        })
        .then(() => {
            hashHistory.push('/')
        })
        .catch( err => console.log(err) )

    }

    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h2>Add a new Song!</h2>
                <form onSubmit={this.submitForm.bind(this)}>
                    <label>Song Title: {this.state.title} </label>
                    <input 
                        onChange={e => this.setState({title: e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate)