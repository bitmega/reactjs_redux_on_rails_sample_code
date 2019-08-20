class Employee < ActiveRecord::Base
  validates :name, presence: true, length: {minimun: 2, maximum: 256}
  validates :salary, presence: true, numericality: {greater_than: 0, less_than_or_equal_to: 100000}
  validates :dob, presence: true

  validate :age_must_greater_than_18

  enum level: {
    fresher: 0,
    junior: 10,
    senior: 100
  }

  def error_messages
    self.errors.full_messages.present? ?
      self.errors.full_messages :
      I18n.t("messages.common_error")
  end

  private
    def age_must_greater_than_18
      self.errors.add :age, I18n.t("employees.must_greater_than_18") unless (Time.now.year - self.dob.year) >= AGE_MUST_GREATER_THAN
    end
end
