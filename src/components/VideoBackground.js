import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  const videoUrl = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&start=5&loop=1&playlist=${trailerVideo.key}`;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
