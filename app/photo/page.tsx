import { Suspense } from "react";
import PhotoClient from "./PhotoClient";

export const dynamic = "force-dynamic";

export default function PhotoPage() {
  return (
    <Suspense>
      <PhotoClient />
    </Suspense>
  );
}
