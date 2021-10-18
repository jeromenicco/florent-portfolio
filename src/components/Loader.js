import React from 'react'
import LoaderGif from '../assets/gifs/EMOJI_LICORNE.gif'

const Loader = () => {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <img src={LoaderGif}/>
        </div>
    )
}

export default Loader