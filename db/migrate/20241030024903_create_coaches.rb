class CreateCoaches < ActiveRecord::Migration[7.2]
  def change
    create_table :coaches do |t|
      t.timestamps
      t.string :name, null: false
      t.string :phone_number, null: false
    end
  end
end
