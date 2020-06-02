class TopController < ApplicationController
  def index
    @categories = Category.all
    @manuals = Manual.all
  end
  def new
  end
  def create
    Manual.create(title: manual_params[:title],picture: manual_params[:picture],content: manual_params[:content], category_id: current_category.id)
  end

  private
  def category_params
    params.permit(:name)
  end
  def manual_params
    params.permit(:title,:picture,:content)
  end
end