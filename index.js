import { renderPosts } from "./createPosts.js";
import { fillHeart, selectPost, posts } from "./utility.js";



// Main output container for posts
const postOutput = document.querySelector(".oldagram-feed");

// Handler/Action router for the button elements
const actionHandlers = {
  like: function (button, userPost) {
    const likeSpan = userPost.querySelector(".likes-count");
    const postId = parseInt(button.dataset.postId);
    const thisPost = selectPost(postId);
    const icon = button.querySelector("i");
    const isLiked = button.dataset.liked === 'true';

    if (!isLiked) {
      button.dataset.liked = 'true';
      thisPost.likes += 1; 
    } else {
      button.dataset.liked = 'false';
      thisPost.likes -= 1;
    }
    likeSpan.textContent = `${thisPost.likes}`;
    fillHeart(icon, isLiked)
    console.log(isLiked, button.dataset.liked)
  }
}


postOutput.addEventListener('click', function (event) {
  // When a button is clicked. find the closest 'action' data attribute (like, comment, share))
  // I was previously linking to the 'i' element with single quotes, but it turns out that I should have been using double quote when linking to button. I thought they were interchangeable so need to check that out. 
  const clickedButton = event.target.closest("button[data-action]");

  // If no 'action' attribute is returned, it's assumed that something other than a button was clicked; does nothing.
  if (!clickedButton) return;

  // Sets the action variable to match the button that was clicked. 
  const action = clickedButton.dataset.action;

  // userPost becomes linked to the closest parent element with the .user-post class; this will always be the container for each of our posts
  const userPost = clickedButton.closest('.user-post');

  actionHandlers[action](clickedButton, userPost);
 
  console.log(clickedButton, action, userPost)
});

// Function to render the feed (calls the renderPosts, with parameters for the post and the postOutput)
function generateFeed(dataObject) {
  for (let i = 0; i < dataObject.length; i++) {
    renderPosts(dataObject[i], postOutput);
  }
}

generateFeed(posts);
