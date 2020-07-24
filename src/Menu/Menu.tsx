import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../todoList/Home';
import About from '../todoList/About';
const MenuList = styled.div`
    width: 200px;
    border-right: 1px solid #999999;

`;
const Header = styled.div`
    padding:20px 10px;
    border-bottom: 1px solid #333;
    background-color:#C32C0E;
    color: #fff;
`;
const Item = styled.div`
    a {
    display: block;
    align-items: center;
    text-decoration:none;
    margin-left: 10px;
    padding :10px;
    color: #000;
    &:hover{
        color: yellow;
    }
  } 
`;
const Menu = () => {
    return (
        <Router>
            <MenuList>

                <Header> Todo List</Header>
                <Item><Link to="/home">Inbox</Link></Item>
                <Item><Link to="/about">Team Inbox</Link></Item>
                <Item><Link to="/about">Today</Link></Item>
                <Item><Link to="/about">Next day</Link></Item>
                <Item><Link to="/about">Next 7 day</Link></Item>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/about" component={About} />

                </Switch>
            </MenuList>
        </Router>


    );
}
export default Menu;
