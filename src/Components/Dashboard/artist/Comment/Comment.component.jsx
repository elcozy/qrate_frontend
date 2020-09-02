import React, {Component} from 'react';

import './Comment.style.scss';

class Comment extends Component{
    state = {
        isLiked: false,
        counter: 0
    };

    toggleLike = () => {
        this.setState({
            isLiked: !this.state.isLiked,
            counter: 0 ? 1 : 0,
        })
    };

    render() {
        const {isLiked, counter} = this.state;

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
                    {
                        isLiked===false && counter===0 ?
                        <i className="far fa-heart" onClick={this.toggleLike}></i> :
                        <span>
                            <img
                            className="liked mb-2 mr-1" 
                            src='/images/isLiked.svg' 
                            alt='like'
                            height={19}
                            width={18}
                            onClick={this.toggleLike}/>
                            <span className='mb-3'>1</span>
                        </span>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;