class BattleFormation < ActiveRecord::Migration
  def change
    change_column :battle_formations, :barbarian_num, :integer, null: false, default: 1
    change_column :battle_formations, :archer_num, :integer, null: false, default: 1
    change_column :battle_formations, :giant_num, :integer, null: false, default: 1
    change_column :battle_formations, :goblin_num, :integer, null: false, default: 1
    change_column :battle_formations, :wall_breaker_num, :integer, null: false, default: 1
    change_column :battle_formations, :balloon_num, :integer, null: false, default: 1
    change_column :battle_formations, :wizard_num, :integer, null: false, default: 1
    change_column :battle_formations, :healer_num, :integer, null: false, default: 1
    change_column :battle_formations, :dragon_num, :integer, null: false, default: 1
    change_column :battle_formations, :pekka_num, :integer, null: false, default: 1
    change_column :battle_formations, :minion_num, :integer, null: false, default: 1
    change_column :battle_formations, :hog_raider_num, :integer, null: false, default: 1
    change_column :battle_formations, :valkyrie_num, :integer, null: false, default: 1
    change_column :battle_formations, :golem_num, :integer, null: false, default: 1
    change_column :battle_formations, :witch_num, :integer, null: false, default: 1
    change_column :battle_formations, :lava_hound_num, :integer, null: false, default: 1
  end
end
