export interface Webinar {
    _id: string;
    title: string;
    speakers: string[];
    date: string;
    time: string;
    duration: string;
    description: string;
    topic: string;
    type: 'upcoming' | 'past';
    registrationLink?: string;
    recordingLink?: string;
    thumbnail: string;
    attendees?: number;
    rating?: number;
    featured?: boolean;
  }
  
  const API_BASE = "http://localhost:5000/api/webinars";
  
  export async function fetchWebinars(): Promise<Webinar[]> {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("Failed to fetch webinars");
    return res.json();
  }
  