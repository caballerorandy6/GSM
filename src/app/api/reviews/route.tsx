import { NextResponse } from "next/server";
import { Review } from "@/libs/interfaces";

export async function GET() {
  const apiKey = process.env.API_KEY;
  const placeId = process.env.PLACE_ID;
  const fields = "name,rating,reviews,photos";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching google reviews");
    }

    const data = await response.json();

    const reviewsAndPhotoUrl = data.result.reviews.map((review: Review) => {
      let photoUrl = null;
      if (review.photos && review.photos.length > 0) {
        photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${review.photos[0].photo_reference}&key=${apiKey}`;
      }
      return {
        ...review,
        photoUrl,
      };
    });
    return NextResponse.json({
      result: { ...data.result, reviews: reviewsAndPhotoUrl },
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
