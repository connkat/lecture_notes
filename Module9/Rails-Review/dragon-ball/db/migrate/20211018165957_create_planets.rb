class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :planet_name

      t.timestamps
    end
  end
end
