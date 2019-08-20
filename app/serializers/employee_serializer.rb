class EmployeeSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper
  attributes :id, :name, :salary, :dob, :level, :dob_human_readable, :level_key, :salary_human_readable

  def level
    # get enum value saved in database
    object[:level]
  end

  def level_key
    object.level
  end

  def salary_human_readable
    number_to_currency object.salary, precision: 0, unit: ""
  end

  def dob_human_readable
    object.dob.try(:strftime, DATE_FORMAT)
  end
end
