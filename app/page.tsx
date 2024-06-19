import Image from "next/image";
import TypewriterTitle from "@/components/typewriterTitle";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <div className="bg-gradient-to-r min-h-screen from-rose-100 to teal-100 ">
        <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
          <h1 className={"font-semibold text-7xl text-center"}>
            <span className={"text-green-400 font-bold"}>Note Taking</span> Assistant
          </h1>
          <div className={"mt-4"}></div>

          <h2 className={"font-semibold text-3xl text-center text-slate-700"}>
            AI powered
              <TypewriterTitle/>
          </h2>
            <div className={"mt-8"}></div>

            <div className={"flex justify-center"}>
                <Link href={"/dashboard"} >
                    <Button className={"bg-green-600"}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
      </div>
  );
}
