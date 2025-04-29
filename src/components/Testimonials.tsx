import GSMSlider from "./GSMSlider";
import { Review } from "@/libs/interfaces";
import { useRef, useEffect, useState } from "react";
import useSectionObserver from "@/hooks/useSectionObserver";

const Testimonials = () => {
  const ref = useSectionObserver({ sectionName: "Testimonials" });
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust the playback rate
    }
  }, []);

  //console.log("Testimonials component rendered", testimonials);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`/api/reviews`);
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }
      const data = await response.json();

      if (data && data.result && Array.isArray(data.result.reviews)) {
        setTestimonials(data.result.reviews);
        console.log("Testimonials fetched successfully:", data.result.reviews);
      } else {
        console.warn("No reviews found or unexpected data structure:", data);
        setTestimonials([]);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
      return [];
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-24 sm:py-32 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8"
    >
      <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
        What our customers say?
      </p>

      <GSMSlider reviews={testimonials} />
      <div className="flex justify-center items-center rounded-r-4xl">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          controls
          src="/video.webm"
          className="inset-0 size-fit object-cover mt-20"
        />
      </div>
    </section>
  );
};

export default Testimonials;
