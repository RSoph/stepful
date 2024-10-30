class CoachController < ApplicationController

	def index
		render json: Coach.all()
	end

	def show
		@coach = Coach.includes(:timeslots).find(params["id"])
		render json: @coach
	end
end
