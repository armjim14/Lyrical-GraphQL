import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import SingleSong from '../queries/SingleSong'

class SongDetail extends Component {
    
    render() {

        // console.log(this.props)
        console.log(this.props.data.loading)
        if (this.props.data.loading) { return <div>Loading...</div> }

        return (
            <div>
                <h3>Song Detail</h3>
                <p>{ this.props.data.song.title }</p>

            </div>
        )
    }
}

export default graphql(SingleSong, {
    options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail)