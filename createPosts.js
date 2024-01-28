
function divider() {
    return `
        <span class='divider'></span>
    `
}

function createPostHeader(post) {
    return `
        <div class='post-header'>
            <div class='user-details'>
                <h4>${post.name}</h4>
                <p>${post.location}</p>
            </div>
            <div class='user-avatar'>
                <img src='${post.avatar}' alt=''>
            </div>
        </div>
    `
}

function createPostMain(post) {
    return `
        <div class='post-img'> 
            <img src='${post.post}' alt='${post.comment}'>
            <div class='hover-stats'>
            </div>
        </div>
    `
}

function createPostButtons(post) {
    return `
    <div class='post-buttons'>
        <button data-post-id='${post.id}' data-action='like'><i class="fa-regular fa-heart"></i></button>
        <button data-post-id='${post.id} data-action='comment''><i class="fa-regular fa-comment"></i></button>
        <button data-post-id='${post.id} data-action='share''><i class="fa-regular fa-paper-plane"></i></button>
    </div>
    `
}

function createPostDescription(post) {
    return `
        <div class='post-description'>
            <div class='likes-container'>
                <span class='likes-count' data-liked='false'>${post.likes}</span>
                <span class='likes-label'>likes</span>
            </div>
            <div class='user-comments'>
                <p>${post.username}</p>
                <p>${post.comment}</p>
            </div>
        </div>
    `
}


export function renderPosts(post, postOutput) {
    postOutput.innerHTML += `
    <div class='user-post'>
        ${createPostHeader(post)}
        ${createPostMain(post)}
        ${createPostButtons(post)}
        ${createPostDescription(post)}
        ${divider()}
    </div>
    `
}