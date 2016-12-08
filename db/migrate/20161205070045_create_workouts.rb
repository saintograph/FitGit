class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.text :notes
      t.integer :duration
      t.float :distance

      t.timestamps
    end
  end
end
