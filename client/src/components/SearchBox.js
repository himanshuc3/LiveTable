import React, { Component } from 'react'
import userImage from '../assets/images/user_image.png'
import Search from 'react-search-box';
require('../styles/search_box.css')

export default class SearchBox extends Component {

    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({
          query: e.target.value
        })
      }

    render() {
        return ( 
                <div className="search_box">
                    <form className="search_form">
                        <input 
                        type="text"
                        className="search_input"
                        onChange = {this.handleChange.bind(this)}
                        placeholder="Search Livetable"
                        value={this.state.query} />
                    </form>
                </ div>
        );
    }


  }