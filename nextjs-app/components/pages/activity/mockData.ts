import { ActivityInfo } from "@/types/activity";

export const mockActivities: ActivityInfo[] = [
  {
    type: "keynoteTalk",
    time: "2025-05-15 09:00 - 10:30",
    title: "The Future of Sustainable Tech",
    lecturer: "Dr. Maya Lin",
    location: "Main Hall A",
    hashTags: ["sustainability", "technology", "keynote"],
    imageSrc: undefined,
    register: {
      start: "2025-04-01T08:00:00Z",
      end: "2025-04-14T18:00:00Z",
      href: undefined,
    },
  },
  {
    type: "crossFunctionalNetworking",
    time: "2025-05-15 11:00 - 12:00",
    title: "Networking Brunch: Designers Meet Engineers",
    lecturer: "—",
    location: "Café Terrace",
    hashTags: ["networking", "interdisciplinary"],
    imageSrc: undefined,
    register: {
      start: "2025-04-20T10:00:00Z",
      end: "2025-05-20T10:00:00Z",
      href: "https://thementorship.tw/",
    },
  },
  {
    type: "crossCohortNetworking",
    time: "2025-05-16 14:00 - 15:30",
    title: "Peer Exchange: Wisdom Across Cohorts",
    lecturer: "Facilitator: Jamie Chen",
    location: "Room B204",
    hashTags: ["mentorship", "peer learning"],
    imageSrc: undefined,
    register: {
      start: "2025-05-05T10:00:00Z",
      end: "2025-05-05T10:00:00Z",
      href: "https://thementorship.tw/",
    },
  },
  {
    type: "studyGroup",
    time: "2025-05-17 17:00 - 18:00",
    title: "Climate Policy Reading Circle",
    lecturer: "Host: Lian Zhou",
    location: "Library Study Room 3",
    hashTags: ["climate", "discussion", "reading"],
    imageSrc: undefined,
    register: {
      start: "2025-05-05T10:00:00Z",
      end: "2025-05-05T10:00:00Z",
    },
  },
  {
    type: "socialActivity",
    time: "2025-05-18 18:00 - 21:00",
    title: "Open Mic Night & Potluck",
    lecturer: "—",
    location: "Courtyard Amphitheater",
    hashTags: ["music", "food", "community"],
    imageSrc: undefined,
    register: {
      start: "2025-04-20T10:00:00Z",
      end: "2025-05-20T10:00:00Z",
      href: "https://thementorship.tw/",
    },
  },
];
