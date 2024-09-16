import { Map } from "./map";
import Contact from "./contact";
import MessageForm from "./message";

export default function Page() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="grid grid-rows gap-4">
                    <Contact />
                    <MessageForm />
                </div>
                <div className="flex justify-center items-center">
                    <Map longitude={80.67573941042949} latitude={26.778985023135604} />
                </div>
            </div>
        </div>
    );
}