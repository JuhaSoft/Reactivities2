import React, {Component} from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';
import { render } from '@testing-library/react';
import axios from 'axios';
import { List } from 'semantic-ui-react'
class App extends Component {
  state = {
    values:[]
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/Values')
    .then((response) =>{
      console.log(response)
      this.setState({
        values:response.data
       })
    })

    
  }
  render(){
    return (
      <div>
          <Header as='h2'>
            <Icon name='users' />
            <Header.Content>Reactivities</Header.Content>
          </Header>
          <List>
          {this.state.values.map((value: any) => (
           <List.Item>{value.id}>{value.name}</List.Item>
            ))}

          </List>
       
      </div> 
    );
  }
  
}

export default App;
