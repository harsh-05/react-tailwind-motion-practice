import { useEffect, useRef, useState } from "react";

export default function LayoutExample() {
  const [card, setCard] = useState<CardType | null>();
  const ref = useRef<HTMLDivElement| null>(null);
  useEffect(() => {
    function closediv(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCard(null);
      }
    }

    document.addEventListener('mousedown', closediv)
   
  }, [])
  
  return (
    <div className="relative w-full flex justify-center">
      {card && (
        <div className="fixed w-screen z-20 bg-gray-100/50 h-screen flex justify-center backdrop-blur-xs">
          <div
            ref={ref}
            className="w-[24rem] my-4 rounded-xl bg-gray-50 shadow-lg "
          >
            <div className="m-3">
              <div className=" w-full aspect-square overflow-hidden rounded-xl ">
                <img
                  src={card.imageFreeUrl}
                  alt={card.singerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center my-2 ">
                <div>
                  <p className="font-bold text-neutral-700">{card.songTitle}</p>
                  <p className="font-light text-neutral-500">
                    {card.singerName}
                  </p>
                </div>
                <button className="bg-green-400 rounded-xl w-16 h-8 ">
                  Play
                </button>
              </div>

              <div className="mt-10">{card.briefDetail}</div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center gap-10  w-1/2 ">
        {CardData.map((data: CardType) => (
          <button
            onClick={() => setCard(data)}
            className="flex justify-between items-center bg-white p-4 hover:cursor-pointer rounded-md shadow-md "
          >
            <div className="">
              <div className="flex items-center justify-center gap-3">
                <div className=" overflow-hidden size-12 rounded-md">
                  <img src={data.imageFreeUrl} alt="image" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">{data.songTitle}</p>
                  <p className="text-xs text-neutral-400">{data.singerName}</p>
                </div>
              </div>
            </div>
            <button className="bg-green-400 rounded-xl w-16 h-8 ">Play</button>
          </button>
        ))}
      </div>
    </div>
  );
}

type CardType = {
  songTitle: string;
  singerName: string;
  briefDetail: string;
  imageFreeUrl: string;
};

const CardData: CardType[] = [
  {
    songTitle: "Tum Hi Ho",
    singerName: "Arijit Singh",
    briefDetail:
      "Arijit Singh is a leading Indian playback singer known for his soulful voice and major hits in Bollywood.",
    imageFreeUrl:
      "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7",
  },
  {
    songTitle: "Love Story",
    singerName: "Taylor Swift",
    briefDetail:
      "Taylor Swift is an American singer-songwriter famous for autobiographical lyrics, genre-shifting pop/country work, and massive global influence. :contentReference[oaicite:2]{index=2}",
    imageFreeUrl:
      "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds",
  },
  {
    songTitle: "Bol Do Na Zara",
    singerName: "Armaan Malik",
    briefDetail:
      "Armaan Malik is an Indian multilingual playback singer and songwriter who began his career as a child and now sings in Hindi, English and other languages. :contentReference[oaicite:4]{index=4}",
    imageFreeUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWirqrzXAXVn7AXXZSe_1-CQkBxE2q0SPY2A&s",
  },
  {
    songTitle: "Bad Guy",
    singerName: "Billie Eilish",
    briefDetail:
      "Billie Eilish is an American singer-songwriter known for her unique voice, experimental pop style, and early breakout success. :contentReference[oaicite:5]{index=5}",
    imageFreeUrl:
      "https://i.pinimg.com/736x/e3/65/bf/e365bfd966b3c8477aec213d6bce1647.jpg",
  },
  {
    songTitle: "Yaaron",
    singerName: "KK (Krishnakumar Kunnath)",
    briefDetail:
      "KK was a prolific Indian playback singer revered for his versatile work across Hindi, Tamil, Telugu and Kannada songs, and is regarded as one of India’s greats. :contentReference[oaicite:7]{index=7}",
    imageFreeUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ywJqj2Yk806iyg4i2MfG5LqqIhG9U54VOg&s",
  },
];
