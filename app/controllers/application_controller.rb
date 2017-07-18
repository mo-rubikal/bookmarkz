class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout :choose_layout

  def choose_layout
    current_user ? "users" : "application"
  end

  def require_no_user!
    redirect_to bookmarks_path and return if current_user
  end
end
