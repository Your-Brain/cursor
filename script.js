const take = (e) => document.querySelector(e);
const input = take("#input");
let sub = take(".sub");
let su = take(".su");
let lol = take(".lol");
let mymouse = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const cursorElement = document.createElement("div");
  cursorElement.classList.add("custom-cursor");
  cursorElement.style.left = `${mouseX}px`;
  cursorElement.style.top = `${mouseY}px`;
  cursorElement.style.transform = `scale(${Math.random() * 0.5 + 0.5})`; // Smaller scale

  cursorElement.style.setProperty("--x", `${Math.random() * 400 - 20}px`); // Adjusted range
  cursorElement.style.setProperty("--y", `${Math.random() * 700 - 20}px`); // Adjusted range

  // Random hue for variety
  const hue = Math.random() * 360;
  cursorElement.style.setProperty(
    "--start-color",
    `hsla(${hue}, 100%, 50%, 0.5)`
  );
  cursorElement.style.setProperty(
    "--end-color",
    `hsla(${(hue + 180) % 360}, 100%, 50%, 0.5)`
  );

  document.body.appendChild(cursorElement);

  // Remove the element after animation completes
  setTimeout(() => {
    cursorElement.remove();
  }, 2000);
};

const binarySearch = (get, da) => {
  let start = 0;
  let end = get.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (get[mid] === da) {
      displayResults(get[mid]);
      let b = 1;
      return b;
    } else if (get[mid] < da) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log("Item not found");
};

const displayResults = (item) => {
  console.log(pic);
  const names = Object.keys(pic[item]);
  let accumulatedNames = "";

  for (const name of names) {
    const nam = pic[item][name].name;
    accumulatedNames += `
      <li class="li">
        <a href="#">
          <p>${nam}</p>
        </a>
      </li>
    `;
  }

  const su = document.querySelector(".su"); // Assuming 'su' is a class
  su.innerHTML = accumulatedNames;

  const listItems = su.querySelectorAll("li");
  listItems.forEach((li, index) => {
    li.addEventListener("click", () => {
      const ur = pic[item][names[index]].img;
      console.log(ur);
      const img = `<img src="${ur}" alt="${names[index]}">`;
      lol.innerHTML = img;
      input.value = "";
      sub.style.display = "none";
      input.focus();
    });
  });
};

