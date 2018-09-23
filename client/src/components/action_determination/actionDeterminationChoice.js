const actionDeterminationChoicesAdmin = [
    {
        id: 0,
        choice: "choice0", 
        text: "Legal enforcement action is not required by law"
    },
    {   
        id: 1,
        choice: "choice1",  
        text: "Administrative action wouild be an adequate deterrent to future violations"
    },
    {   
        id: 2,
        choice: "choice2", 
        text: "Lack of qualification is not indicated"
    },
    {
        id: 3,
        choice: "choice3", 
        text: "The apparent violation was inadvertent, i.e., not the result of purposeful conduct"
    },
    {
        id: 4,
        choice: "choice4", 
        text: "A substantial disregard for safety or security was not involved"
    },
    {
        id: 5,
        choice: "choice5", 
        text: "The circumstances of the apparent violation were not aggravated"
    },
    {   
        id: 6,
        choice: "choice6", 
        text: "The alleged violator has a constructive attitude toward compliance"
    },
    { 
        id: 7,
        choice: "choice7", 
        text: "A trend of noncompliance is not indicated"
    }
];

const actionDeterminationChoicesInformal = [
    "The violation is not systemic in nature",
    "The violation was to an internal procedure",
    "Compliance can be acheived with relative ease",
    "The violation requires correction prior to the issuance of a certificate, approval, or authorization"
];

const actionDeterminationChoicesVDR = [
    "The FAA was notified",
    "The violation was inadvertent",
    "The violation does not reflect a lack of Regulated Entity qualification",
    "FAA-approved immediate action was taken",
    "The Regulated Entity has, or is, developing a comprehensive fix"
];

module.exports = {
    actionDeterminationChoicesAdmin: actionDeterminationChoicesAdmin,
    actionDeterminationChoicesInformal: actionDeterminationChoicesInformal,
    actionDeterminationChoicesVDR: actionDeterminationChoicesVDR
}