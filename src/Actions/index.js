import actionType from "./ActionsType";

// Add Company
const addCompany = (details) =>{
    return {
        type : actionType.addCompany,
        payload : details
    }
}

// Add Person Details
const addPersonDetails = (details) =>{
    return {
        type : actionType.addPerson,
        payload : details
    }
}

// Add Company Details
const addCompanyDetails = (details) =>{
    return {
        type : actionType.addCompanyDetails,
        payload : details
    }
}


export default {
    addCompanyDetails,
    addPersonDetails,
    addCompany
}