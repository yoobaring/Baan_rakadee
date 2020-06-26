import React, {Component} from 'react';
import Axios from 'axios';


class Search extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.myhome)
        
        
    }

    search =()=>{
        Axios.get('https://newhome.sixgeat1997.vercel.app/search/myhome/')
    }
     
    render() {
        return (
            <div>

            </div>

        )
    }   
}
export default Search;