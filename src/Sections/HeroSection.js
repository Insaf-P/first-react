import * as React from 'react';
import { Header } from '../Components/Header';
import styled from 'styled-components';

export const LandingSection = (props) => {

    const BannerImg = styled.div`
    position: absolute;
    bottom: 10%;
    right:10%;

    img{
        filter: grayscale(1);
        -webkit-transform: rotate(360deg);
        -webkit-transition-duration: 20s;
        -webkit-transition-delay: now;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
    }
    
    `;
    
    const BannerSection = styled.div`
    position:relative;
    width:100%;
    height:100vh;
    background: url(./396538.webp);
    background-repeat: no-repeat;
    background-size: cover;
    `;
    const BnnerText = styled.div`
       margin-inline-end: 400px;
        
    h1{
        color:#fff;
        font-size:64px;
        font-weight:700;
        line-height:70px;
        margin-bottom:20px;
    }
    h2{
        color: #edf8f8;
        font-size: 38px;
        font-weight: 500;
        
    }
    
    h4{
        color:#fff;
        font-size:28px;
        font-weight:500;
        
    }
    h4 span{
        color:#f00;
        font-size:24px;
        font-weight:700;
    }

   
    p{
        font-size:18px;
        line-height: 28px;
        color:#8a8a8a;
    }

    `;

    const BgWall = styled.div`
    
        position: absolute;
        width: 400px;
        bottom: 0;
        height: 340px;
        background-color: #1a1e26;
        z-index: 0;
        border-radius: 9px;
    `;

    const SocialSec = styled.div`
    position:relative;
    color:#fff;
    
    `;

    const LeftSection = styled.div`

    
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translate(-50%);
    transform: translateY(-50%);
    width:50%;
    `;

    const StatsCount = styled.div`
    color:#fff;
    margin:0px;
    h3{
        font-size:30px;
        font-weight:300;
        margin-top:50px;
        margin-bottom:0px;
    }
    p{
        font-size:18px;
        color:#ababab;
    }


    `;

    return (
        <div>
            <Header/>
               <BannerSection>
                    <LeftSection>
                        <BnnerText>
                            <h4>Hello,<span>I'm</span></h4>
                            <h1>Dummy text of the</h1>
                            <h2>Web Developer</h2>

                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </BnnerText>
                        <SocialSec>

                            <h3>Find Me on</h3>
                        <svg width="46" height="46" fill="#fff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        </SocialSec>
                        <StatsCount>
                        <h3>20+</h3>
                        <p>Yaers of Experience</p>
                    </StatsCount>
                    </LeftSection>
                    <BannerImg>
                    <BgWall></BgWall>
                    <img src={"./sumer.png"} style={{opacity:"0"}}/>
                    
                    </BannerImg>
                    
                    
                    
                </BannerSection>
        </div>
    );
};