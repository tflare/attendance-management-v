import firebase from 'firebase';
const axios = require('axios');

export function createEventInfo(eventID) {

  //URLを入れる
  const url = "https://connpass.com/api/v1/event/?event_id=" + eventID;
  axios.get(url)
  .then((response) => {
    const event = response.data.events[0];
    firebase.firestore().collection('event').add({
      eventID: Number(event.eventID),
      title: event.title,
      startedAt: event.startedAt,
      endedAt: event.endedAt,
      accepted: event.accepted,
      waiting: event.waiting
    })
  });
}
