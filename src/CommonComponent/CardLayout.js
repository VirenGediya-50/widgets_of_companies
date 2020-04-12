import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import Actions from '../Actions';
import { withRouter } from 'react-router-dom';

export class CardLayout extends Component {

    handleRedirection = (details) => {
        this.props.addCompanyDetails(details);
        this.props.history.push("/company_overview")
    }

    render() {
        const { header, className, xs, bodyComponent, isFooter, footerData } = this.props;
        return (
            <Card  xs={xs || 12} className={className}>
                <Card.Header className={'cardHeader'}>
                    {header}
                </Card.Header>

                <Card.Body >
                   {bodyComponent}
                </Card.Body>

                {isFooter &&
                <Card.Footer onClick={() => this.handleRedirection(footerData)}>
                    Company Overview
                </Card.Footer>}
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyDetails : (footerData) => dispatch(Actions.addCompanyDetails(footerData))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(CardLayout))
