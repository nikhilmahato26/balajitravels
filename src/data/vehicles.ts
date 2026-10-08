export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  availability: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "innova",
    name: "Toyota Innova",
    category: "Family / Tourist",
    image: "/images/innova.jpg",
    description: "A comfortable option for family and tourist travel.",
    availability: "Contact us for availability",
  },
  {
    id: "etios",
    name: "Toyota Etios",
    category: "Sedan / Tourist",
    image: "/images/etios.jpg",
    description: "A practical option for city and tourist travel.",
    availability: "Contact us for availability",
  },
  {
    id: "swift-dzire",
    name: "Maruti Suzuki Swift Dzire",
    category: "Sedan / Tourist",
    image: "/images/swift_dzire.jpg",
    description: "A compact sedan option for comfortable travel.",
    availability: "Contact us for availability",
  },
];
