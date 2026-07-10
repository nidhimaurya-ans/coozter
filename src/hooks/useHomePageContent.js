"use client";

import { useEffect, useState } from "react";
import {
  defaultHomePageContent,
  subscribeHomePageContent,
} from "@/src/services/homePageService";

export default function useHomePageContent() {
  const [content, setContent] = useState(defaultHomePageContent);

  useEffect(() => {
    const unsubscribe = subscribeHomePageContent(
      setContent,
      (error) => {
        console.error("Unable to load Firebase home page content", error);
      },
    );

    return unsubscribe;
  }, []);

  return content;
}
