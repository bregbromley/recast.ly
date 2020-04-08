import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.setState.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('dogs');
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: '5'
    };

    this.props.SearchVideo(options, (videos) =>
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      })
    );
  }



  titleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    var video;

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video ={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.allVideos} clickHandler={this.titleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video ={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos = {exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

ReactDOM.render(<App SearchVideo = {searchYouTube}/>, document.getElementById('app'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
