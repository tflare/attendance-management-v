import firebase from 'firebase';

export function createEvent(eventID) {
  const message = { "eventID": eventID };

  const attendance2db = firebase.app().functions('asia-northeast1').httpsCallable('attendance2db');
  attendance2db(message).then(function(result) {
    const resultMessage = result.data.message;
    if(resultMessage != null){
      //neither null nor undefined
      alert(resultMessage);
    }
  });
}
