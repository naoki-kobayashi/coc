Video.seed do |s|
  s.id = 1
  s.url = 'https://www.youtube.com/embed/hDNlyRRNTFg'
  s.video_type = 'battle'
end

VideoTag.seed do |s|
  s.id = 1 
  s.video_id = 1
  s.tag = 'TH9'
end
VideoTag.seed do |s|
  s.id = 2 
  s.video_id = 1
  s.tag = '援軍後処理'
end
VideoTag.seed do |s|
  s.id = 3 
  s.video_id = 1
  s.tag = '裏ホグ'
end

TagMaster.seed do |s|
  s.id = 1
  s.tag = 'TH10'
end
TagMaster.seed do |s|
  s.id = 2
  s.tag = 'TH9'
end
TagMaster.seed do |s|
  s.id = 3
  s.tag = 'TH8'
end
TagMaster.seed do |s|
  s.id = 4
  s.tag = '援軍後処理'
end
TagMaster.seed do |s|
  s.id = 5
  s.tag = '援軍先処理'
end
TagMaster.seed do |s|
  s.id = 6
  s.tag = '裏バル'
end
TagMaster.seed do |s|
  s.id = 7
  s.tag = '裏ホグ'
end
TagMaster.seed do |s|
  s.id = 8
  s.tag = 'ジャンプ'
end
