import firebase from 'firebase';

export function createEventInfo(eventID) {

  const attendance2db = firebase.functions().httpsCallable('attendance2db');
  attendance2db({ "eventID": eventID }).then((res) => {
    console.log(res); // { message: success }
  });

}
