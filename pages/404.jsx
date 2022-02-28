import { useRouter } from "next/router";
import Home from ".";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
      <div className="px-6 py-4 rounded shadow-lg">
        <div className="mb-2 text-xl font-bold  ">
          404 - Sorry could not find this page !!
        </div>
        <div className="mt-5 text-xl hover:animate-bounce ">
          <button
            type="button"
            onClick={() => router.push("http://localhost:3000")}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
