import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function TestingWindow() {
  const startDate = new Date("2026-04-22T00:00:00");
  const endDate = new Date("2026-05-05T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-[#E6F4FF] text-[#1A1D21]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Calendar className="w-6 h-6 text-[#356DFF]" />
          <h2 className="text-3xl font-bold text-[#356DFF]">Testing Window</h2>
        </div>

        {/* Start & End Dates */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-lg font-medium">
          <div>
            <p className="text-gray-600">Start</p>
            <p className="text-[#356DFF] text-xl mt-1">{startDate.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p>
          </div>
          <div>
            <p className="text-gray-600">End</p>
            <p className="text-[#356DFF] text-xl mt-1">{endDate.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-10 flex justify-center gap-[10px] md:gap-[24px] text-center w-full">
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md md:min-w-[80px] w-1/4">
            <p className="text-2xl font-bold text-[#356DFF]">{timeLeft.days}</p>
            <span className="text-gray-600">Days</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md md:min-w-[80px] w-1/4">
            <p className="text-2xl font-bold text-[#356DFF]">{timeLeft.hours}</p>
            <span className="text-gray-600">Hours</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md md:min-w-[80px] w-1/4">
            <p className="text-2xl font-bold text-[#356DFF]">{timeLeft.minutes}</p>
            <span className="text-gray-600">Min</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md md:min-w-[80px] w-1/4">
            <p className="text-2xl font-bold text-[#356DFF]">{timeLeft.seconds}</p>
            <span className="text-gray-600">Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
}