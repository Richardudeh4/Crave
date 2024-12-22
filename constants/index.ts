import dessert from "../assets/images/Dessert.png";
import meal4 from "../assets/images/meal4.png";
import meal5 from "../assets/images/meal5.png";
import check from "../assets/images/check.png";
import google from "../assets/images/google.png";
export const images = {
dessert,
meal4,
meal5,
check,
google
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

export const data = {
  onboarding,
};