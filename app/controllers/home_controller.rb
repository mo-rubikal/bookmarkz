class HomeController < ApplicationController
  before_action :require_no_user!

  def index
    @home_page = true
  end
end
