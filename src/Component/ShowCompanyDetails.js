import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowLabel from '../CommonComponent/ShowLabel';

class ShowCompanyDetails extends Component {
    render() {
        const { Address, Revenue, Phone, Employees  } = this.props.details && this.props.details;
        
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <ShowLabel  title={'Address :'} value={Address}/>
                    </Col>
                    <Col xs={6}>
                        <ShowLabel title={'Total Employees :'} value={Employees.length} />
                    </Col>
                </Row>
                <ShowLabel title={'Revenue :'} value={Revenue} />
                <ShowLabel title={'Phone :'} value={Phone} />
            </div>
        )
    }
}

export default ShowCompanyDetails
