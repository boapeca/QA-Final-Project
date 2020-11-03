import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default class DoneTicket extends React.Component {

    state = {
        title: '',
        description: '',
        status: 1
      }
    
      // handleChange = event => {
      //   this.setState({ id: event.target.value});
      // }

      handleTitleChange = event => {
        this.setState({title: event.target.value})
      }
    
      handleDescChange = event => {
        this.setState({description: event.target.value})
      }

      handleSubmit = event => {
        event.preventDefault();

        
        const { match: { params } } = this.props;
        
        axios.put(`http://localhost:9500/updateTicket/${params.id}`,
            {  
              title: params.title,
              description: params.description,
              status: 1
            }
        )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })

      }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>                      
            <button type="submit">Done</button>
          </form>
        </div>
      )
    }
}