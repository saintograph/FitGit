class RemoveNotesFromWorkouts < ActiveRecord::Migration[5.0]
  def change
    remove_column :workouts, :notes, :text
  end
end
