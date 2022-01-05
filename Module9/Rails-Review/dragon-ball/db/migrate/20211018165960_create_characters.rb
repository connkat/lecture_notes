class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character
      t.string :race
      t.integer :num_dragonballs

      t.references :planet, foreign_key: true, index: true

      t.timestamps
    end
  end
end
