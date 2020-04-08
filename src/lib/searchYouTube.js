import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO

  // var query = options.query;
  // var key = options.key;
  // var max = options.max || 5;
  var URL = 'https://www.googleapis.com/youtube/v3/search';

  //$.get('URL', 'data', 'callback');
  //$.get(URL, options, callback);
  var search = {};
  search.part = 'snippet';
  search.q = options.query;
  search.maxResults = options.max || 5;
  search.videoEmbeddable = true;
  search.key = options.key;
  search.type = 'video';

  // console.log(callback);

  //$.get(URL, search).done(function( data ) {console.log(data); });

  $.ajax({
    url: URL,
    type: 'GET',
    data: search,
    contentType: 'application/json',
    success: function(data) { callback(data.items); },
    error: () => {
      console.log('fail');
    }
  });


};

export default searchYouTube;
