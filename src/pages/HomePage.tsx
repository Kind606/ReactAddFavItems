import { mockedPhoto } from "../data";

export default function HomePage() {
  return (
    <main className="grid gap-4">
      {mockedPhoto.map((photo) => (
        <article className="relative">
          <img src={photo.url} alt="todo..." className="w-full" />
          <section className="absolute flex justify-between bottom-0 w-full p-2 bg-green-900/60 backdrop-blur-sm text-green-50">
            <p>{photo.author}</p>
            <button>🤍</button>
          </section>
        </article>
      ))}
    </main>
  );
}
