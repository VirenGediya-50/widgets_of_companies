import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CommonDropdown extends Component {
    render() {
        const { list, value, onChange, name } = this.props;
        return (
            <Form.Group className={'dropdown'}>
                <Form.Control as="select" size={'sm'} value={value} name={name} onChange={onChange}>
                    <option>{"Select Employer"}</option>
                    {
                        list && list.map(item =>
                            <option key={item}>{item}</option>
                        )
                    }
                </Form.Control>
          </Form.Group>
        )
    }
}

export default CommonDropdown;
