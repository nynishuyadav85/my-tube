const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;


    return (
        <div className="w-80 cursor-pointer">
            {/* Thumbnail */}
            <img
                className="rounded-xl w-full h-44 object-cover"
                src={thumbnails.high.url}
                alt="thumbnail"
            />

            {/* Details */}
            <div className="flex mt-3">
                {/* Channel Avatar */}
                {/* Video Info */}
                <div>
                    <h3 className="text-sm font-medium text-black line-clamp-2">{title}</h3>
                    <p className="text-xs text-gray-600">{channelTitle}</p>
                    <p className="text-xs text-gray-600">
                        {statistics.viewCount} views • {publishedAt}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const AdVideoCard = ({ info }) => {
    return (
        <div className="p-2 m-1 border-4 border-black-900">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;