class DogsController < ApplicationController
    def index
        @dogs = Dog.all

        # wrapping allows you to put more in here. Also will now have a heading
        render json: { dogs: @dogs }
    end
end
