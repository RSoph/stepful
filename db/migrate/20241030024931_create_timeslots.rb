class CreateTimeslots < ActiveRecord::Migration[7.2]
  def change
    create_table :timeslots do |t|
      t.timestamps
      t.timestamp :start_time
      t.references :coach, index: false, foreign_key: true, null: true
      t.references :student, index: false, foreign_key: true, null: true
    end
  end
end
