import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import GetStarted from "@/components/GetStarted";
import Metrics from "@/components/Metrics";
import Widget from "@/components/Widget";

export default function Home() {
    return (
        <main className="min-h-screen ">
            <Navigation/>
            <Analytics/>
            <Widget/>
            <Metrics/>
            <GetStarted/>
            <Footer/>
        </main>
    );
}
