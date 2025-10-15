import { useAuth } from "../stores/useAuth";
import Auth from "./Auth";
import Guest from "./Guest";

export default function Container() {
  const { isLogged } = useAuth();
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="p-8 flex gap-4 justify-center items-start max-w-2xl w-full">
        {isLogged ? <Auth /> : <Guest />}
      </main>
    </div>
  );
}
