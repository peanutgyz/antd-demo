
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Option1 from './Option1';
import Option2 from './Option2';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route path='/option1' component={Option1}/>
            <Route path='/option2' component={Option2}/>
        </Switch>
    
    </main>
)

export default Main