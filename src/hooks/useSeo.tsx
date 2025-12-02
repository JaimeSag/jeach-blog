import { useEffect } from "react";

export function useSeo({ title, description }: { title: string, description: string }) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector("meta[name=\"description\"]");

    if (metaDesc) {
      metaDesc.setAttribute("content", description);
      return;
    }

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    document.head.appendChild(meta);
  }, [title, description]);
}