class AddColumnBattleFormation < ActiveRecord::Migration
  def change
    add_column :battle_formations, :lightning, :integer, :null => false, :default => 0
    add_column :battle_formations, :healing, :integer, :null => false, :default => 0
    add_column :battle_formations, :rage, :integer, :null => false, :default => 0
    add_column :battle_formations, :jump, :integer, :null => false, :default => 0
  end
end
