import React, { Component } from 'react'

class SongCreate extends Component {
    
    constructor(props){
        super(props);

        this.state = { title: '' };
    }

    render() {
        return (
            <div>
                <h2>Add a new Song!</h2>
                <form>
                    <label>Song Title: {this.state.title} </label>
                    <input 
                        onChange={e => this.setState({title: e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

export default SongCreate