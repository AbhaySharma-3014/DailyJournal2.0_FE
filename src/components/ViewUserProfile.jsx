import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
const ViewUserProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])
    return (
        

        <Card className='border-0 shadow-sm mt-3' style={{ fontFamily: 'Poppins, sans-serif' ,width: '90%', background: 'rgba(255, 255, 255, 0.8)', padding: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
            <CardBody>
                <h3 className='text-uppercase'>User Information</h3>

                <Container className='text-center'>
                    <img style={{ maxWidth: '200px', maxHeight: '200px' }} src={user.image ? user.image : 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                        <tr>
                            <td >
                                User Id
                            </td>
                            <td>
                                DailyJournalUser_{user.id}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                User Name
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                User Email
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                About
                            </td>
                            <td>
                                {user.about}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Role
                            </td>
                            <td>
                                {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {currentUser ? (currentUser.id == user.id) ? (
                    <CardFooter className='text-center'>
                        <Button onClick={updateProfileClick} color='warning' >Update Profile</Button>
                    </CardFooter>
                ) : '' : ''}

            </CardBody>
        </Card>

    )
}

export default ViewUserProfile
