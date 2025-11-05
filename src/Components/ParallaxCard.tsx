import image2 from "../assets/Gemini_Generated_Image_nyodejnyodejnyod.png";
import image1 from "../assets/Gemini_Generated_Image_kp6anckp6anckp6a.png";
import image3 from "../assets/Gemini_Generated_Image_vjlbkxvjlbkxvjlb.png";
export default function ParallaxCard() {

      return <div>
        {features.map((obj) => (
          <div key={ obj.title} className="flex items-center justify-center gap-12 min-h-screen max-w-4xl">
            <div className="flex flex-col gap-5 text-white">
              {obj.icon}
              <h1 className="font-bold text-3xl">{obj.title  }</h1>
              <p className="text-sm text-neutral-400">{ obj.description}</p>
            </div>
            <div className="size-5/12 overflow-hidden rounded-xl shrink-0">
              <img src={obj.imagesrc} alt="images" />
            </div>
          </div>
        ))}
      </div>
 }

type Features = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imagesrc: string;
};


const features: Features[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "Books are good for the Brain!",
    description:
      "Sometime reading a book a month gives you knowledge and boosts your Problem solving skills",
    imagesrc:
      image1,
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    title: "Cooking is damn Hard!",
    description:
      "Cooking has to be taught from the early ages to all the genders, because becoming self reliant on the cooking can improve the gut health.",
    imagesrc:
      image2,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
    title: "Hero is Everything!",
    description:
      "Hero is the one who protects himselfs and also protect others too, to become the hero one must control his/her zuban and chucchi, the great philosopher Kaleen Bhaiya once said this!!! ",
    imagesrc:
      image3,
  },
];