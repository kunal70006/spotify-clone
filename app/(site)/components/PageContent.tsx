"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import useLoadImage from "~/hooks/useSongImage";
import { Song } from "~/types";

const PageContent: React.FC<{ songs: Song[] }> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem: React.FC<SongItemProps> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        {imagePath && <Image src={imagePath} alt="album art" fill />}
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <FaPlay />
    </button>
  );
};
