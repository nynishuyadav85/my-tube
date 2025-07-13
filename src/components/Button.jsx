import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='mt-4 px-4 py-1 mx-1 text-sm bg-gray-200 text-black rounded-lg hover:bg-gray-300'>
                {name}
            </button>
        </div>
    )
}

export default Button