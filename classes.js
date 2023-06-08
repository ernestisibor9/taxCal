// LocalStorage
let artist = {
  name1: "Sisqo",
  name2: "Jarule",
  name3: "DMX",
  name4: "Eminem",
  name5: "50cent",
};

localStorage.setItem("musician", JSON.stringify(artist));
localStorage.removeItem("musician");
