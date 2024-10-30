class TimeslotController < ApplicationController
  protect_from_forgery with: :null_session

  def create
  	puts("-----------------")
  	puts(params)
  	coach = Coach.find_by_name(params["coach_name"])
  	timeslot_data = {coach: coach, start_time: params["timeslot"]}
    timeslot = Timeslot.create!(timeslot_data)
    if timeslot
      render json: timeslot
    else
      render json: timeslot.errors
    end
  end
end
