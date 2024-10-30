class CoachController < ApplicationController

	def show
		coach = Coach.search_by_initial(params["initial"])
		render json: coach
	end
end
