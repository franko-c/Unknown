# Keyboardgram Feed :camera:

Hey there! Welcome to Keyboardgram, a project I have put together as part of the Scrimba Frontend Development Career Path. It's a mock social media feed where you can 'like' posts and see those likes tally up in real time. I spent way too much time on this mostly because I couldn't get properly into the last solo project and felt bad, but also, because mechanical keyboards are just so pretty. I mean, look at them. Neat, huh?

## What's Cooking? :sparkles:

- Clickable heart icons to show some love to your favorite posts. And how can you not love mechanical keyboards? Right? Right, guys? Hello?
- Those heart icons? They're powered by Font Awesome, which means they look sharp, snazzy and you can create that all important 'filled' effect without having several meltdowns about whether it's best to nest your .svg files in an <i> tag or an <object> and then trying to style them.
- The whole thing is designed to look great on any device*, whether you're on your phone or at your desk.

* * May or may not be true.
  * 
## Behind the scenes :bulb:

Importing functions and data (in the form of the posts object/array) from other files
Made semantic use of data-attributes to isolate functionality of the button clicks and then to act upon those data-attributes as unique identifiers
Event listener declared on the entire output feed, with means of acting only when there is valid input, in this case, clicks on the buttons.
Functions nested in an object, which I'll admit is quite messy and I think there are opportunities for cleaning this part of the code up (it is the actionHandlers Object). Even with some of the functionality separated into UTILITY.js, it still is quite messy.
The logic for the isLiked variable within actionHandlers took me for a spin. I got it working initially, realised the logic was reversed (working but incorrect) and then got stuck in a loop trying to fix it. Got there in the end. I think? You know when you've stared at a word for too long and it loses meaning? Well that's happening with the isLiked functionality, lol. Oh, I was mixing single and double quotes on the variables themselves, for this part, too.
Created a separate file of functions that are responsible for each of the 'posts' elements in the feed, so, Header, Main, Buttons, Post Description, making it easier to modify the individual parts of the post. Not sure if this was entirely necessary or even a common approach?

## Things I would like to add

I'd like to expand upon the comments and share button functionalities.
Instagram on a desktop has this feature where if you hover over a post with the mouse, it shows you the likes and comment values - I would like to recreate that here. Perhaps using hover?\
Connect the feed to a database or localStorage for persistence and also...
Let people add posts to the feed
Light/Dark mode toggle button

Some of my personal stretch goals for this project were touched on in the Build a Mobile App section of the last module but I did not find myself settling well into the solo project. Despite thoroughly enjoying the section itself, and connecting with the instructor, I could not wrap my head around Firebase well enough to the point where I can boot a project file up and get it all up and running myself, so I was peeking a lot, after failing to get things working reading the docs, and I wasn't happy. 

