import React from 'react';
import './header.css';

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

   render(){
       let name = localStorage.getItem('name');
    return(
        <div className='header'>
            <h3>{name}</h3>
        </div>
    )
   }

};

export default Header;