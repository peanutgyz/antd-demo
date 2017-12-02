import React from 'react'
import Main from './Main'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => (
    <div>
        <Layout>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1">
                                <Link to='/option1'>option1</Link>
                            </Menu.Item>
                            <Menu.Item key="2"><Link to='/option2'>option1</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/option3'>option1</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/option4'>option1</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Main/>
                </Content>
            </Layout>
        </Layout>

    </div>
)

export default App

