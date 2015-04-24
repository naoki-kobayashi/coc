class SearchTagCell < Cell::ViewModel

  def show
    render
  end

private

  def all_tag_list
    VideoTag.select("tag").group("tag")
  end
end
