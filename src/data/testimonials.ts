export interface Testimonial {
  name: string;
  company: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohan Mehta",
    company: "FieldOps Logistics",
    rating: 5,
    review:
      "Lexical rebuilt our scheduling system in under two months and it just works. Our dispatchers stopped double-booking technicians within the first week, and the weekly staging updates meant we always knew what to expect.",
  },
  {
    name: "Priya Nair",
    company: "ShelfSense Retail Group",
    rating: 5,
    review:
      "We went from five separate spreadsheets to one dashboard that all our stores actually use. The team was responsive throughout and explained every technical decision in terms we could understand.",
  },
  {
    name: "Arjun Kapoor",
    company: "LexiCart Skincare",
    rating: 5,
    review:
      "Our new storefront loads noticeably faster and converts better than our old templated site. They handled the migration carefully so we didn't lose any SEO ranking, which we were genuinely worried about.",
  },
  {
    name: "Dr. Meera Iyer",
    company: "ClinicFlow Health",
    rating: 4,
    review:
      "Booking no-shows dropped by half after the SMS reminders went live. There were a couple of rounds of tweaks to get the doctor schedules right, but the team iterated quickly each time.",
  },
  {
    name: "Sandeep Verma",
    company: "RouteWise Deliveries",
    rating: 5,
    review:
      "The driver app works reliably even in areas with patchy signal, which was our biggest concern going in. Drivers picked it up with almost no training, and proof-of-delivery photos have cut down customer disputes a lot.",
  },
  
];
