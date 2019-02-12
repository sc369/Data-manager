import createEmployeeHTML from "./createHTML.js"

const getContacts = () => {
  return fetch("http://127.0.0.1:8088/employees?_expand=department&&_expand=computer")
    .then(res => res.json())
    .then(employees => {
      employees.forEach(employee => {
        createEmployeeHTML(employee)
      })
    })
}

export default getContacts