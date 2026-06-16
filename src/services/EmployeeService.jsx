import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

const getAuthHeader = () => {

    const token = localStorage.getItem("token")
    console.log("TOKEN:", token)

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const listEmployees = () =>
    axios.get(
        REST_API_BASE_URL,
        getAuthHeader()
    )

export const createEmployee = (employee) =>
    axios.post(
        REST_API_BASE_URL,
        employee,
        getAuthHeader()
    )

export const getEmployee = (employeeId) =>
    axios.get(
        REST_API_BASE_URL + '/' + employeeId,
        getAuthHeader()
    )

export const updateEmployee = (employeeId, employee) =>
    axios.put(
        REST_API_BASE_URL + '/' + employeeId,
        employee,
        getAuthHeader()
    )

export const deleteEmployee = (employeeId) =>
    axios.delete(
        REST_API_BASE_URL + '/' + employeeId,
        getAuthHeader()
    )