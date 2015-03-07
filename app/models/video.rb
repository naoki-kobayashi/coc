class Video < ActiveRecord::Base
  has_one :battle_formation, foreign_key:"id"
  has_many :video_tags, foreign_key:"video_id"
end
