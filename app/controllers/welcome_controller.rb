class WelcomeController < ApplicationController

	def show
		if params[:id] == 'redirect'
      ajax_redirect_to another_index_path
    else
      render text: Faker::Lorem.paragraph
		end
	end

end
