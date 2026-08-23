import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import type {
  MedicalDocument,
  Member,
  Provider,
} from "@/payload-types";

export const metadata = { title: "My Documents" };

const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  laboratory: "Laboratory report",
  imaging: "Imaging",
  "specialist-report": "Specialist report",
  consultation: "Consultation",
  discharge: "Discharge summary",
  other: "Document",
};

export default async function DocumentsPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  // Ownership-constrained query — a member can only ever read their own
  // document index (overrideAccess: false + explicit user context).
  // Archived records are excluded here but kept in the database for staff.
  const payload = await getPayload({ config: configPromise });
  const member = gate.member as unknown as Member;
  const docsRes = await payload.find({
    collection: "medical-documents",
    where: {
      and: [
        { member: { equals: member.id } },
        { status: { equals: "active" } },
      ],
    },
    depth: 1,
    limit: 100,
    sort: "-date",
    overrideAccess: false,
    user: member,
  });
  const documents = docsRes.docs as MedicalDocument[];

  return (
    <div className="space-y-8">
      <section>
        <Link
          href="/member/health-passport"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Health Passport
        </Link>
        <h1 className="mt-3 font-serif text-3xl text-midnight">My Documents</h1>
        <p className="mt-2 max-w-xl leading-relaxed text-navy">
          Your healthcare documents, organised in one place.
        </p>
      </section>

      {documents.length === 0 ? (
        <section className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm sm:p-8">
          <h2 className="font-serif text-xl text-midnight">
            No documents have been added yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
            Your healthcare documents will appear here as they are organised
            by PFW.
          </p>
        </section>
      ) : (
        <ul className="space-y-4">
          {documents.map((document) => {
            const provider =
              typeof document.providerRecord === "object" &&
              document.providerRecord !== null
                ? (document.providerRecord as Provider)
                : null;
            return (
              <li
                key={String(document.id)}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <h2 className="font-serif text-xl text-midnight">
                    {document.title}
                  </h2>
                  {document.documentType && (
                    <span className="inline-flex shrink-0 rounded-full bg-[#FBF6EC] px-3 py-1 text-xs font-semibold text-gold-dark">
                      {DOCUMENT_TYPE_LABELS[document.documentType] ??
                        document.documentType}
                    </span>
                  )}
                </div>

                {document.date && (
                  <p className="mt-1 text-sm text-navy/75">
                    {new Date(document.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}

                {(provider || document.description) && (
                  <dl className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-sm">
                    {provider && (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="text-navy/70">Provider</dt>
                        <dd className="font-medium text-midnight">
                          {provider.providerName}
                        </dd>
                      </div>
                    )}
                    {document.description && (
                      <div>
                        <dt className="sr-only">Description</dt>
                        <dd className="leading-relaxed text-navy/85">
                          {document.description}
                        </dd>
                      </div>
                    )}
                  </dl>
                )}

                {document.memberNotes && (
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-navy/85">
                    {document.memberNotes}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <p className="flex items-start justify-center gap-2 px-2 text-center text-xs leading-relaxed text-navy/70">
        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
        Document files themselves are added securely by your PFW Care
        Coordinator — you&rsquo;ll be able to view them here once added.
      </p>
    </div>
  );
}
