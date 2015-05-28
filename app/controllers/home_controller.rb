class HomeController < ApplicationController
  before_filter :get_tag_list

  def index
    @video_list = Video.all
    @battle_formation = BattleFormation.all
=begin
    @all_tag_list = VideoTag.select("tag").group("tag")
 raise @all_tag_list.inspect
=end
  end

  def search
    selected_tag_list = params['selectedTagList']
    selected_video_id_list = VideoTag.select("video_id").where(tag: selected_tag_list).group("video_id").having("COUNT(id) >= ?", selected_tag_list.length)
    @video_list = Video.where(id: selected_video_id_list)
    render json:@video_list.to_json()
  end

private
  def get_tag_list
    @all_tag_list = VideoTag.select("tag").group("tag")
  end

end
