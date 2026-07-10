"use client";

import { useEffect, useState } from "react";
import {
  defaultBlogPageContent,
  subscribeBlogPageContent,
} from "@/src/services/blogPageService";

export default function useBlogPageContent() {
  const [content, setContent] = useState(defaultBlogPageContent);

  useEffect(() => {
    const unsubscribe = subscribeBlogPageContent(
      setContent,
      (error) => {
        console.error("Unable to load Firebase blog page content", error);
      },
    );

    return unsubscribe;
  }, []);

  return content;
}
