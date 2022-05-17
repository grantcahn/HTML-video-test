import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import mint from '../../../public/assets/Icon/mint-cover.svg';
import thumb from '../../../public/assets/Image/Video-thumb.png';

const mintRef = useRef(null);
const imgRef = useRef(null);
const videoRef = useRef(null);
const homeRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    imgRef.current,
    { x: '-100%' },
    {
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top top',
        scrub: 1,
        pin: true,
        markers: true,
      },
    }
  );
  gsap.to(imgRef.current, {
    scale: 70,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: textRef.current,
      start: 'top top',
      scrub: 1,
      markers: true,
    },
  });
  gsap.fromTo(
    mintRef.current,
    { x: '-100%' },
    {
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: mintRef.current,
        start: 'top top',
        scrub: 1,
        pin: true,
        markers: true,
      },
    }
  );
  gsap.fromTo(
    videoRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top top',
        scrub: 1,
        pin: textRef.current,
        markers: true,
      },
    }
  );
  gsap.to(mintRef.current, {
    opacity: 0,
    scrollTrigger: {
      trigger: textRef.current,
      start: 'top top',
      scrub: 1,
      markers: true,
    },
  });

  gsap.to(homeRef.current, {
    opacity: 1,
    scrollTrigger: {
      trigger: homeRef.current,
      start: 'top top',
      scrub: 1,
      pin: homeRef.current,
      markers: true,
    },
  });
}, []);

<img
        src={mint}
        alt="Mint Cover Img"
        className="z-50 w-full top-0 absolute"
        ref={imgRef}
      />
      <img
        src={thumb}
        alt="Mint Cover Img"
        className="z-40 w-full top-0 absolute"
        ref={mintRef}
      />