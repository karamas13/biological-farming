import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import "cloudinary-video-player/cld-video-player.min.css";


const VideoPlayer = ({ id, publicId, playerConfig, sourceConfig, ...props }) => {
  const {width, height} = props;
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: 'dmfioisim',
      publicId: "farming",
      secure: true,
      controls: false,
      muted: true,
      autoplay: true,
      RemotePlayback: true,
      playsinline: true,
      playbackRates: [0.5, 1, 1.5, 2],
      loop: true,
      ...playerConfig,      
    });
    player.source(publicId, sourceConfig);
  }, []);

  return (
    <video
      ref={playerRef}
      id={id}
      className=''
      {...props}
      height={height}
      width={width}
    />
  );
};

export default VideoPlayer;
