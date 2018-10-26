import React, {Component} from 'react'

export default class FacebookFeed extends Component {
  componentDidMount() {
    this.loadFbApi();
  };

  loadFbApi = () => {
    window.fbAsyncInit = function () {
      window
        .FB
        .init({appId: '2025207844210842', autoLogAppEvents: true, xfbml: true, version: 'v3.2'});
      window
        .FB
        .api("/me/feed", function (response) {
          console.log(response);
          if (response && !response.error) {
            console.log(response);
          }
        });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs
        .parentNode
        .insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };

  render() {
    return (
      <div></div>
    )
  }
}
