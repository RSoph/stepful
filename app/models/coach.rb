class Coach < ApplicationRecord

  def self.search_by_initial(intial)
    self.where("lower(name) LIKE '#{intial.downcase}%'").first
  end
end
