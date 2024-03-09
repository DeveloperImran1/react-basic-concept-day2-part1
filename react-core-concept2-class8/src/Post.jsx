import './Post.css'

export default function Post(post) {
    const {id, title, userId} = post.post;
    return(
        <div className='post'>
            <h4>User ID: {userId} </h4>
            <h4>Title: {title} </h4>
            <h4>ID: {id} </h4>
        </div>
    )
}