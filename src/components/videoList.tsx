import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Video } from '../constants/types';

const query = graphql`
  {
    allVimeoVideo {
      nodes {
        url
        title
        thumbnail {
          large
        }
        duration
        description
        date
        iframe
      }
    }
  }
`

const VideoComponent = () => {
  const data = useStaticQuery(query)
  const videos: Video[] = data.allVimeoVideo.nodes;
  console.log("TCL: Video -> data", videos)
   
  return <div>{videos.map((video: Video) => {
    console.log(video.url.replace('https://', 'https://player.').replace('.com/','.com/video/'));
   return (
    <iframe 
    style={{ width: '500px', height: '250px', border: 'none' }} 
    title={video.title} 
    allow="autoplay; fullscreen" 
    src={video.url.replace('https://', 'https://player.').replace('.com/','.com/video/')}    
     />
   )
  })}</div>
}

export default VideoComponent