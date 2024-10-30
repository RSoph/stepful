class TimeslotController < ApplicationController
  protect_from_forgery with: :null_session

  def create
  	puts("-----------------")
  	puts(params)
    timeslot = Timeslot.create!(params)
    if timeslot
      render json: timeslot
    else
      render json: timeslot.errors
    end
  end
end
