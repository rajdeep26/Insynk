class Api::V1::IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :edit, :update, :destroy]
  def index
  end
  def show
  end
  def create
  end
  def update
  end
  def destroy
  end
  private
    def set_todo_item
      @issue = Issue.find(params[:id])
    end
end
