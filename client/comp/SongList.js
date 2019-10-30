import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/FetchSongs.js'

class SongList extends Component {

    onSongDelete(id) {
        this.props.mutate({
            variables: { id }
        })
        .then(() => this.props.data.refetch() );
    }

    renderSongs() {
        return this.props.data.songs.map(({id, title}) => 
            <li key={id} className='collection-item'>
                <Link to={`/song/${id}`}>
                    {title}
                </Link>
                <i className='material-icons' onClick={ () => this.onSongDelete(id) }>
                    delete
                </i>
            </li>)
    }

    render() {
        if (this.props.data.loading) { return <div>Loading...</div> }

        return (
            <div>
                <ol className='collection'>
                    {this.renderSongs()}
                </ol>
                <Link
                    to="/new/song"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const mutation = gql`
mutation DeleteSong($id: ID){
      deleteSong(id:$id){
        title
      }
    }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);