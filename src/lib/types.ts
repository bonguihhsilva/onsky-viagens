export type PackageCategory = "nacional" | "internacional";
export type PackageTag = "familia" | "lua-de-mel" | "neve" | "praia" | "cidade";

export type Departure = {
  date: string; // YYYY-MM-DD
  pricePerPerson: number; // BRL, quarto duplo
  soldOut?: boolean;
};

export type ItineraryDay = {
  day: string;
  title: string;
  text: string;
};

export type TravelPackage = {
  slug: string;
  title: string;
  destination: string;
  country: string;
  category: PackageCategory;
  tags: PackageTag[];
  nights: number;
  departureFrom: string;
  summary: string;
  hook: string;
  image: string;
  imageAlt: string;
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
  departures: Departure[];
  maxInstallments: number;
};

export type Tour = {
  slug: string;
  title: string;
  country: "Brasil" | "Argentina" | "Paraguai";
  duration: string;
  price: number; // BRL por pessoa
  summary: string;
  includes: string[];
  note?: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
};
