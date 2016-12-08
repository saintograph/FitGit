class AddLongitudeToWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :longitude, :decimal
  end
end
