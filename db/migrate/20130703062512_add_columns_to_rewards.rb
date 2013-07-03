class AddColumnsToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :image, :string
    add_column :rewards, :title, :string
  end
end
