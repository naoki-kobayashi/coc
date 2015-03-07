class ChangeColumnBattleFormation < ActiveRecord::Migration
  def change
    rename_column :battle_formations, :freeze, :freeze_num
  end
end
