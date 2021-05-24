import React, {FC, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import defLogo from '../../../accets/img/defLogo.png'
import {followUser, getUsers, UsersType} from "../../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {reselectUsers, selectCurrentPage, selectPageSize, selectTotalUsersCount} from "../../../redux/usersSelector";
import {Avatar, Button, Card, Col, Pagination, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const {Meta} = Card;

const Users: FC<{}> = (props) => {
    const dispatch = useDispatch()
    const totalUsersCount = useSelector(selectTotalUsersCount)
    const pageSize = useSelector(selectPageSize)
    const currentPage = useSelector(selectCurrentPage)
    const users = useSelector(reselectUsers)

    const displayUsers = (page: number, size: number = pageSize) => {
        dispatch(getUsers(page, size))
    }

    const subscribeUser = (boolean: boolean, userId: number) => {
        dispatch(followUser(boolean, userId))
    }

    useEffect(() => {
        displayUsers(currentPage, pageSize)
    }, [currentPage, pageSize])



    const totalPages = Math.ceil(totalUsersCount / pageSize)


    return (
        <div>
            <Row>
                <Col span={24}>
                    <Pagination
                        current={currentPage}
                        defaultCurrent={1}
                        total={totalPages}
                        defaultPageSize={pageSize}
                        responsive={true}
                        onChange={ value => displayUsers(value, pageSize)}
                    /></Col>
            </Row>
            <Row>
                <Col span={24}>
                    {users.map((user: UsersType) => (
                        <Card
                            key={user.id}
                            style={{width: 200}}
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src={user.photos.small}/>}
                                title={user.name}
                                description={user.status}
                            />
                        </Card>


                    ))}
                </Col>
            </Row>


        </div>
    )
}

export default Users
