"use client";

import { useEffect, useState } from "react";
import {
  defaultAboutPageContent,
  subscribeAboutPageContent,
} from "@/src/services/aboutPageService";

export default function useAboutPageContent() {
  const [content, setContent] = useState(defaultAboutPageContent);

  useEffect(() => {
    const unsubscribe = subscribeAboutPageContent(
      setContent,
      (error) => {
        console.error("Unable to load Firebase about page content", error);
      },
    );

    return unsubscribe;
  }, []);

  return content;
}
