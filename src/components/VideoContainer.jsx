import { useEffect, useState } from 'react'
import { POPULAR_VIDEO_KEY } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { videoChannelName, videoTitle } from '../utils/videoSlice';

const VideoContainer = () => {
    const dispatch = useDispatch()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const res = await fetch(POPULAR_VIDEO_KEY);
        const data = await res.json();
        console.log(data.items[0])
        setVideos(data.items)
    }

    const handleVideoClick = (video) => {
        dispatch(videoTitle({ title: video.snippet.title }))
    }

    return (
        <div className='flex flex-wrap justify-center gap-6 p-5'>
            {videos[25] && <AdVideoCard info={videos[25]} />}
            {videos.map(video =>
                <Link to={'/watch?v=' + video.id} onClick={() => handleVideoClick(video)}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            )}
        </div>
    )
}

export default VideoContainer