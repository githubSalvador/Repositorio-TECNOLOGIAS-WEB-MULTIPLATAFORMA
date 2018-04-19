
import React from 'react';
import {Col} from'reactstrap';

function MainContent(props)
{
    var x = 12;
    var y = 9;
    return (
        <Col xs={x} md={9}> 
            {props.children}
        </Col>
    );
}

export default MainContent;
