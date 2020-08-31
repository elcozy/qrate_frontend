import React from 'react';

import './Comment.style.scss';

const Comment = () => {
    return (
        <div className='comment'>
            <img className='artist-profile' src='/images/user-img.png' alt='' />
            <div className='right'>
                <div className='status'>
                    <span>artistgod</span>
                    <i className="fas fa-circle circle1"></i>
                    <img className='artist-profile' src='/images/artist-icon.svg' alt='' />
                    <span>Artist</span>
                </div>
                <div className='comment-text'>
                    <p>Nice work Jackson!</p>
                </div>
                <div className='like'>
                <i className="fas fa-heart fill"></i>
                <i className="far fa-heart empty"></i>
                </div>
            </div>
        </div>
    )
}

export default Comment;