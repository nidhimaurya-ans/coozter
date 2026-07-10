"use client";

import { useEffect, useState } from "react";
import {
  defaultServicesPageContent,
  subscribeServicesPageContent,
} from "@/src/services/servicesPageService";

export default function useServicesPageContent() {
  const [content, setContent] = useState(defaultServicesPageContent);

  useEffect(() => {
    const unsubscribe = subscribeServicesPageContent(
      setContent,
      (error) => {
        console.error("Unable to load Firebase services page content", error);
      },
    );

    return unsubscribe;
  }, []);

  return content;
}
