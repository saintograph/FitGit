# README

Please ensure Rails 5 and Ruby 2.2.2++ are installed on your machine.

Steps to get this aplication working :

* $ git clone https://github.com/winfredselwyn/fitgit.git

* $ cd fitgit

* $ bundle install

* $ npm install

* $ env PORT=4000 rails s (the Rails server will be on localhost:4000)

* $ rails db:seed

* $ rails s

* $ npm start

* navigate to localhost:3000

* after initial load, disable the rails server ( CTRL + C at the terminal ) to test PWA capabilities.

The application has 2 screens :

* 'Main' screen with all workouts

* 'New Workouts' screen. If a workout is started with 'START WORKOUT' and 'END WORKOUT' while offline, the data is saved and sent to the server when online.

To minify and build it as a PWA, please  



```$ bundle install``` installs the needed Ruby on Rails gems locally.

```$ npm install``` installs npm packages locally.

