import React from 'react';
import { withRouter } from 'react-router-dom';
// import './menu-item.styles.scss';
import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

    return (
        <MenuItemContainer onClick={() =>
            history.push(`${match.url}${linkUrl}`)
        } size={size}>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
            <Content>
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </Content>
        </MenuItemContainer >
    )
}

export default withRouter(MenuItem);
