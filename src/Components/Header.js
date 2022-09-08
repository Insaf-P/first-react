import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = (props) => {
    const HeaderSection = styled.div`
        position:absolute;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items: center;
        background-color: transparent;
        text-transform:uppercase;
        Z-index:10;
       

        
    `;
    const LogoSection = styled.div`
    
    img{
        width:90px;
        margin-left:30px;
    }
    `;
    const NavSec = styled.div`
    a{
        margin: 24px;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        color:#cbcaca;
        list-style:none;
        text-decoration:none;
        font-weght:500;
        padding: 10px 0;    


        
        :hover{
            color:#fff;
            animation: pulse 1s ease-out .4s;
        }
        
       
    }
    `;

    const DownloadCta = styled.div`
   a{
    background-color: red;
    color: #fff;
    list-style: none;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 36px;
    font-weight:500;
    margin-right:30px;
    border:2px solid transparent;

    :hover{
       border:2px solid #fff;
    }
   }
    `;
    return (
        <HeaderSection>
            <LogoSection>
                <img src={"./logo-potfolio.png"}/>
                </LogoSection>
            <NavSec>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </NavSec>
            <DownloadCta>
                <a href='#'>Download Cv</a>
            </DownloadCta>
        </HeaderSection>
    );
};