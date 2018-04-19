
import React from 'react';
import {Col} from'reactstrap';

function LateralContent(props)
{
    return (
        <Col xs="12" md="3"> 
            {props.children}
        </Col>
    );
}

export default LateralContent;
