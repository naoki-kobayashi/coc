class AddFreezeBattleFormation < ActiveRecord::Migration
  def change
    add_column :battle_formations, :freeze, :integer, :null => false, :default => 0
  end
end
