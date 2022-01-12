# Module9W24 - Rails Breakout

I know the transition to RoR hasn't been easy (especially with the 2 week break right as you were getting into it), so I wanted to use this breakout session as an opportunity to help move the dial a bit on your June projects for something that I have found to be a pain point for a lot of students in past. We'll start by a quick review of the 2 person math game (I will go through tips that I like to use to solve some tricky logic, but if you have a different solution that is totally fine!) and then I will walk through how to create an enhanced_order in Jungle. 

- [lecture recording](https://vimeo.com/665052882/b5d915fb15)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module9/Rails-Breakout)

## TODO
- [] 2 Person Math Game
- [] Enhanced Order

## 2 Person Math Game

I love this challenge because it can be tackled 1000 different ways. My answers below aren't necessarily the only correct way of doing this, but I have found it to be a good way of thinking about it. The important part here is to make sure that your classes make sense for what you are building and don't cross boundaries with the other classes.

### Logic
- 3 classes: Player, Question, Game
- Player: handles creating a player with a name (P1/P2) and score/lives (3/3). I also like to define `lose_life` method to -1 from score/lives
- Question: has a method `ask` and a method `validate`. To make this work, you must define two random numbers and their sum in your `init` so they are accessible in the entire class.
- Game: this has the bulk of the logic. It calculates turns and keeps score and also instantiates new players and questions.
- Some tricks that I have found helpful:
    * `@players = []` ---> this helps tie P1 to `@players[0]` and P2 to `@players[1]`
    * `@turn = 0` to start, then to keep track of who's turn it is: 
    ```
    current_player = @players[@turn %2]
    other_player = @players[(@turn + 1) % 2]
    ```
    * while !game_over do
    ...
    <!-- when a player dies -->
    player.lose_life
    if current_player.score == 0
    @game_over == true
    break
    puts <insert text>
    ```

## Enhanced Order
The linked video will have most of this walkthrough for you. I chose to work out this logic in the `order_controller` but you can put it in the `application_controller` where the `enhanced_card` already lives.  You do need access to `order`, so you will have to see if that is possible in the app controller. Remember to use your `helper_method` so that this method is accessible to your views, and then don't build a brand new table!!! Copy the existing table for cart over and update it as needed. This will save you mucho time. 


## Helpful Links 
- [helper_method](https://apidock.com/rails/ActionController/Helpers/ClassMethods/helper_method)