import { redirect } from "next/navigation";

import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";

export const metadata = { title: "Member Portal" };

export default async function MemberIndexPage() {
  const result = await getPortalGate();

  if (result.kind === "unauthenticated") {
    redirect("/member/login");
  }

  const { gate } = result;
  if (gate.state === "active") {
    redirect("/member/dashboard");
  }

  return <GateScreen variant={gate.state} />;
}
