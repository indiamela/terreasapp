class CreateManuals < ActiveRecord::Migration[5.2]
  def change
    create_table :manuals do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :picture, null: false
      t.timestamps
    end
  end
end
