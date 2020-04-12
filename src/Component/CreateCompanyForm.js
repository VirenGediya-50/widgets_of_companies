import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommonTextField from '../CommonComponent/CommonTextField'
import SaveButton from '../CommonComponent/SaveButton';
import Actions from '../Actions';
import { Form } from 'react-bootstrap';

class CreateCompanyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            address: '',
            revenue: '',
            phone: '',
            error : ''
        }
    }

    handleValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSaveClick = (e) => {
        const { name, address, revenue, phone } = this.state;
        if(name === "" || address === "" || revenue ==='' || phone === ''){
            this.setState({
                error : 'All fields are required.'
            })
        }else{
            const details = {
                CompanyName :name,
                Address : address,
                Revenue : revenue,
                Phone : phone,
                Employees : []
            }
            this.setState({
                name : '', address: '', revenue: '', phone:''
            });
            this.props.addCompany(details);
        }

    }
 
    render() {
        const { name, address, revenue, phone } = this.state;
        return (
            <Form >
                <div>
                    <CommonTextField 
                        label={"Name :"}
                        onChange={this.handleValue}
                        value={name}
                        name={'name'}
                        type={"text"}
                    />
                    <CommonTextField 
                        label={"Address :"}
                        onChange={this.handleValue}
                        name={'address'}
                        value={address}
                        type={"text"}
                    />
                    <CommonTextField 
                        label={"Revenue :"}
                        onChange={this.handleValue}
                        value={revenue}
                        name={'revenue'}
                        type={"number"}
                    />
                    <CommonTextField 
                        label={"Phone :"}
                        onChange={this.handleValue}
                        name={'phone'}
                        value={phone}
                        type={"tel"}
                    />
                </div>
                <SaveButton 
                    title={"Save"}
                    onClick={this.onSaveClick}
                />
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompany : (details) => dispatch(Actions.addCompany(details))
    }
}

export default connect(null, mapDispatchToProps)(CreateCompanyForm)
