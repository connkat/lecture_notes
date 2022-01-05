class CreateDragonballs < ActiveRecord::Migration[6.1]
  def change
    create_table :dragonballs do |t|

      t.timestamps
    end
  end
end
