import { useState } from "react";
import { Link, Outlet } from "react-router";

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
      <header className="px-4 py-2 flex gap-2 bg-green-800 justify-between fixed z-10 w-full">
        <Link to="/">
          <h1>Bildbok</h1>
        </Link>
        <Link to="/fav">Fav</Link>
      </header>
      <main className="pt-10">
        <Outlet context={{ likedPhotos, toogleLikedPhoto }} />
      </main>
    </>
  );
}
