class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :gon_load

  private
    def gon_load
      gon.EMPLOYEE_LEVEL_OPTIONS = Employee.levels.map do |k ,v|
        {display: I18n.t("employees.levels.#{k}"), value: v}
      end

      gon.EMPLOYEE_LEVELS = Employee.levels

      gon.AGE_MUST_GREATER_THAN = AGE_MUST_GREATER_THAN
    end
end
