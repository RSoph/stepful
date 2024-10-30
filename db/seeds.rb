# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Coach.create(name: 'Alice', phone_number: 7185550000)
Coach.create(name: 'Brian', phone_number: 7185550001)
Coach.create(name: 'Charlene', phone_number: 7185550002)
Coach.create(name: 'David', phone_number: 7185550003)

Student.create(name: 'Edward', phone_number: 7185550004)
Student.create(name: 'Francine', phone_number: 7185550005)
Student.create(name: 'Gerald', phone_number: 7185550006)
Student.create(name: 'Harriet', phone_number: 7185550007)