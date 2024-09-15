import { Map } from "./map";
import Contact from "./contact";
import MessageForm from "./message";

export default function Page() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <Map longitude={80.67573941042949} latitude={26.778985023135604} />
                <Contact />
            </div>
            <div>
                <div className="flex justify-center items-center flex-row max-md:flex-col">
                    <Map longitude={80.67573941042949} latitude={26.778985023135604} />
                    <Contact />
                </div>
                <div className="flex justify-center items-center">
                    <MessageForm />
                </div>
            </div>
        </div>
    );
}