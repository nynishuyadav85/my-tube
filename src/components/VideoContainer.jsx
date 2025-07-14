import { useEffect, useState } from 'react'
import { POPULAR_VIDEO_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const res = await fetch(POPULAR_VIDEO_KEY);
        const data = await res.json();
        setVideos(data.items)
        console.log(data.items)
    }


    return (
        <div className='flex flex-wrap justify-center gap-6 p-5'>
            {videos.map(video =>
                <Link to={'/watch?v=' + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            )}
        </div>
    )
}

export default VideoContainer