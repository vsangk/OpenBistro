class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :city_id, null: false, index: true
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.integer :price, null: false

      t.timestamps null: false
    end
  end
end
