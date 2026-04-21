const initialOrders = [
  {
    orderId: 1001,
    customerName: "Arun",
    restaurant: "Spice Hub",
    items: [
      {
        name: "Biryani",
        price: 180,
        quantity: 2,
      },
    ],
    totalAmount: 360,
    status: "Delivered",
    rating: 4,
  },
  {
    orderId: 1002,
    customerName: "Priya",
    restaurant: "Pizza Town",
    items: [
      {
        name: "Veg Pizza",
        price: 250,
        quantity: 1,
      },
    ],
    totalAmount: 250,
    status: "Pending",
    rating: 5,
  },
  {
    orderId: 1003,
    customerName: "Ravi",
    restaurant: "Burger Point",
    items: [
      {
        name: "Burger",
        price: 150,
        quantity: 2,
      },
    ],
    totalAmount: 300,
    status: "Cancelled",
    rating: 3,
  },
  {
    orderId: 1004,
    customerName: "",
    restaurant: "Food Zone",
    items: [],
    totalAmount: 0,
    status: "Pending",
  },
  {
    orderId: 1005,
    customerName: "Kiran",
    restaurant: "Dosa House",
    items: [
      {
        name: "Masala Dosa",
        price: 120,
        quantity: 2,
      },
    ],
    totalAmount: 240,
    status: "Delivered",
    rating: 4,
  },
  {
    orderId: 1006,
    customerName: "Sneha",
    restaurant: "Tandoori Hub",
    items: [
      {
        name: "Paneer Tikka",
        price: 220,
        quantity: 1,
      },
    ],
    totalAmount: 220,
    status: "Pending",
  },
];

export default initialOrders;