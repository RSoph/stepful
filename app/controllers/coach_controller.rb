class CoachController < ApplicationController

	def index
	end

	def show
		@coach = Coach.includes(:timeslots).find(params["id"])
		render json: @coach
	end
end
