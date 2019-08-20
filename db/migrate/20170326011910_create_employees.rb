class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :name
      t.integer :salary
      t.integer :level, default: 0
      t.date :dob

      t.timestamps null: false
    end
  end
end
