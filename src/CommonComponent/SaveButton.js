import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class SaveButton extends Component {
    render() {
        const { title, onClick } = this.props;
        return (
            <Button type="button" variant="secondary" md={6} onClick={onClick}>
                {title}
            </Button>
        )
    }
}

export default SaveButton
