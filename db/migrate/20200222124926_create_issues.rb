class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.string :status
      t.number :priority

      t.timestamps
    end
  end
end
