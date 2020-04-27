import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

 const initialState = [];

const createEvent = (state, payload) => {
  return [...state, payload.event]; // return an array, spread the state which contains our two events
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ]; //return array, spread the state, filter out event we are updating and
  //add back in the updated event we are getting when we add back the form
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

const fetchEvents = (state, payload) => {
  return payload.events 
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
