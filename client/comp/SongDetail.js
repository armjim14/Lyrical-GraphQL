import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import SingleSong from '../queries/SingleSong'

class SongDetail extends Component {

    getComments() {
        return this.props.data.song.lyrics.map( ar => { return <li key={ar.id}>{ar.content}</li> } )
    }
    
    render() {
        if (this.props.data.loading) { return <div>Loading...</div> }

        return (
            <div>
                <h3>Song Detail</h3>
                <p>Title: <b>{ this.props.data.song.title }</b></p>
                <hr />
                <ol>
                    {this.getComments()}
                </ol>
            </div>
        )
    }
}

export default graphql(SingleSong, {
    options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail)