import { useSelector } from "react-redux"

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null
    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li>Home</li>
                <li>Subscriptions</li>
                <li>Youtube Music</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscription</h1>
            <ul>
                <li>100x</li>
                <li>Akshay Saini</li>
                <li>Flying beast</li>
            </ul>
            <h1 className='font-bold pt-5'>Explore</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Sports</li>
                <li>Films</li>
            </ul>
            <h1 className='font-bold pt-5'>Setting</h1>
            <ul>
                <li>Report History</li>
                <li>Feedback</li>
                <li>Help</li>
            </ul>
        </div>
    )
}

export default SideBar