class SearchTagCell < Cell::ViewModel
=begin
  TODO:view$B$G(Breact_component$B$r8F$S=P$9$?$a$NBP1~!"$b$&$A$g$C$H$$$$J}K!$,$"$k$+D4::(B
  cells$BFb$G(Breact$B%3%s%]!<%M%s%H$,E83+$5$l$J$$$N$O$3$l$N$;$$$+$b(B
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
