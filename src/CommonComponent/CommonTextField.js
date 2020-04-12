import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class CommonTextField extends Component {
    
    render() {
        const { label, onChange, name, type } = this.props;
        return (
            <Form.Group className={'formField'}>
                <Form.Label className={'labelStyle'}>{label}</Form.Label>
                <Form.Control
                    size={'sm'}
                    onChange={onChange}
                    name={name}
                    type={type}
                />
            </Form.Group>
        )
    }
}

export default CommonTextField
