import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {
    const videoTitle = useSelector((store) => store.videoTitle.title)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className="flex flex-col">
            <div className="px-5">
                <div className="flex mt-2">
                <iframe
                    height={500}
                    width={1000}
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div>
                    <LiveChat />
                </div>
                </div>

                <div className="mt-4">
                    {/* Video Title */}
                    <h1 className="text-2xl font-semibold mb-2">
                        {videoTitle}
                    </h1>

                    {/* Channel Info + Subscribe */}
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="text-lg font-bold">{"Nishu"}</div>
                            <div className="text-sm text-gray-500">569K subscribers</div>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition">
                            Subscribe
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">👍 2K</button>
                        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">🔗 Share</button>
                        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">⬇️ Download</button>
                        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">🙏 Thanks</button>
                        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition">✂️ Clip</button>
                    </div>
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage