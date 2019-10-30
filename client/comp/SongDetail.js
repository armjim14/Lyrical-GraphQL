import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import SingleSong from '../queries/SingleSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

    // getComments() {
    //     return this.props.data.song.lyrics.map( (ar, i) => { return <li key={i}>{ar.content}</li> } )
    // }
    
    render() {

        const { song } = this.props.data;

        if (!song) { return <div>Loading...</div> }

        return (
            <div>
                <Link to='/'>Back</Link>
                <h5>Song Detail</h5>
                <h2><b>{ this.props.data.song.title }</b></h2>
                <LyricList />
                <LyricCreate songId={this.props.params.id} />
            </div>
        )
    }
}

export default graphql(SingleSong, {
    options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail)