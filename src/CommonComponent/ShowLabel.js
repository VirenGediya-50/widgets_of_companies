import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap';

export class ShowLabel extends Component {
    render() {
        const { title, value} = this.props;
        return (
            <div>
                <Col col={12}>
                    <Form.Label className={"detailLabelStyle"}>{title}</Form.Label>
                </Col>
                <Col col={12}>
                    <Form.Label>{value}</Form.Label>
                </Col>
            </div>
        )
    }
}

export default ShowLabel
