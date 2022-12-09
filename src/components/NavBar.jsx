import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 65px;
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;


const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`;

const Language = styled.span`
    font-size : 25px;
    cursor : pointer;
`



const Center = styled.div`
    flex : 1;
    text-align : center;
`;

const Logo = styled.h1`
    font-weight : bold;
    letter-spacing : 10px;
    font-size : 25px;
`


const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content: flex-end;
`;

const MenuItems = styled.div`
    font-size: 18px;
    cursor : pointer;
    margin-left : 35px;
    margin-right : 15px;
    font-weight : bold
`


const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>

                    </Left>
                    <Center>
                        <Logo>KITCHENTORY</Logo>
                    </Center>
                    <Right>
                        <MenuItems>Restaurant : Bread Street</MenuItems>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;