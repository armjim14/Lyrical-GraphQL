import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import query from '../queries/SingleSong';

class LyricCreate extends Component {

    constructor(props){
        super(props);

        this.state = { content: "" }
    }

    addLyric(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                songId: this.props.songId,
                content: this.state.content
            },
            // refetchQueries: [{ query }]
        })
        .then(() => {
            console.log("we are here")
        })
        // .catch( err => console.log(err) )

        this.setState({content: ""})

    }

    render() {
        return (
            <form onSubmit={ this.addLyric.bind(this) }>
                <lable>Add a Lyric</lable>
                <input
                onChange={ e => this.setState({ content: e.target.value })}
                value={this.state.content}
                />
            </form>
        )
    }
}

const mutation = gql`
    mutation addLyricToSong($songId: ID, $content: String) {
        addLyricToSong( songId: $songId, content: $content){
            id
        }
    } 
`;

export default graphql(mutation)(LyricCreate);
