import firebase from 'firebase'

export function requestOptions() {
    
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
      };
    return requestOptions;
}

function authHeader() {
    
    const user = firebase.auth().currentUser;

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}