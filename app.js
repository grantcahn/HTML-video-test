gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('section');

sections.forEach((section) => {
  let canvas = section.querySelector('canvas');
  canvas ? initCanvas(section, canvas) : initOther(section);
});

function initCanvas(section, canvas) {
  let context = canvas.getContext('2d');
  canvas.width = 3840;
  canvas.height = 1882;

  let frameCount = 275;
  const currentFrame = (index) =>
    `./Video-Scroll/MINT_Background_${(index + 1)
      .toString()
      .padStart(5, '0')}.jpg`;

  let images = [];
  let airpods = {
    frame: 0,
  };
  console.log(currentFrame);
  for (let i = 0; i < frameCount; i++) {
    let img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  gsap
    .timeline({
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: '+=7000',
        markers: true,
      },
    })
    .to(airpods, 13, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
    })
    .from('.hl1', 0.2, { autoAlpha: 0, y: '20px' }, 0.5)
    .to('.hl1', 1.8, { y: '-30px' }, 0.7)
    .to('.hl1', 0.2, { autoAlpha: 0, y: '-50px' }, 2.5)
    .from('.hl2', 0.2, { autoAlpha: 0, y: '20px' }, 3)
    .to('.hl2', 1.8, { y: '-30px' }, 3.2)
    .to('.hl2', 0.2, { autoAlpha: 0, y: '-50px' }, 5)
    .from('.hl3', 0.2, { autoAlpha: 0, y: '20px' }, 5.5)
    .to('.hl3', 1.8, { y: '-30px' }, 5.7)
    .to('.hl3', 0.2, { autoAlpha: 0, y: '-50px' }, 7.5)
    .from('.hl4', 0.2, { autoAlpha: 0, y: '20px' }, 8)
    .to('.hl4', 1.8, { y: '-30px' }, 8.2)
    .to('.hl4', 0.2, { autoAlpha: 0, y: '-50px' }, 10);

  images[0].onload = render;

  function render() {
    context.drawImage(images[airpods.frame], 0, 0);
    console.log(images);
  }
}

function initOther(section) {
  ScrollTrigger.create({
    trigger: section,
    pin: true,
    end: '+=200%',
  });
}
