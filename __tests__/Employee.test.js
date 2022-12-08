const Employee = require('../lib/employee');

jest.mock('../lib/employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jared');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('jared@fakeemail.com');
})