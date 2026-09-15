import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";

export type WeddingEvent = {
  id: "sangeet" | "mehendi" | "shaadi";
  name: string;
  marathiTitle: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  itinerary: string;
  routeUrl: string;
};

export const weddingConfig = {
  bride: "Sukruta",
  groom: "Kilki",
  brideFormal: "Chi. Sou. Kan. Sukruta",
  groomFormal: "Chi. Kilki",
  dateDisplay: "5 December 2026",
  location: "Jaipur, Rajasthan",
  timezone: "Asia/Kolkata",
  countdownTarget: "2026-12-05T19:00:00+05:30",

  deities: {
    shreeGanesh: "ॐ श्री गणेशाय नमः",
    blessings: [
      "श्री संगमेश्वर प्रसन्न",
      "श्री तुळशांगिरी प्रसन्न",
      "श्री रेणुकादेवी प्रसन्न",
      "श्री शिवचिदंबर प्रसन्न",
    ],
  },

  family: {
    heavenlyBlessings: "Smt. Sudha & Sm. Arvind Kulkarni",
    hosts: "Mrs. Seema & Mr. Ajit Kulkarni",
    groomParents: "Smt. Jyoti & Shri Ram Kumar Pareek",
    groomOrigin: "Jaipur",
    brideOrigin: "Pune",
    compliments: [
      "Sou. Hema R. Golosangi & Shri Raghvendra P. Golosangi",
      "Sou. Nirupama G. Kulkarni & Shri Girish S. Kulkarni",
      "Sou. Saumya N. Kulkarni & Shri Nikhil G. Kulkarni",
      "Smt. Suvarna G. Kulkarni",
      "Chi. Nibira, Abhishek, Yatharth and Abeer",
    ],
  },

  invitationHeading: "INVITE",
  invitationLead:
    "With joy in our hearts and the sacred blessings of our elders, we cordially request the pleasure of your gracious company and blessings on the auspicious occasion of the wedding celebration of our beloved daughter",
  invitationClosing:
    "As we embark on this sacred beginning together, our families warmly await your presence to make these celebrations truly memorable.",

  journeyTagline: "वऱ्हाड निघालं जयपूरला",
  journeySubtitle: "From the cultural heart of Maharashtra to the royal sandstone palaces of Jaipur — a family journey of togetherness, laughter, and lifelong promises.",

  events: [
    {
      id: "sangeet",
      name: "SANGEET",
      marathiTitle: "संगीत सोहळा",
      tagline: "तुम्ही आलात, आणि जयपूरचा हा सोहळा पूर्ण झाला",
      date: "Thursday, 3 December 2026",
      time: "6:00 PM – 10:00 PM",
      venue: "Shri Bhawani Farms, Tatiyawas, Sikar Road, Jaipur",
      itinerary: "Welcome & High Tea • Bride & Groom Side Performances • Dance Celebration & Dinner",
      routeUrl:
        "https://www.google.com/maps/dir//Shri+Bhawani+farm,+3QP4%2BP2,+Tantyawas,+Rajasthan+303704/@18.4451072,73.8295808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dad006fb49f3b:0x3e301745252f2ea5!2m2!1d75.7550706!2d27.089874",
    },
    {
      id: "mehendi",
      name: "MEHENDI & HALDI",
      marathiTitle: "मेहंदी आणि हळद",
      tagline: "रंग, रीत आणि रिवाज",
      date: "Friday, 4 December 2026",
      time: "11:00 AM onwards",
      venue: "Shri Bhawani Farms, Jaipur",
      itinerary: "Auspicious Haldi Ceremony at 11:00 AM • Lunch • Mehendi at 2:00 PM • Folk Music & Celebration Dinner",
      routeUrl:
        "https://www.google.com/maps/dir//Shri+Bhawani+farm,+3QP4%2BP2,+Tantyawas,+Rajasthan+303704/@18.4451072,73.8295808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dad006fb49f3b:0x3e301745252f2ea5!2m2!1d75.7550706!2d27.089874",
    },
    {
      id: "shaadi",
      name: "SHAADI",
      marathiTitle: "शुभ विवाह",
      tagline: "लग्न घटिका समीप आली, करा हो लगीन घाई…",
      date: "Saturday, 5 December 2026",
      time: "6:00 PM onwards",
      venue: "Bandhan Paradise, Mahadev Nagar, Niwaru Road, Jhotwara, Jaipur",
      itinerary: "Baraat Swagat at 7:15 PM • Varmala at 8:30 PM • Sacred Pheras & Royal Wedding Feast",
      routeUrl:
        "https://www.google.com/maps/dir//Bandhan+Paradise,+Bandhan+Paradise+Mahadev+Nagar,+Niwaru+Rd,+Ashok+Nagar,+Jhotwara,+Jaipur,+Rajasthan+302012/@18.4451072,73.8295808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db30052e56f2d:0x55b9b27f9b3f4857!2m2!1d75.7302289!2d26.959049",
    },
  ] satisfies WeddingEvent[],

  photos: [
    { src: couple1, caption: "Eyes filled with love, souls intertwined" },
    { src: couple2, caption: "Two paths meeting under starlit skies" },
    { src: couple3, caption: "A bond of heritage, warmth, and grace" },
    { src: couple4, caption: "Stepping into tomorrow, hand in hand" },
  ],

  routeVenue: {
    name: "Bandhan Paradise",
    address: "Mahadev Nagar, Niwaru Road, Ashok Nagar, Jhotwara, Jaipur, Rajasthan 302012",
    mapUrl:
      "https://www.google.com/maps/dir//Bandhan+Paradise,+Bandhan+Paradise+Mahadev+Nagar,+Niwaru+Rd,+Ashok+Nagar,+Jhotwara,+Jaipur,+Rajasthan+302012/@18.4451072,73.8295808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db30052e56f2d:0x55b9b27f9b3f4857!2m2!1d75.7302289!2d26.959049",
  },

  stayVenue: {
    name: "Shri Bhawani Farm",
    address: "Tantyawas, Sikar Road, Rajasthan 303704",
    mapUrl:
      "https://www.google.com/maps/dir//Shri+Bhawani+farm,+3QP4%2BP2,+Tantyawas,+Rajasthan+303704/@18.4451072,73.8295808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dad006fb49f3b:0x3e301745252f2ea5!2m2!1d75.7550706!2d27.089874",
  },

  whatsappRsvp: {
    title: "PLEASE RSVP",
    subtitle: "Click to join our WhatsApp group",
    groupName: "वऱ्हाड निघालं जयपूरला",
    phone: "917756981053",
    url: "https://chat.whatsapp.com/CcBZikiSwybBP80wrUEytP",
  },

  guestGuide: [
    {
      id: "weather",
      category: "WEATHER & ATTIRE",
      title: "Jaipur Winter Warmth",
      description:
        "December in Jaipur brings bright, pleasant sunshine during the day and crisp, cold breezes after dusk. We encourage warm festive wear — elegant shawls, bandhgalas, pashminas, and jackets for the evening ceremonies.",
    },
    {
      id: "stay",
      category: "ACCOMMODATION",
      title: "Shri Bhawani Farm",
      description:
        "Tantyawas, Sikar Road, Rajasthan 303704. Our primary family hospitality hub where our guests will be staying and celebrating together.",
      qrType: "stay",
    },
    {
      id: "venue",
      category: "WEDDING VENUE",
      title: "Bandhan Paradise",
      description:
        "Mahadev Nagar, Niwaru Road, Ashok Nagar, Jhotwara, Jaipur 302012. The grand venue for the Wedding and Varmala celebrations on Saturday, 5 December.",
      qrType: "wedding",
    },
    {
      id: "travel",
      category: "GROUP TRAVEL",
      title: "Coordinated Transfers",
      description:
        "For guests travelling together from Pune/Maharashtra on our wedding special train, coordinated group coaches will provide seamless transfers between the railway station, farm stay, and wedding venue.",
    },
    {
      id: "contacts",
      category: "FAMILY COORDINATORS",
      title: "Emergency Contacts",
      description:
        "Our family coordinators are available at all hours to assist with your journey, local navigation, and comfort in Jaipur. Tap below to call anytime.",
    },
    {
      id: "reminders",
      category: "KIND REMINDER",
      title: "For Your Comfort",
      description:
        "Please keep mobile phones adequately charged during outings, keep valuable personal belongings secure, and inform family coordinators before any independent city excursions.",
    },
  ],

  closingMessage:
    "Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.",
} as const;