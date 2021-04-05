// Write your solution in this file!
const employee = {
    name: "Travis",
    streetAddress: "2350 Old Midway rd"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = Object.assign({}, employee, {[key]: value});
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const destructivelyUpdateEmployee = Object.assign( employee, {[key]: value});
    return destructivelyUpdateEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}