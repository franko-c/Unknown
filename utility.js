// Posts array, put into here to keep index.js tidy
export const posts = [
    {
      id: 1,
      name: "OBINS",
      username: "60PercentHeaven",
      location: "Shenzhen, China",
      avatar: "/images/avatars/anne-pro.avif",
      post: "/images/posts/anne-pro-2.avif",
      alt: "Dummy alt-text to be modified in a later version of page.",
      comment: "Can't go wrong with Cherry MX Browns 🙌 #60PercentClub",
      likes: 50,
    },
    {
      id: 2,
      name: "Ducky",
      username: "QuackAttack",
      location: "Taipei, Taiwan",
      avatar: "/images/avatars/ducky.png",
      post: "/images/posts/mech-1.jpeg",
      alt: "Dummy alt-text to be modified in a later version of page.",
      comment: "Love the RGB on this board 🌈💻 #MechanicalKeyboard",
      likes: 128,
    },
    {
      id: 3,
      name: "Keychron",
      username: "TheWirelessLife",
      location: "Taipei, Taiwan",
      avatar: "/images/avatars/keychron.png",
      post: "/images/posts/ducky-one.jpeg",
      alt: "Dummy alt-text to be modified in a later version of page.",
      comment: "Finally went wireless and I'm never going back 🙌 #KeychronK6",
      likes: 89,
    },
    {
      id: 4,
      name: "GMK",
      username: "LaserLightShow",
      location: "Toronto, Canada",
      avatar: "/images/avatars/gmk.png",
      post: "/images/posts/gmk-laser.webp",
      alt: "Dummy alt-text to be modified in a later version of page.",
      comment: "Keycaps as bright as my future 🔥 #GMKLaser",
      likes: 72,
    },
    {
      id: 5,
      name: "HHKB",
      username: "Topre4Life",
      location: "Tokyo, Japan",
      avatar: "/images/avatars/hhkb.png",
      post: "/images/posts/hhkb.jpeg",
      alt: "Dummy alt-text to be modified in a later version of page.",
      comment: "Nothing beats the Topre feel 🌟 #HHKB",
      likes: 100,
    },
  ];

// Utility function for adding and removing the fill effect on the heart
export function fillHeart(button, liked) {
    if (!liked) {
        button.classList.remove('fa-regular')
        button.classList.add('fa-solid')
        button.classList.add('fill')
    } else {
        button.classList.remove('fill')
        button.classList.remove('fa-solid')
        button.classList.add('fa-regular')
    }
  }
  // Utility function that selects the correct post in posts from the postId data attribute
  export function selectPost(postId) {
    return posts.find((post) => post.id === postId);
  }
