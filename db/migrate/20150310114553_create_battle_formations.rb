class CreateBattleFormations < ActiveRecord::Migration
  def change
    create_table :battle_formations do |t|
      t.integer :barbarian_num
      t.integer :archer_num
      t.integer :giant_num
      t.integer :goblin_num
      t.integer :wall_breaker_num
      t.integer :balloon_num
      t.integer :wizard_num
      t.integer :healer_num
      t.integer :dragon_num
      t.integer :pekka_num
      t.integer :minion_num
      t.integer :hog_raider_num
      t.integer :valkyrie_num
      t.integer :golem_num
      t.integer :witch_num
      t.integer :lava_hound_num

      t.timestamps null: false
    end
  end
end
