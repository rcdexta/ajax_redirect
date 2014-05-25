class ApplicationController < ActionController::Base
  protect_from_forgery


  def ajax_redirect_to(url)
    head 302, x_ajax_redirect_url: url
  end

end
