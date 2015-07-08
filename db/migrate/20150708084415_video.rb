class Video < ActiveRecord::Migration
  def change
    add_column  :videos, :created, :string
  end
end
