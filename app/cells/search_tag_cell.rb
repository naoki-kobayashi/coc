class SearchTagCell < Cell::ViewModel
=begin
  TODO:viewでreact_componentを呼び出すための対応、もうちょっといい方法があるか調査
  cells内でreactコンポーネントが展開されないのはこれのせいかも
=end
  include ::React::Rails::ViewHelper

  def show
    render
  end

private

  def all_tag_list
    VideoTag.select("tag").group("tag")
  end
end
