class AddCategoryIdToManual < ActiveRecord::Migration[5.2]
  def change
    add_column :manuals, :category_id, :integer
  end
end
