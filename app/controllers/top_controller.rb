class TopController < ApplicationController
  def index
    @categories = Category.all
    @manuals = Manual.all
  end
  def new
    
  end
end