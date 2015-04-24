class VideoTag < ActiveRecord::Base
  belongs_to :video, foreign_key: 'id'
end
