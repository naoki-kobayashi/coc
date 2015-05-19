class Video < ActiveRecord::Base
  has_one :battle_formation, foreign_key:"id"
  has_many :video_tags, class_name: VideoTag, foreign_key:"video_id"
  has_many :tag_list,
    ->(video) { where video_id: video.id },
    class_name: 'VideoTag',
     foreign_key:"video_id"

  def as_json options = {}
    super :only => ['id', 'url'],
    :include => {
      :tag_list => {
        :only => ['tag']
      }
    }
  end

end
