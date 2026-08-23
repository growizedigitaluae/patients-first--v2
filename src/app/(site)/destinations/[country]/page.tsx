import { permanentRedirect } from "next/navigation";

export default function CountryRedirect() {
  permanentRedirect("/destinations");
}
