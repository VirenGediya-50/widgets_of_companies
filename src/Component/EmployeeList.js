import React, { Component } from 'react'
import { CardLayout } from '../CommonComponent/CardLayout'
import ShowEmployeeDetails from './ShowEmployeeDetails'
import { Form } from 'react-bootstrap';

export class EmployeeList extends Component {
    
    render() {
        const { employeeList } = this.props;
        return (
            <div>
            {
                employeeList.length !== 0 ?
                (
                    employeeList.map((item, key) => (
                        <div key={key}> 
                            <CardLayout
                                header={item.PersonName}
                                className={'listItem'} 
                                bodyComponent={
                                    <ShowEmployeeDetails details={item} />
                                }
                            />
                        </div>
                    ))   
                )
                :
                <Form.Label>{"There are currently no Employee details."}</Form.Label>
            }   
            </div>
        )
    }
}

export default EmployeeList
