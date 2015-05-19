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

private
  def get_tag_list
    @all_tag_list = VideoTag.select("tag").group("tag")
  end

end
