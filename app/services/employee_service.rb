class EmployeeService < BaseService

  def index
    Employee.all.order(:name)
  end

  def create
    employee = Employee.new(employee_params)

    result =  if employee.save
      {
        success: true,
        employee: EmployeeSerializer.new(employee),
        message: I18n.t("messages.employee_created")
      }
    else
      {
        success: false,
        message: employee.error_messages
      }
    end
  end

  def update
    employee = Employee.find(params[:id])

    result = if employee.update_attributes(employee_params)
      {
        success: true,
        employee: EmployeeSerializer.new(employee),
        message: I18n.t("messages.employee_updated")
      }
    else
      {
        success: false,
        message: employee.error_messages
      }
    end
  end

  def destroy
    employee = Employee.find(params[:id])
    result =  if employee.destroy
      {
        success: true,
        message: I18n.t("messages.employee_deleted")
      }
    else
      {
        success: false,
        message: employee.error_messages
      }
    end
  end

  private
    def employee_params
      cooked_params = params.require(:employee).permit(:name, :salary, :dob, :level)
      cooked_params[:level] = cooked_params[:level].to_i
      cooked_params
    end
end