import actionType from "../Actions/ActionsType";

const INITIAL_STATE = {
    companies : [],
    companyDetails : {}
};
 
const CompanyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case actionType.addCompany:
            let companies = state.companies;
            companies.push(action.payload);
            return {...state, companies : [...companies]};

        case actionType.addPerson: 
            let allCompanies = state.companies;
            let selectIndex = allCompanies.findIndex(item => item.CompanyName === action.payload.CompanyName);
            allCompanies[selectIndex].Employees.push(action.payload);
            return {...state, companies : [...allCompanies]};

        case actionType.addCompanyDetails:
            return {...state, companyDetails: action.payload};

        default:
            return state
    }
}

export default CompanyReducer;