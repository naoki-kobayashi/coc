# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150415085141) do

  create_table "battle_formations", force: :cascade do |t|
    t.integer  "barbarian_num",    limit: 4, default: 1, null: false
    t.integer  "archer_num",       limit: 4, default: 1, null: false
    t.integer  "giant_num",        limit: 4, default: 1, null: false
    t.integer  "goblin_num",       limit: 4, default: 1, null: false
    t.integer  "wall_breaker_num", limit: 4, default: 1, null: false
    t.integer  "balloon_num",      limit: 4, default: 1, null: false
    t.integer  "wizard_num",       limit: 4, default: 1, null: false
    t.integer  "healer_num",       limit: 4, default: 1, null: false
    t.integer  "dragon_num",       limit: 4, default: 1, null: false
    t.integer  "pekka_num",        limit: 4, default: 1, null: false
    t.integer  "minion_num",       limit: 4, default: 1, null: false
    t.integer  "hog_raider_num",   limit: 4, default: 1, null: false
    t.integer  "valkyrie_num",     limit: 4, default: 1, null: false
    t.integer  "golem_num",        limit: 4, default: 1, null: false
    t.integer  "witch_num",        limit: 4, default: 1, null: false
    t.integer  "lava_hound_num",   limit: 4, default: 1, null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "lightning",        limit: 4, default: 0, null: false
    t.integer  "healing",          limit: 4, default: 0, null: false
    t.integer  "rage",             limit: 4, default: 0, null: false
    t.integer  "jump",             limit: 4, default: 0, null: false
    t.integer  "freeze_num",       limit: 4, default: 0, null: false
  end

  create_table "tag_masters", force: :cascade do |t|
    t.string   "tag",        limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "video_tags", force: :cascade do |t|
    t.integer  "video_id",   limit: 4,   null: false
    t.string   "tag",        limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "video_tags", ["video_id"], name: "index_video_tags_on_video_id", using: :btree

  create_table "videos", force: :cascade do |t|
    t.string   "url",        limit: 255
    t.integer  "video_type", limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_foreign_key "video_tags", "videos"
end
