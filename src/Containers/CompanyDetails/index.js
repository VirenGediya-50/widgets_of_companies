import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import CardLayout from '../../CommonComponent/CardLayout';
import ShowCompanyDetails from '../../Component/ShowCompanyDetails';
import { withRouter } from 'react-router-dom';
import EmployeeList from '../../Component/EmployeeList';

export class CompanyDetails extends Component {
    render() {
        const { companyDetails } = this.props;
        return (
            <Container>
                <Row>
                    <Col xs={12} >   
                        <CardLayout
                            xs={8} 
                            header={'Profile Overview : '+companyDetails.CompanyName} 
                            className={'listItem'}
                            bodyComponent={
                                <ShowCompanyDetails details={companyDetails}/>
                            }
                        />
                    </Col>
                    <Col xs={12} >   
                        <CardLayout
                            xs={8} 
                            header={'Employee'} 
                            className={'listItem'}
                            bodyComponent={
                                <EmployeeList employeeList={companyDetails.Employees}/>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { companyDetails } = state.CompanyReducer;
    return {
        companyDetails
    }
}

export default connect(mapStateToProps)(withRouter(CompanyDetails))
