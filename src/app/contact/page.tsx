import { Map } from "./map";
import Contact from "./contact";

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-row max-md:flex-col">
            <Map longitude={80.67573941042949} latitude={26.778985023135604} />
            <Contact />
        </div>
    );
}