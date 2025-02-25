import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header className="px-4 py-2 flex gap-2 bg-green-800 justify-between">
        <h1 className="text-xl">FavItems</h1>
        <span className="hover:-translate-y-1 box-content transition-all cursor-pointer">❤️</span>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