// Event listener for input changes
input.addEventListener("input", (e) => {
  e.preventDefault();

  const inpu = input.value.trim()[0];
  if (inpu) {
    const da = inpu.toLowerCase();
    // console.log(da);
    if (da >= "a" && da <= "z") {
      sub.style.display = "block";
      binarySearch(Object.keys(pic), da);
      if (binarySearch() == 1) {
        inpu = input.value.trim()[1];
        if (inpu) {
          const da = inpu.toLowerCase();
          // console.log(da);
          if (da >= "a" && da <= "z") {
            sub.style.display = "block";
            binarySearch(Object.keys(pic), da);
          }
        }
      }
    }
  } else {
    sub.style.display = "none";
    console.log("empty");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  input.focus();
});
//brainData
const pic = {
  a: {
    animay: {
      img: "https://images.unsplash.com/photo-1531214159280-079b95d26139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxMjl8MHwxfHNlYXJjaHwxNjd8fGNhcnRvb258ZW58MHx8fHwxNzIxOTI0NzAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      name: "animay",
    },
    animal: {
      img: "https://images.unsplash.com/photo-1486622544617-1d8bf5f8b694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxMjl8MHwxfHNlYXJjaHwyODR8fGFuaW1hbHxlbnwwfHx8fDE3MjE5MjQ2MTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      name: "animal",
    },
    apple: {
      img: "https://images.unsplash.com/photo-1603596310668-27b8395315ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxMjl8MHwxfHNlYXJjaHw4NXx8YXBwbGV8ZW58MHx8fHwxNzIxOTI0NTM2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      name: "apple",
    },
  },
  b: {
    bread: {
      img: "https://images.unsplash.com/photo-1504469288085-feb62ad2903d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODUxMjl8MHwxfHNlYXJjaHwyNDZ8fGJyZWFkfGVufDB8fHx8MTcyMTkyNDc0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      name: "bread",
    },
    book: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWciVOt4oONfbCrU-dPfXOPrh-aYzSRv8iw&s",
      name: "book",
    },
    bird: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo97aa46JaeDY0EojickQOgDjZZBLviBFDg&s",
      name: "bird",
    },
  },
  c: {
    cake: {
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "cake",
    },
    cat: {
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "cat",
    },
    car: {
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "car",
    },
  },
  d: {
    dog: {
      img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "dog",
    },
    daisy: {
      img: "https://images.unsplash.com/photo-1560848269-1284df79f3c1?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "daisy",
    },
    dragon: {
      img: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "dragon",
    },
  },
  e: {
    elephant: {
      img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "elephant",
    },
    egg: {
      img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "egg",
    },
    essay: {
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "essay",
    },
  },
  f: {
    fire: {
      img: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "fire",
    },
    flower: {
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "flower",
    },
    fruit: {
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "fruit",
    },
  },
  g: {
    grass: {
      img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "grass",
    },
    game: {
      img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "game",
    },
    glass: {
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "glass",
    },
  },
  h: {
    house: {
      img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "house",
    },
    heels: {
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "heels",
    },
    hand: {
      img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "hand",
    },
  },
  i: {
    "ice cream": {
      img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "ice cream",
    },
    ivy: {
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "ivy",
    },
    idea: {
      img: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "idea",
    },
  },
  j: {
    jeans: {
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "jeans",
    },
    jar: {
      img: "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "jar",
    },
    jewelry: {
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "jewelry",
    },
  },
  k: {
    key: {
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "key",
    },
    kite: {
      img: "https://images.unsplash.com/photo-1534526283827-ed42d19a3d02?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "kite",
    },
    kiwi: {
      img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "kiwi",
    },
  },
  l: {
    leaf: {
      img: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "leaf",
    },
    library: {
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "library",
    },
    lemon: {
      img: "https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "lemon",
    },
  },
  m: {
    moon: {
      img: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "moon",
    },
    music: {
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "music",
    },
    meow: {
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "meow",
    },
  },
  n: {
    nest: {
      img: "https://images.unsplash.com/photo-1490199444786-9d1faf6fbeb8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "nest",
    },
    night: {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "night",
    },
    note: {
      img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "note",
    },
  },
  o: {
    orange: {
      img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "orange",
    },
    owl: {
      img: "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "owl",
    },
  },
  p: {
    pineapple: {
      img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "pineapple",
    },
    pink: {
      img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "pink",
    },
    pen: {
      img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "pen",
    },
  },
  q: {
    quail: {
      img: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "quail",
    },
    quote: {
      img: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "quote",
    },
    question: {
      img: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "question",
    },
  },
  r: {
    rose: {
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "rose",
    },
    road: {
      img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "road",
    },
    robot: {
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "robot",
    },
  },
  s: {
    sunrise: {
      img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "sunrise",
    },
    sand: {
      img: "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "sand",
    },
    summer: {
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "summer",
    },
  },
  t: {
    tree: {
      img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "tree",
    },
    time: {
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "time",
    },
    town: {
      img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "town",
    },
  },
  u: {
    umbrella: {
      img: "https://images.unsplash.com/photo-1535963631261-1a48d143ecbe?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "umbrella",
    },
    urban: {
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "urban",
    },
    under: {
      img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "under",
    },
  },
  v: {
    van: {
      img: "https://images.unsplash.com/photo-1532941329514-253ec86bea7f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "van",
    },
    vegetables: {
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "vegetables",
    },
    view: {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "view",
    },
  },
  w: {
    water: {
      img: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "water",
    },
    weather: {
      img: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "weather",
    },
    writing: {
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "writing",
    },
  },
  x: {
    xray: {
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "xray",
    },
  },
  y: {
    yellow: {
      img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "yellow",
    },
  },
  z: {
    zoo: {
      img: "https://images.unsplash.com/photo-1552474705-dd8183e00901?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      name: "zoo",
    },
  },
};

const p = document.createElement("i");
p.classList.add("i");
document.body.append(p);
document.addEventListener("mousemove", (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  p.style.left = `${mouseX - p.offsetWidth / 3}px`;
  p.style.top = `${mouseY + p.offsetHeight / 9}px`;

  mymouse(e);
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const mouseX = touch.pageX;
  const mouseY = touch.pageY;

  p.style.left = `${mouseX - p.offsetWidth / 3}px`;
  p.style.top = `${mouseY + p.offsetHeight / 9}px`;

  mymouse(touch);
});

document.addEventListener("click", (mouse) => {
  for (let index = 0; index < 10; index++) {
    mymouse(mouse);
  }
});
