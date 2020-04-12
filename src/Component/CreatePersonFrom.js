import React, { Component } from 'react';
import { connect } from 'react-redux';
import SaveButton from '../CommonComponent/SaveButton';
import CommonTextField from '../CommonComponent/CommonTextField';
import CommonDropdown from '../CommonComponent/CommonDropdown';
import Actions from '../Actions';

class CreatePersonFrom extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            address : '',
            companyName: ''
        }
    }

    handleValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSaveClick = (e) => {
        const { name, address, companyName } = this.state;
        if(name === "" || address === "" || companyName ===''){
            this.setState({
                error : 'All fields are required.'
            })
        }else{
            const details = {
                PersonName : name,
                CompanyName : companyName,
                Address : address,
            }
            this.setState({
                name : '', address: '', companyName : ''
            });
            this.props.addPersonDetails(details);
        }
    }

    render() {
        const { name, address, companyName } = this.state;
        const { companyList } = this.props;
        let companyNameList = companyList.map(item => item.CompanyName);
        return (
            <div>
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
                    <CommonDropdown 
                        value={companyName} 
                        name={'companyName'}
                        list={companyNameList}
                        onChange={this.handleValue} />
                </div>
                <SaveButton title={'Save'} onClick={this.onSaveClick} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPersonDetails : (details) => dispatch(Actions.addPersonDetails(details))
    }
}

export default connect(null, mapDispatchToProps)(CreatePersonFrom)
