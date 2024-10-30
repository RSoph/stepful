class Coach < ApplicationRecord
  has_many :timeslots

  def self.find_by_name(name)
    self.where("lower(name) LIKE '#{name.downcase}%'").first
  end
end
