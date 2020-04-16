import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    margin-left: 10px;

    @media screen and (max-width: 800px) {
        height: 10px;
        margin-bottom: 20px;
      }
`;



export const OptionLink = styled(Link)`
 
    cursor: pointer;

    @media screen and (max-width: 800px) {
        font-size: 15px;s
     
    }
`;