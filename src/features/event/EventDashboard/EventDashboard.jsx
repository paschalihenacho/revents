import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { content, connect } from 'react-redux';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import {createEvent, deleteEvent, updatedEvent} from '../eventActions'

const mapState = (state) => ({
  events: state.events
})

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  //   handlerIsOpenToggle = () => {
  //     this.setState(({ isOpen }) => ({
  //       isOpen: !isOpen
  //     }));
  //   };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancelEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      // ...this.state.events takes our array of events and spread them out.
      events: [...this.state.events, newEvent],
      isOpen: false
    }));
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        //this "event is the currently existed event on our state"
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  // #1 create the Method to delete an event
  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectedEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0} //when you click on (View) different events the EventForm updates
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState) (EventDashboard);
