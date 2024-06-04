import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from '../context/userContext'

import { toast } from "react-toastify"
import { deletePostService } from '../services/post-service'

function Post({ post = { id: -1, title: "This is default post title", content: "This is default post content" }, deletePost }) {

    const userContextData = useContext(userContext)
    const [user, setUser] = useState(null)
    const [login, setLogin] = useState(null)
    useEffect(() => {
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])
    return (

        <Card className='border-0 shadow-sm mt-3' style={{color: '#1d2b64', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' ,maxWidth: '1200px', width: '90%', background: 'rgba(255, 255, 255, 0.8)', padding: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
            <CardBody>
                <h3>{post.title}</h3>
                <CardText dangerouslySetInnerHTML={{ __html: post.content.substring(0, 70) + "...." }}>

                </CardText>

                <div>
                    <Link className='btn btn-secondary border-0' to={'/posts/' + post.postId}>Read More</Link>
                    {userContextData.user.login && (user && user.id === post.user.id ? <Button onClick={(event) => deleteCurrentPost(post)} color='danger' className="ms-2">Delete</Button> : '')}
                    {userContextData.user.login && (user && user.id === post.user.id ? <Button tag={Link} to={`/user/update-blog/${post.postId}`} color='warning' className="ms-2">Update</Button> : '')}

                </div>
            </CardBody>
        </Card>

    )
}

function deleteCurrentPost(post) {
    //going to delete post
    console.log(post)

    deletePostService(post.postId).then(res => {
        console.log(res)
        toast.success("Post Deleted Successfully. Please Refresh")
    }).catch(error => {
        console.log(error)
        toast.error("error in deleting post")
    })
}


export default Post
