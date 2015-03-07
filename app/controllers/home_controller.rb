class HomeController < ApplicationController
  def index
    @videoList = Video.all
    @battle_formation = BattleFormation.all
  end
end
