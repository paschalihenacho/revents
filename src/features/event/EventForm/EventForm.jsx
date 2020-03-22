import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    vanue: '',
    hostedBy: ''
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state)
  }

  // Talking to Virture DOM
  handleInputChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

    render() {
      //Destructuring properties
      const {cancelFormOpen} = this.props;
      const {title, date, city, } = this.state;
        return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            {/* Each Input property is going to have [name, onchange, value] */}
            <input name='title' 
            onChange={this.handleInputChange} 
            value={title}
             placeholder='Event Title' 
             />

          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">Cancel</Button>
        </Form>
      </Segment>
        )
    }
}

export default EventForm;