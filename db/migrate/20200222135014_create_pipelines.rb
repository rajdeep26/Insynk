class CreatePipelines < ActiveRecord::Migration[6.0]
  def change
    create_table :pipelines do |t|
      t.string :title
      t.integer :priority
      t.integer :limit

      t.timestamps
    end
  end
end
