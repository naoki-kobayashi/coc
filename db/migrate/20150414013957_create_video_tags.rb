class CreateVideoTags < ActiveRecord::Migration
  def change
    create_table :video_tags do |t|
      t.references :video, index: true, :null => false
      t.string :tag, :null => false

      t.timestamps null: false
    end
    add_foreign_key :video_tags, :videos
  end
end
