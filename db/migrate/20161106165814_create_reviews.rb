class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body, null: false
      t.integer :user_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
