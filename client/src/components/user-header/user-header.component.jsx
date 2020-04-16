import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { OptionLink, HeaderContainer } from './user-header.styles';

const UserHeader = ({ currentUser }) => {
    return (
        <HeaderContainer>


            {
                currentUser ?
                    <OptionLink to='/'>Hello, <strong>{currentUser[0].displayName}</strong></OptionLink>
                    :
                    <OptionLink to='/signin'></OptionLink>
            }

        </HeaderContainer>
    );
};


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(UserHeader);
