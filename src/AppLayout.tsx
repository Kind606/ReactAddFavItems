import { useState } from "react";
import { Outlet } from "react-router";

export interface LikedPhotoValue {
    likedPhotos: string;
    toogleLikedPhoto: (id: string) => void;
}

export default function AppLayout() {
  const [likedPhotos, setLikedPhotos] = useState<string[]>([]);

  const toogleLikedPhoto = (id: string) => {
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter((photoid) => photoid !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
    }
  };
  return (
    <>
      <header className="px-4 py-2 flex gap-2 bg-green-800 justify-between">
        <h1 className="text-xl">FavItems</h1>
        <span className="hover:-translate-y-1 box-content transition-all cursor-pointer">
          ❤️
        </span>
      </header>
      <main>
        <Outlet context={{ likedPhotos, toogleLikedPhoto }} />
      </main>
    </>
  );
}
