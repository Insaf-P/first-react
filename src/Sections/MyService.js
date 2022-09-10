import * as React from 'react';
import { Header } from '../Components/Header';
import { HeroSection } from '../Sections/HeroSection';
import styled from 'styled-components';

export const MyService = (props) =>{

const ServiceSection = styled.div`
    color:#fff;
    width:100%;
`;


return(
    <div>
        <ServiceSection>
          <h1>My Service</h1>  
        </ServiceSection>
    </div>
);

};