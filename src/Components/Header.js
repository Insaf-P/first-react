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
    margin-inline-end:30px;
    position: relative;
    z-index: 0;
    height: 40px;
    overflow: hidden;
    border: none !important;
    padding: 0 !important;
    background: #ff0000  !important;
    color: #656565;
    background: white;
    border-radius: 8px;
    width: 150px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 4px 50px 0 rgb(0 0 0 / 7%);
    transition: .2s all linear;
    text-decoration: initial;

    :hover::after{
        content: "";
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(90deg, rgba(255,255,255,0)    0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        -webkit-animation: rotate 2s linear infinite;
        animation: rotate 2s linear infinite;
    }

   

   a{
    position: relative;
    z-index: 1;
    height: calc( 100% - 4px );
    width: calc( 100% - 4px );
    top: 2px;
    left: 2px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    color: white;
    background: #ff0000;
    text-decoration: none;

    
    @-webkit-keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    // :hover{
    //    border:2px solid #fff;
    // }
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