import firebase from 'firebase';

export function staticsUser(userID) {
  // 一覧表生成機能の方がほしいので方針転換
  let attendanceCount = 0;
  let absenceCount = 0;
  let presenterCount = 0;
  var user = firebase.firestore().collectionGroup("users").where('id', '==', userID);
  user.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if(doc.attendance == true){
          attendanceCount = attendanceCount + 1;
        }
        if(doc.attendance == false){
          absenceCount = absenceCount + 1;
        }
        if(doc.presenter == true){
          presenterCount = presenterCount + 1;
        }
      });
  });

  return [attendanceCount, absenceCount, presenterCount];
}
