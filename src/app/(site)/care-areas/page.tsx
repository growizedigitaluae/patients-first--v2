import { permanentRedirect } from "next/navigation";

export default function CareAreasRedirect() {
  permanentRedirect("/medical-specialties");
}
