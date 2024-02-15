import { JobfairModel } from "@ebursa/libs/domains/ebursa/jobfair/models/jobfair-model";
import { slugify } from "@ebursa/libs/shared/utils/slugify.util";
import Link from "next/link";

export default function EbursaJobfairCard(jobfair: JobfairModel) {
  return (
    <Link
      key={jobfair.id}
      href={`/jobfair/${slugify(jobfair.title)}-${jobfair.id}?title=${
        jobfair.title
      }&id=${jobfair.id}`}
      className="w-full p-6 mb-4 cursor-pointer  hover:border hover:border-teal-400  bg-white border border-gray-200 rounded-xl shadow-xs"
    >
      <h1 className="mb-3 text-2xl font-bold text-gray-900">{jobfair.title}</h1>
      <span className="text-gray-900 font-bold">
        <div dangerouslySetInnerHTML={{ __html: jobfair.description }} />
      </span>
    </Link>
  );
}
