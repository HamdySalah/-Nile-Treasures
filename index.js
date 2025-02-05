const data = [
  {
      place: 'Cairo - Egypt',
      title: 'PYRAMIDS',
      title2: 'OF GIZA',
      description: 'One of the Seven Wonders of the Ancient World, the Great Pyramids of Giza stand as a testament to Egypt’s rich history and architectural brilliance.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg'
  },
  {
      place: 'Luxor - Egypt',
      title: 'KARNAK',
      title2: 'TEMPLE',
      description: 'The Karnak Temple Complex is a vast open-air museum and the largest religious building ever constructed, dedicated to Amun, Mut, and Khonsu.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Luxor_Temple_R04.jpg'
  },
  {
      place: 'Aswan - Egypt',
      title: 'ABU SIMBEL',
      title2: 'TEMPLES',
      description: 'The twin temples of Abu Simbel, carved out of a mountainside, were built by Pharaoh Ramses II and are a marvel of ancient Egyptian engineering.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Market%2C_Shopping_street%2C_Aswan%2C_Egypt.jpg'
  },
  {
      place: 'Alexandria - Egypt',
      title: 'CITADEL',
      title2: 'OF QAITBAY',
      description: 'Built on the ruins of the legendary Lighthouse of Alexandria, the Citadel of Qaitbay is a stunning medieval fortress by the Mediterranean.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Corniche_of_Alexandria.jpg'
  },
  {
      place: 'Sharm El-Sheikh - Egypt',
      title: 'RAS MOHAMMED',
      title2: 'NATIONAL PARK',
      description: 'A paradise for divers and snorkelers, Ras Mohammed National Park offers crystal-clear waters, stunning coral reefs, and vibrant marine life.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Sharm_El_Sheikh_-_panoramio_%2815%29.jpg'
  },
  {
      place: 'Siwa Oasis - Egypt',
      title: 'SIWA',
      title2: 'OASIS',
      description: 'A hidden desert gem, Siwa Oasis is known for its natural hot springs, palm groves, and the ancient Oracle Temple of Amun.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/%D9%8A%D9%88%D9%85_%D8%AC%D8%AF%D9%8A%D8%AF.jpg'
  },
  {
    place: 'Cairo - Egypt',
    title: 'GAMALIYA',
    title2: 'AL AZHAR MOSQUE',
    description: 'Al-Azhar Mosque, founded in 970 AD in Cairo, is one of the oldest and most influential Islamic institutions. It serves as both a historic place of worship and a renowned center for Islamic learning, attracting scholars from around the world.',
    image: 'https://wallpapercave.com/wp/wp11343849.jpg'
 },
 {
  place: 'Dahab - Egypt',
    title: 'SOUTH SINAI',
    title2: 'BLUE HOLE',
    description: 'A mesmerizing underwater sinkhole near Dahab, is a gateway to the unknown, where daring divers descend into its deep blue abyss. Surrounded by vibrant marine life and coral formations, it offers both beauty and challenge, earning its place as one of Egypt’s most legendary dive sites.',
    image: 'https://th.bing.com/th/id/R.ddcabe8ec0e2a8947136721d9cca7280?rik=i3ikD4PUOIeFsA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_wy_Ec_4wpaU%2fS8c4Ssjjz5I%2fAAAAAAAALeg%2fybk05F0GbyQ%2fs1600%2fIMG_9244.JPG&ehk=YX%2bmW2MjiytaHbcyq31kL6mJZPuWeG6sDmN5hZwOrTM%3d&risl=&pid=ImgRaw&r=0'
 },
 {
  place: 'Fayoum - Egypt',
    title: 'FAYOUM',
    title2: 'ELRAYAN VALLEY',
    description: 'A breathtaking natural reserve with cascading waterfalls, vast sand dunes, and serene lakes. It’s a haven for adventure seekers and nature lovers alike.',
    image: 'https://cairoegypttours.com/wp-content/uploads/2022/03/The-Wadi-Rayan-1.jpg'
 },
 {
  place: 'Cairo - Egypt',
    title: 'EL TAHRIR SQUARE',
    title2: 'THE EGYPTIAN MUSEUM',
    description: 'The Egyptian Museum in Cairo houses an extensive collection of ancient artifacts, including the treasures of Tutankhamun. It is a gateway to Egypt’s rich history, showcasing mummies, statues, and relics from the great pharaohs',
    image: 'https://photos.smugmug.com/photos/i-JNdppsR/0/ba5e6a85/L/i-JNdppsR-L.jpg'
 }
];

const _ = (id)=>document.getElementById(id)
const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"  ></div>`).join('')



const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>

</div>`).join('')


const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}" >${index+1}</div>`).join('')
_('demo').innerHTML =  cards + cardContents
_('slide-numbers').innerHTML =  sildeNumbers


const range = (n) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700; 
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
  });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      setTimeout(() => {
        loop();
      }, 500);
    },
  });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent =
      data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent =
      data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent =
      data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent =
      data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, {
      y: 0,
      delay: 0.1,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-1`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-2`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .desc`, {
      y: 0,
      delay: 0.3,
      duration: 0.4,
      ease,
    });
    gsap.to(`${detailsActive} .cta`, {
      y: 0,
      delay: 0.35,
      duration: 0.4,
      onComplete: resolve,
      ease,
    });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });

    gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) {
          step();
        }
      },
    });
// time news
    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContent(i), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
      }
    });
  });
}

async function loop() {
  await animate(".indicator", 2, { x: 0 });
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
  set(".indicator", { x: -window.innerWidth });
  await step();
  loop();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}
// the blabla
function moveRight() {
  if (clicks === 0) {
    clicks += 1;
    step().then(() => {
      clicks = 0; // Reset clicks after the animation completes
    });
  }
}

function moveLeft() {
  if (clicks === 0) {
    clicks += 1;
    order.unshift(order.pop()); // Move the last item to the front
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    // Update content for the active details
    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;

    // Animate the transition
    gsap.set(detailsActive, { zIndex: 22, opacity: 0, x: -200 });
    gsap.to(detailsActive, { opacity: 1, x: 0, duration: 0.5, ease: "sine.inOut" });
    gsap.to(detailsInactive, { opacity: 0, x: 200, duration: 0.5, ease: "sine.inOut" });

    // Update card positions
    const [active, ...rest] = order;
    const next = rest[0];

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      duration: 0.5,
      ease: "sine.inOut",
    });

    rest.forEach((i, index) => {
      const xNew = offsetLeft + index * (cardWidth + gap);
      gsap.to(getCard(i), {
        x: xNew,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        borderRadius: 10,
        duration: 0.5,
        ease: "sine.inOut",
      });
    });

    // Reset clicks after the animation completes
    setTimeout(() => {
      clicks = 0;
    }, 500);
  }
}
window.addEventListener("resize", () => {
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  const [active, ...rest] = order;
  gsap.set(getCard(active), {
    width: window.innerWidth,
    height: window.innerHeight,
  });

  rest.forEach((i, index) => {
    const xNew = offsetLeft + index * (cardWidth + gap);
    gsap.set(getCard(i), {
      x: xNew,
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
    });
    gsap.set(getCardContent(i), {
      x: xNew,
      y: offsetTop + cardHeight - 100,
    });
  });

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
  });
});
start()