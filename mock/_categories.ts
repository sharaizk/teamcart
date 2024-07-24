import { i18n } from "@/i18n";
import PopularIcon from "../assets/images/icons/popular.webp";
import manIcon from "../assets/images/icons/man.webp";
import dressIcon from "../assets/images/icons/dress.webp";
import womanIcon from "../assets/images/icons/woman.webp";
import babyIcon from "../assets/images/icons/baby.webp";
import electronicsIcon from "../assets/images/icons/electronics.webp";

export const categories = [
  {
    id: 1,
    title: i18n.t("filter.popular"),
    image: PopularIcon,
    slug: "popular",
  },
  {
    id: 2,
    title: i18n.t("filter.man"),
    image: manIcon,
    slug: "man",
  },
  {
    id: 3,
    title: i18n.t("filter.dress"),
    image: dressIcon,
    slug: "dress",
  },
  {
    id: 4,
    title: i18n.t("filter.woman"),
    image: womanIcon,
    slug: "woman",
  },
  {
    id: 5,
    title: i18n.t("filter.baby"),
    image: babyIcon,
    slug: "baby",
  },
  {
    id: 6,
    title: i18n.t("filter.electronics"),
    image: electronicsIcon,
    slug: "electronics",
  },
];
