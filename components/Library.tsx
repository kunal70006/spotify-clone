"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "~/hooks/useAuthModal";
import { useUser } from "~/hooks/useUser";
import useUploadModal from "~/hooks/useUploadModal";
import { Song } from "~/types";
import MediaItem from "./MediaItem";
import useOnPlay from "~/hooks/useOnPlay";

const Library: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const { onOpen } = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) return onOpen();
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={28} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem data={song} key={song.id} onClick={(id) => onPlay(id)} />
        ))}
      </div>
    </div>
  );
};

export default Library;
