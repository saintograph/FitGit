class RemoveDistanceFromWorkouts < ActiveRecord::Migration[5.0]
  def change
    remove_column :workouts, :distance, :float
  end
end
