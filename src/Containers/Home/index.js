import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import CardLayout from '../../CommonComponent/CardLayout';
import CreateCompanyForm  from '../../Component/CreateCompanyForm';
import CreatePersonFrom from '../../Component/CreatePersonFrom';
import CompanyList from '../../Component/CompanyList';
import Actions from '../../Actions';
import { withRouter } from 'react-router-dom';


export class Home extends Component {
    render() {
        const { companies, addCompanyDetails } = this.props;
        return (
            <Container className={'main'}>
                <Row >
                    <Col xs={8} >   
                        <CardLayout 
                            xs={8} 
                            header={'Companies'} 
                            className={'companyList'}
                            bodyComponent={
                                <CompanyList companyList={companies} />
                            }
                            addCompanyDetails={(details) => addCompanyDetails(details)}  
                        />
                    </Col>
                    <Col xs={3} className={'formSpace'}>
                        <CardLayout 
                            header={"Create New Company"} 
                            className={'formList'}
                            bodyComponent={<CreateCompanyForm  />}
                        />
                        {(companies.length > 0) &&
                            <CardLayout 
                                header={"Create New Person"}
                                className={'formList'}
                                bodyComponent={
                                    <CreatePersonFrom companyList={companies} />
                                }
                            />
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { companies } = state.CompanyReducer;
    return {
        companies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyDetails : (details) => dispatch(Actions.addCompanyDetails(details))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
