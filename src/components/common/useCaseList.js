const useCaseList = {
  useCases: {
    design: [
      {
        title: "Word Hoax",
        thumbnail: "WordHoax_Header.png",
        to: "/wordhoax",
      },
      {
        title: "Alpaca Vids",
        subititle: "Interaction Design",
        thumbnail: "AlpacaVids.png",
        to: "https://invis.io/HZVSXPTM9NF"
      },
    ],
    engineering: [
      {
        title: "Word Hoax",
        thumbnail: "WordHoax_Header.png",
      },
    ],
    art: [
      {
        title: "Word Hoax",
        thumbnail: "WordHoax_Header.png",
      },
    ],
  },
  wordHoax: {
    title: "Word Hoax",
    subtitle: "A more engaging icebreaker",
    headerImage: "WordHoax_Header.png",
    technicalSummary: {
      title: "Overview",
      paragraphs: [
        "Story Squad is an Ed Tech who's goal is to utilize technology to encourage kids to read, write, and engage. Word Hoax is a word game created by Story Squad's Founder, Graig Peterson. Its rules are simple - players submit a definition for a word that's catchy enough to garner a vote from their peers. Points are tallied at the end of the week, and whoever has the most points gains serious bragging rights. Graig believes that starting their daily stand up off with this game helps ready everyone for their often information heavy meetings.",
      ],
      summary: [
        {
          title: "Role",
          array: ["UX/UI Engineer", "Researcher", "User Testing", "Styling"],
        },
        {
          title: "Team",
          array: ["2 Engineers", "2 UX Designers", "1 UX Engineer"],
        },
        {
          title: "Technology",
          array: ["Figma", "Typescript", "Git", "Sass"],
        },
        {
          title: "Timeline",
          array: ["3 months"],
        },
      ],
    },
    useCase: {
      beforePics: ["Handwriting.jpg"],
      paragraphs: [
        {
          title: "Out with the old in the with new",
          paragraph:
            "Originally, Graig used pencil and paper to record each players' definition. Using this recording method often took nearly half the scheduled meeting to complete, and became more difficult to manage as head count increased.",
          images: ["Handwriting.jpg"],
        },
      ],
      criteria: {
        title: "The Task at Hand",
        description:
          "Our team was tasked with creating a simple web app with the following criteria:",
        list: [
          "The app should be self-explanatory, and as light weight as possible",
          "The primary goal is for players' to keep their focus on the host for as much of the game as possible.",
          "The app should require as little attention on the screen as possible",
          "While the focus should be on the 'host' the user's experience should still be engaging and memorable.",
        ],
        images: [
          "Join+Game-lobbycode.jpg",
          "Player-definition-1.jpg",
          "Players+-+lobby-active.jpg",
          "Player-noguess.jpg",
        ],
      },
    },
    sections: [
      {
        id: 0,
        title: "Where to begin?",
        subtitle1: "Brainstorm",
        paragraph1:
          "When starting a greenfield project, it's easy to get excited, and often feature creep sinks in. We wanted to get the game up and running as quickly as possible, so first we had a brainstorm session, where all ideas are great ideas.",
        brainstorm: ["wordHoax_wireframe01.jpg"],
        subtitle2: "User flows",
        paragraph2:
          "Now that we had an endless pool of ideas, we worked on creating the user flow, as well as a flow for the host. Keeping in mind, most of a players' focus should always been on the host, our goal was to be as precise as possible, making sure to think about the 'bad' path as well as the 'good'. ",
        userFlow: ["User_Flow_7bbac3c17d.jpg"],
        subtitle3: "Wireframes",
        paragraph3:
          "With our Userflow set, I tasked with creating the wireframes. Because we were trying to work quickly, I did used Whimsical and Figma. Adding pops of color here and there for emphasis. We also made sure to jot any ideas we had next to each wireframe",
        wireframes: [
          "01_6f7fe1a8ac.JPG",
          "02_bb0722d081.JPG",
          "wordHoax_wireframe00.jpg",
        ],
        subtitle4: "Design System",
        paragraph4:
          "As I worked on wireframes, we worked synchronously on the design system. We had an idea of what colors and fonts we wanted to use, as Story Squad already had branding of their own. We did create a custom styling system and a component library, sticking as true to Story Squad branding as possible.",
        designSystem: [
          "Color+Palette.jpg",
          "Story+Squad+Colors.jpg",
          "Type+styles.jpg",
          "Components.jpg",
        ],
        subtitle5: "Being your own user",
        paragraph5:
          "Being your own user definitely has it's perks. As we played the game we were able to make quick iterations to improve the UI's flow. This was a great exercise using the CI/CD workflow.",
        iterations: ["Frame_109_abe3f5b99a.jpg", "Frame_110_27dc8d4adb.jpg"],
        subtitle6: "The finale screen",
        paragraph6:
          "Inspecting the finale screen's iterations show's how far. We also wanted to have a little fun, so we designed creatures using re-usable components to add some flare to the screen",
        finale: [
          "Big_Finale_2_ecf87e735c.jpg",
          "Big_Finale_6207197c46.jpg",
          "Big_Finale_1_39bfaa25b3.jpg",
          "Big_Finale_26_aae8f86533.jpg",
        ],
        subtitle7: "Bonus",
        paragraph7:
          "As a bonus, here was our monster creation process. We took the same approach that we do to UX, make as many things re-usable as possible.",
        bonus: [
          "mouths_1ff1425263.JPG",
          "bodies_f8bb6ae5d6.JPG",
          "limbs_878e481ad8.JPG",
          "monsters_99dc202457.JPG",
        ],
        subtitle7: "Bonus",
        paragraph7:
          "As a bonus, here was our monster creation process. We took the same approach that we do to UX, make as many things re-usable as possible.",
        bonus: [
          "mouths_1ff1425263.JPG",
          "bodies_f8bb6ae5d6.JPG",
          "limbs_878e481ad8.JPG",
          "monsters_99dc202457.JPG",
        ],
        subtitle8: "Conclusion",
        paragraph8:
          "The original goal was a more expedited process, of Story Squad's daily wake-up routine. The game originally took about 30 mins using Graig's original method. The game can now be played in 5 mins or less. I've followed up with Graig frequently, and Story Squad still plays Word Hoax every meeting they have.",
      },
    ],
  },
};

export default useCaseList;
