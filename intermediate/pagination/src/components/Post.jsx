const Post = ({title,body,id,userId} )=>{

    return (
        <>
        <li>{id}</li>
         <li>{title}</li>
         <li>{body}</li>
        </>
    )
   
}

export default Post;