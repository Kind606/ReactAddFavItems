import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header>AppLayout</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
