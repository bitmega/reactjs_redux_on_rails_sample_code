# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Employee.destroy_all

employees = [
  {
    name: "David Tran",
    salary: 210,
    level: 0,
    dob: Time.new(1990, 5, 24)
  },
  {
    name: "Leo Nguyen",
    salary: 750,
    level: 0,
    dob: Time.new(1989, 9, 2)
  },
  {
    name: "Jack Tran",
    salary: 1000,
    level: 10,
    dob: Time.new(1990, 7, 4)
  },
  {
    name: "Nick Doan",
    salary: 3500,
    level: 100,
    dob: Time.new(1980, 12, 24)
  },
  {
    name: "Ken Pham",
    salary: 5000,
    level: 100,
    dob: Time.new(1991, 6, 8)
  }
]

Employee.transaction do
  Employee.create employees
end