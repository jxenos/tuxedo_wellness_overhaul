import React, {Component} from 'react'

export default class FacebookFeed extends Component {
  componentDidMount() {
    // this.loadFbApi();
  };

  loadFbApi = () => {
    window.fbAsyncInit = function () {
      window
        .FB
        .init({appId: 2025207844210842, autoLogAppEvents: true, xfbml: true, version: 'v3.2'});
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
      <iframe
        className="facebookFeed"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuxedowellness%2F&tabs=timeline&width=500&height=531&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"></iframe>
    )
  }
}
