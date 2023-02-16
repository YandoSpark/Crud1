const data = [
  {
    id: 1,

    title: "Bok 1",

    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",

    readCount: 10,
  },

  {
    id: 2,

    title: "Bok 2",

    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",

    readCount: 300,
  },

  {
    id: 3,

    title: "Bok 3",

    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",

    readCount: 80,
  },

  {
    id: 4,

    title: "Bok 4",

    body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",

    readCount: 200,
  },

  {
    id: 5,

    title: "Bok 5",

    body: "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",

    readCount: 109,
  },
];
var input = document.querySelector("#input");

var btn = document.querySelector("#btn").addEventListener("click", function () {
  var søk = input.value;
  const test = data.filter((element) => søk == element.title);
  console.log(test);
  document.querySelector("#title").innerHTML = test[0].title;
});

function articles() {
  data.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.id = `article${element.id}`;
    document.querySelector(".container2").appendChild(divElement);

    const h1Element = document.createElement("h1");
    h1Element.id = `h1Element${element.id}`;
    h1Element.innerHTML = element.title;
    document.querySelector(`#article${element.id}`).appendChild(h1Element);

    const pElement = document.createElement("p");
    pElement.id = `pElement${element.id}`;
    pElement.innerHTML = element.body;
    document.querySelector(`#article${element.id}`).appendChild(pElement);

    const p2Element = document.createElement("p");
    p2Element.id = `p2Element${element.id}`;
    p2Element.innerHTML = "Reading: " + element.readCount;
    document.querySelector(`#article${element.id}`).appendChild(p2Element);

    const btnElement = document.createElement("button");
    btnElement.id = `btnElement${element.id}`;
    btnElement.addEventListener("click", function () {
      var value = window.prompt("Ny Tittle");
      h1Element.innerHTML = value;
    });
    btnElement.innerHTML = "Update";
    document.querySelector(`#article${element.id}`).appendChild(btnElement);
  });
  console.log(document.querySelector(".container2"));
}

articles();
