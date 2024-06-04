import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../components/Base'
import { Container, Row, Col } from "reactstrap";
import CategorySideMenu from '../components/CategorySideMenu';
import { loadPostCategoryWise, deletePostService } from '../services/post-service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Post from '../components/Post';
function Categories() {

    const [posts, setPosts] = useState([])

    const { categoryId } = useParams()
    useEffect(() => {
        console.log(categoryId);
        loadPostCategoryWise(categoryId).then(data => {
            setPosts([...data])
        })
            .catch(error => {
                console.log(error)
                toast.error("error in loading posts")
            })
    }, [categoryId])


    function deletePost(post) {
        //going to delete post
        console.log(post)

        deletePostService(post.postId).then(res => {
            console.log(res)
            toast.success("post is deleled..")
            let newPosts = posts.filter(p => p.postId != post.postId)
            setPosts([...newPosts])

        }).catch(error => {
            console.log(error)
            toast.error("error in deleting post")
        })
    }


    return (
        <Base>
            <Container className="mt-3" style={{color: '#1d2b64', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }} >
                <Row>
                    <Col md={2} className="pt-5">
                        <CategorySideMenu />
                    </Col>
                    <Col md={10}>

                        {
                            posts && posts.map((post, index) => {
                                return (
                                    <Post deletePost={deletePost} key={index} post={post} />
                                )
                            })
                        }

                        {posts.length <= 0 ? <h1>Oops!! No Post found in this category</h1> : ''}
                        <br></br>
                        {posts.length > 0 ? <h4 style={{color: '#1d2b64', fontFamily: 'Poppins, sans-serif'}}>Total Blogs in this Category : {} ( {posts.length} )</h4>:''}
                    </Col>
                </Row>
            </Container>


        </Base>
    )
}

export default Categories
