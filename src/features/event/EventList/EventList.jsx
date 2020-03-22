import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        const { events, selectedEvent } = this.props;
        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem key={event.id} event={event} selectEvent={selectedEvent}/>
                ))}
            </Fragment>
        )
    }
}

export default EventList;