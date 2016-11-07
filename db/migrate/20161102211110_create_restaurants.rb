class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city_name, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :neighborhood, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.string :detail_image_url, null: false, default: [], array: true
      t.integer :city_id, null: false, index: true
      t.integer :price, null: false

      t.timestamps null: false
    end
  end
end
