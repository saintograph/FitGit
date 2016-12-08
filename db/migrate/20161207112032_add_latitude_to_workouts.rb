class AddLatitudeToWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :latitude, :decimal
  end
end
