export type IntroConfig = {
  title: string;
  eyebrow: string;
  note: string[];
  coverImage: string;
  backgroundTrack: string;
};

export type MemoryChapter = {
  id: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  caption: string;
  supportingImages: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GallerySection = {
  id: string;
  title: string;
  intro: string;
  images: GalleryImage[];
};

export type FinaleConfig = {
  trollImage: string;
  trollMessage: string;
  finalVideoSrc: string;
  finalTitle: string;
  finalMessage: string;
  closingCta: string;
};

export const introConfig: IntroConfig = {
  eyebrow: "Reserved for the birthday girl",
  title: "Your Birthday Memory Vault",
  note: [
    "I didn't want to just send you a message.",
    "I wanted to build you a place to walk through.",
    "A few memories, a little drama, and one illegal joke later...",
    "here we are.",
  ],
  coverImage: "/nuwii/01-cover-note/IMG_0333.jpg",
  backgroundTrack: "/music.mp3",
};

export const memoryChapters: MemoryChapter[] = [
  {
    id: "memory-1",
    title: "A Moment I Still Replay",
    subtitle: "The kind of memory that quietly loops in my head.",
    videoSrc: "/nuwii/02-memory-video-1/IMG_0160.mp4",
    caption:
      "This one feels like proof that even normal moments become brighter when they're with you.",
    supportingImages: [
      "/nuwii/08-couple-photos/IMG_20240622_082517.jpg",
      "/nuwii/08-couple-photos/IMG_0188.jpg",
      "/nuwii/08-couple-photos/IMG_4137.jpg",
    ],
  },
  {
    id: "memory-2",
    title: "My Favorite Kind Of Chaos",
    subtitle: "Equal parts comfort, nonsense, and impossible cuteness.",
    videoSrc: "/nuwii/03-memory-video-2/IMG_1324.mp4",
    caption:
      "You somehow make the most unserious moments feel like core memories.",
    supportingImages: [
      "/nuwii/08-couple-photos/IMG_20240908_220442.jpg",
      "/nuwii/08-couple-photos/IMG_8784.JPG",
      "/nuwii/08-couple-photos/2d082917-d746-48ad-8a2c-4818e19f9391.JPG",
    ],
  },
  {
    id: "memory-3",
    title: "Us Being Unfairly Cute",
    subtitle: "This chapter had no chance of being normal.",
    videoSrc: "/nuwii/04-memory-video-3/IMG_2209.mp4",
    caption:
      "Some memories don't need help becoming special. They were born that way.",
    supportingImages: [
      "/nuwii/08-couple-photos/IMG_2954.JPG",
      "/nuwii/08-couple-photos/2ef0e941-f203-46f3-96de-7a9d00485454.JPG",
      "/nuwii/08-couple-photos/811a84b0-1e52-4928-930d-ede94125f71e.JPG",
    ],
  },
  {
    id: "memory-4",
    title: "One More For The Vault",
    subtitle: "Soft evidence that life is better with you in it.",
    videoSrc: "/nuwii/05-memory-video-4/VN20240917_210645.mp4",
    caption:
      "This is the part where I pretend to be calm while secretly being very gone for you.",
    supportingImages: [
      "/nuwii/08-couple-photos/1734929986716.jpg",
      "/nuwii/08-couple-photos/0ff54ba6-a265-4f38-a2c2-6ec5c9388d8b.jpg",
      "/nuwii/08-couple-photos/35044e33-73bc-485a-b7f0-359bcaae14bb.JPG",
    ],
  },
];

export const coupleGallery: GallerySection = {
  id: "couple-gallery",
  title: "Then There Was Us",
  intro:
    "The pretty chapter. The one where I collect the versions of us that I never want to misplace.",
  images: [
    {
      src: "/nuwii/08-couple-photos/IMG_20240622_082517.jpg",
      alt: "A warm couple photo together",
      caption: "proof that my favorite place keeps changing shape",
    },
    {
      src: "/nuwii/08-couple-photos/IMG_20240908_220442.jpg",
      alt: "A candid couple memory",
      caption: "very normal people, not obsessed at all",
    },
    {
      src: "/nuwii/08-couple-photos/IMG_8784.JPG",
      alt: "A portrait memory of both of you",
      caption: "one of the dangerously cute ones",
    },
    {
      src: "/nuwii/08-couple-photos/IMG_4137.jpg",
      alt: "A sweet photo of both of you together",
    },
    {
      src: "/nuwii/08-couple-photos/IMG_2954.JPG",
      alt: "A polished memory of the two of you",
      caption: "this should have come with a warning label",
    },
    {
      src: "/nuwii/08-couple-photos/2ef0e941-f203-46f3-96de-7a9d00485454.JPG",
      alt: "A portrait-oriented couple photo",
    },
    {
      src: "/nuwii/08-couple-photos/IMG_0188.jpg",
      alt: "An outdoor photo of both of you",
      caption: "still one of my favorite frames",
    },
    {
      src: "/nuwii/08-couple-photos/1734929986716.jpg",
      alt: "A relaxed couple snapshot",
    },
  ],
};

export const portraitGallery: GallerySection = {
  id: "portrait-gallery",
  title: "The Birthday Girl",
  intro:
    "A very objective collection of evidence that you are stunning, dramatic, and entirely too easy to adore.",
  images: [
    {
      src: "/nuwii/09-her-photos/IMG_8334.jpg",
      alt: "Portrait of Nuwi",
      caption: "main character energy",
    },
    {
      src: "/nuwii/09-her-photos/IMG_8341.jpg",
      alt: "Portrait of Nuwi smiling",
      caption: "the face that keeps rearranging my day",
    },
    {
      src: "/nuwii/09-her-photos/IMG_2135.jpg",
      alt: "A bright solo photo of Nuwi",
    },
    {
      src: "/nuwii/09-her-photos/bae985f1-0658-4102-9a05-522d769499ee.JPG",
      alt: "An elegant portrait of Nuwi",
      caption: "unreasonably pretty behavior",
    },
    {
      src: "/nuwii/09-her-photos/a03a10fb-fa18-45cd-b429-724beefa1dff.jpg",
      alt: "A candid solo photo of Nuwi",
    },
    {
      src: "/nuwii/09-her-photos/f7a8ce87-285b-4641-bd4c-5908bc64c78c.jpg",
      alt: "Portrait of Nuwi outdoors",
      caption: "the gallery could have ended here and still won",
    },
    {
      src: "/nuwii/09-her-photos/37808493-f54c-45e8-9db0-98d808a0af89.jpg",
      alt: "A relaxed portrait of Nuwi",
    },
    {
      src: "/nuwii/09-her-photos/1739454517297.jpg",
      alt: "A solo snapshot of Nuwi",
    },
  ],
};

export const funGallery: GallerySection = {
  id: "fun-gallery",
  title: "Fun Nuwii Intermission",
  intro:
    "Because your best feature is still the way you can be pretty and hilarious at the exact same time.",
  images: [
    {
      src: "/nuwii/10-fun-nuwii/IMG_2745.JPG",
      alt: "Funny playful Nuwii photo",
      caption: "peak nonsense, zero notes",
    },
    {
      src: "/nuwii/10-fun-nuwii/851ba457-1ff8-468e-a87e-152917a924f1.JPG",
      alt: "Playful candid image of Nuwii",
      caption: "this is why life with you never stays boring",
    },
    {
      src: "/nuwii/10-fun-nuwii/a7947a91-0b6c-4744-9322-59f7ec4144cb.jpg",
      alt: "A funny wide photo of Nuwii",
      caption: "beautiful, yes. normal, clearly not",
    },
  ],
};

export const finaleConfig: FinaleConfig = {
  trollImage: "/nuwii/07-troll-blink/1739454518551.jpg",
  trollMessage: "Unauthorized image removed. Proceeding with better content.",
  finalVideoSrc: "/nuwii/06-final-kiss/IMG_5311.mp4",
  finalTitle: "For Your Eyes Only",
  finalMessage:
    "Wish you a Happy birthday my Love, Nuwiiii Cutie PIEEE. I know you are going through a hard time with your studies, friends and life. But dont worry my love, it is life. We have hardships that we need to conquer	 to be a better unstoppable person. That is what life gives grow us, build us a better version of our selves. I will be there besides you forever until we grow end and reach the ends of our times. I am sorry for your disappointment of my wish getting late. REMEMBER, GOOD THINGS TAKE TIME. Even the wishes my love. I LOVE YOU LOADS. ",
  closingCta: "Start from the beginning",
};
