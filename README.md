# FITGIT
A PWA (Progressive Web Application) fitness app that logs location and duration of workouts. Built with React and Rails.
## Installation
Please ensure Rails 5 and Ruby 2.2.2++ are installed on your machine.

1. $ git clone https://github.com/winfredselwyn/fitgit.git
2. $ cd fitgit
3. $ bundle install
4. $ cd client
5. $ client\ npm install
6. $ npm start
7. $ cd ..
8. $ env PORT=4000 rails s (the Rails server will be on localhost:4000)
9. $ rails db:seed
10. $ rails s
11. navigate to localhost:3000

## Usage
1. after initial load, disable the rails server ( CTRL + C at the terminal ) to test PWA capabilities.
The application has 2 screens :

1. 'Main' screen with all workouts. Syncs with offline workout after refresh.
2. 'New Workouts' screen. If a workout is started with 'START WORKOUT' and 'END WORKOUT' while offline, the data is saved and sent to the server when online.

To build the JS client, please run:

1. $ cd client
1. $ npm build
2. $ cd build
3. $ python -m http.server 

That's all folks!

## Credits
* [Jeff Posnick](https://github.com/jeffposnick/create-react-pwa)
## License
MIT