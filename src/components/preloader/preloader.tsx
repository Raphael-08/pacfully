import SimpleLoading from "@/components/preloader/loading-animation";
import Percentage from "./percentage";

export default function Preloader() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-3/4 h-2/4 flex items-center justify-center">
        <SimpleLoading />
        <div className="absolute bottom-10 left-10">
          <Percentage />
        </div>
      </div>
    </div>
  );
}
