class HomeController < ApplicationController
  def index
    @videoList = Video.all
    @battle_formation = BattleFormation.all
    @all_tag_list = VideoTag.select("tag").group("tag")
=begin
 raise @all_tag_list.inspect
=end
  end
end
