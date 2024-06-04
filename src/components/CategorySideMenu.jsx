import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
function CategorySideMenu() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadAllCategories().then(data => {
            console.log("loading categories ")
            console.log(data)
            setCategories([...data])
        })
            .catch(error => {
                console.log(error);
                toast.error("error in loading categories")
            })
    }, [])


    return (
        <div>
            <ListGroup style={{ color: '#1d2b64', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' ,textAlign:'center', maxWidth: '1200px', width: '90%', background: 'rgba(255, 255, 255, 0.8)', padding: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
                <h5 className='border-0'>  All Categories </h5>
                <ListGroupItem tag={Link} to="/" action={true} className='border-0'>
                    All Blogs
                </ListGroupItem>
                {categories && categories.map((cat, index) => {
                    return (
                        <ListGroupItem tag={Link} to={'/categories/' + cat.categoryId} className='border-0 shadow-0 mt-1' key={index} action={true}>
                            {cat.categoryTitle}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default CategorySideMenu
