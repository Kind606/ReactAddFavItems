import { useOutletContext } from "react-router";
import { LikedPhotoValue } from "../AppLayout";
import { mockedPhoto } from "../data";

export default function FavPage() {
  const { likedPhotos, toogleLikedPhoto } = useOutletContext<LikedPhotoValue>();

  return (
    <main className="grid gap-4">
      {mockedPhoto.filter(photo => likedPhotos.includes(photo.id)).map((photo) => (
        <article className="relative">
          <img src={photo.url} alt="todo..." className="w-full" />
          <section className="absolute flex justify-between bottom-0 w-full p-2 bg-green-900/60 backdrop-blur-sm text-green-50">
            <p>{photo.author}</p>
            <button onClick={() => toogleLikedPhoto(photo.id)}>
              {likedPhotos.includes(photo.id) ? "❤️" : "🤍"}
            </button>
          </section>
        </article>
      ))}
    </main>
  );
}
