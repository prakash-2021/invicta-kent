import { Suspense } from "react";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
}
