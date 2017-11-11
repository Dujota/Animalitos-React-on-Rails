class CreateAnimals < ActiveRecord::Migration[5.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :image
      t.string :icon
      t.string :bg_color
      t.string :sound

      t.timestamps
    end
  end
end
