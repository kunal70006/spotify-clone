"use client";

import useLoadImage from "~/hooks/useSongImage";
import { Song } from "~/types";
import Image from "next/image";

interface MediaItemProps {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ onClick, data }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };
  return (
    <div
      className=" flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50  w-full p-2 rounded-md "
      onClick={handleClick}
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Song Cover"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 truncate text-sm">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
