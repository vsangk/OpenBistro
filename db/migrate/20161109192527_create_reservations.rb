class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :party_size, null: false
      t.integer :time_slot, null: false
      t.date :date_slot, null: false
      t.integer :user_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
