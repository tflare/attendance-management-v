import firebase from 'firebase';

export function createEventInfo(eventID) {
  const message = { "eventID": eventID };

  const functions = firebase.app().functions('asia-northeast1');
  functions.httpsCallable('attendance2db')(message)
}
