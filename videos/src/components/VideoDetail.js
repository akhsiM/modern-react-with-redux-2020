import React from 'react';


const VideoDetail = ({ video }) => {

  if (!video) {
    return (
      <div>Loading...</div>
    );
  }

  const videoEmbedSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className="ui segment">
         <h4 className="ui header">{video.snippet.title}</h4>
         <div className="ui embed">
          <iframe title="Video Player" src={videoEmbedSrc} />
         </div>
         <p>{video.snippet.description}</p>
      </div>
    </div>
  );

}

export default VideoDetail;
