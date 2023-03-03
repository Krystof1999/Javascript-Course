const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "famele",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 30,
    gender: "famele",
    lookingfor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "William Johnson",
    age: 34,
    gender: "male",
    lookingfor: "famele",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
<ul class="list-group">
<li class="list-group0item">Name: ${currentProfile.name}</li>
</ul>
<ul class="list-group">
<li class="list-group0item">Age: ${currentProfile.age}</li>
</ul>
<ul class="list-group">
<li class="list-group0item">Location: ${currentProfile.location}</li>
</ul>
<ul class="list-group">
<li class="list-group0item">Preference: ${currentProfile.lookingfor}</li>
</ul>
`;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
