import dessert from "../assets/images/Dessert.png";
import meal4 from "../assets/images/meal4.png";
import meal5 from "../assets/images/meal5.png";
import check from "../assets/images/check.png";
import google from "../assets/images/google.png";
import meal2 from "../assets/images/meal2.png";
import meal3 from "../assets/images/meal3.png";

export const images = {
dessert,
meal4,
meal5,
check,
google,
meal2,
meal3
};



export const onboarding = [
  {
    id: 1,
    title: "Diverse selection of foods!",
    description:
      "Our restaurant serves a wide variety of cuisines",
    image: images.dessert,
  },
  {
    id: 2,
    title: "Use the app to reserve your favorite seat ",
    description:
      "Select a date and reserve a seat in the restaurant",
    image: images.meal4,
  },
  {
    id: 3,
    title: "Home delivery available",
    description:
      "We provide a contact-free home delivery service.",
    image: images.meal5,
  },
];

 
export const foodCategory = [
  {
    foodName: "Cheese Burger",
    newPrice: "199",
    initialPrice: "250",
    discountPercentage: "19%",
    rating:"5.0",
    mealType: "Fast food",
    salesType: "top selling",
    image: images.meal2,
  },
  {
    foodName: "Pepper Pizza",
    newPrice: "299",
    initialPrice: "399",
    discountPercentage: "14%",
    rating:"5.0",
    mealType: "Snacks",
    salesType: "chef pick",
    image: images.meal3,
  },
  {
    foodName: "Pepper and Cheese Pizza",
    newPrice: "399",
    initialPrice: "499",
    discountPercentage: "14%",
    rating:"5.0",
    mealType: "Fast food",
    salesType: "trending", 
    image:images.meal4,
  },
  {
    foodName: "Cheese Burger",
    newPrice: "199",
    initialPrice: "250",
    discountPercentage: "19%",
    rating:"5.0",
    mealType: "Snacks",
    salesType: "top selling",
    image: images.meal4,
  },
  {
    foodName: "Cheese Burger",
    newPrice: "199",
    initialPrice: "250",
    discountPercentage: "19%",
    rating:"5.0",
    mealType: "Fast food",
    salesType: "top selling",
    image: images.meal3,
  },
  {
    foodName: "Cheese Burger",
    newPrice: "199",
    initialPrice: "250",
    discountPercentage: "19%",
    rating:"5.0",
    mealType: "Dessert",
    salesType: "top selling",
    Image: images.meal3,
  },
]
export const data = {
  onboarding,
};