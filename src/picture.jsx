import React from 'react';
import './picture.css';
import { Link } from 'react-router-dom';


class Picture extends React.Component{
    constructor(props){
        super(props)

        this.state={}
    }

    
    render() {
        return (
            <div className='imageDiv'>
                <Link to={`/card/${this.props.id}`}><img className='allImages' key={this.props.id} id={this.props.id} src={this.props.src.medium} /></Link>
            </div>
        )
    }
}

export default Picture;