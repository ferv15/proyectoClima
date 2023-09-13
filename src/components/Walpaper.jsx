import React from 'react'

const Walpaper = ({image}) => {
    console.log(image)
    return (
    <div className='fondo'>
        <img src={image?.hits[0].webformatURL} alt={image?.hits[0].tags} />
    </div>
    )
}

export default Walpaper