import { requestOptions } from './request-options';

export function getEventInfo() {

      //URLを入れる
      fetch("https://", requestOptions()).then(function(response) {
        return response.json();
      }).then(function(json) {
        json.stringify()


      });
}


