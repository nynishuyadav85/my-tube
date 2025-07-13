import Button from './Button'

const ButtonList = () => {
    const categories = [
        "All",
        "Music",
        "Podcasts",
        "DSA",
        "Live",
        "Gaming",
        "News",
        "Sports",
        "ReactJS",
        "NodeJS",
        "Comedy",
        "Movies",
        "JavaScript",
        "Mixes",
        "Watched",
        "Recently Uploaded",
        "New to You"
    ];
    return (
        <div className='flex'>
            {categories.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    )
}

export default ButtonList