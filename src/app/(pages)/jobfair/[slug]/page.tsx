import { Metadata } from "next";

import { getJobfairById } from "@ebursa/libs/domains/ebursa/jobfair/services/jobfair.service";
import { Props } from "@ebursa/libs/domains/ebursa/jobfair/models/jobfair-model";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Props;
}): Promise<Metadata> {
  return {
    title: `${searchParams.title} - ${searchParams.title}`,
    icons: { icon: "icons/icon.png" },
  };
}

export default async function page({ searchParams }: { searchParams: Props }) {
  const jobfair = await getJobfairById(searchParams.id);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full p-6 mb-4 ">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          {jobfair.data.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: jobfair.data.description }} />
      </div>
    </div>
  );
}
