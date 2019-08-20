class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show]

  def index
    render json: service.index, each_serializer: EmployeeSerializer
  end

  def show
    render json: @employee, serializer: EmployeeSerializer
  end

  def create
    render json: service.create
  end

  def update
    render json: service.update
  end

  def destroy
    render json: service.destroy
  end

  private
    def set_employee
      @employee = Employee.find(params[:id])
    end

    def service
      @servive ||= EmployeeService.new params
    end
end
