class CreateTagMasters < ActiveRecord::Migration
  def change
    create_table :tag_masters do |t|
      t.string :tag

      t.timestamps null: false
    end
  end
end
