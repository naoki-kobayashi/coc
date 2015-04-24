class Video < ActiveRecord::Base
  has_one :battle_formation, foreign_key:"id"
  has_many :video_tags, foreign_key:"id"
=begin  
  has_many :tag_list,
    ->(video) { where video_id: video.id },
    class_name: 'VideoTag',
     foreign_key:"video_id"
=end
end
