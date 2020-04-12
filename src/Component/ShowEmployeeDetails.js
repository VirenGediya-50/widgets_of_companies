import React, { Component } from 'react'
import ShowLabel from '../CommonComponent/ShowLabel';

export class ShowEmployeeDetails extends Component {
    render() {
        const { Address } =this.props.details;
        return (
            <div>
                <ShowLabel  title={'Address :'} value={Address}/>
            </div>
        )
    }
}

export default ShowEmployeeDetails
