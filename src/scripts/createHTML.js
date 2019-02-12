const createEmployeeHTML = (employee) => {
  const output = document.querySelector("#container")
  output.innerHTML += `<h3>${employee.first_name} ${employee.last_name}</h3>`
  output.innerHTML += `<p>Department: ${employee.department.name}</p>`
  output.innerHTML += `<p>Computer: ${employee.computer.make} ${employee.computer.model}`
}

export default createEmployeeHTML