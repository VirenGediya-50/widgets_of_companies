import React, { Component } from 'react'
import CardLayout from '../CommonComponent/CardLayout';
import { Form } from 'react-bootstrap';
import ShowCompanyDetails from './ShowCompanyDetails';

export class CompanyList extends Component {
    render() {
        const { companyList } = this.props;
        return (
            <div>
                {
                    companyList.length !== 0 ? (
                        companyList.map((item, key) => (
                            <div key={key}> 
                                <CardLayout
                                    header={item.CompanyName}
                                    className={'listItem'} 
                                    bodyComponent={<ShowCompanyDetails details={item} />}
                                    isFooter={true}
                                    footerData={item}
                                />
                            </div>
                        )))
                    :
                        <Form.Label>{"There are currently no companies to review."}</Form.Label>
                }
            </div>
        )
    }
}

export default CompanyList
