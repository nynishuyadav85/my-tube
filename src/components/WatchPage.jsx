import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className="px-5">
            <iframe
                height={500}
                width={1000}
                src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default WatchPage