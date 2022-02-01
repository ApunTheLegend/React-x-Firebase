import './Post.css'

const Post = (props) => {
    return (
        <div className='post-paragraph'>
            <p>{props.dept}</p>
        </div>
    )
}

export default Post