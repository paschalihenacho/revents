import React from "react";
import { Fragment } from "react";
import { Segment, Item, Label, List, ItemContent } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                <Label
                  style={{ position: "absolute" }}
                  color="orange"
                  ribbon="right"
                >
                  Host
                </Label>

                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content>
                  <Item.Header
                    verticalAlign="middle"
                    style={{ width: "20px" }}
                    as="h3"
                  >
                    {attendee.name}
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default EventDetailedSidebar;
