import EbursaJobfairCard from "@/app/components/fragments/ebursa/card/ebursa-jobfair-card";
import { JobfairModel } from "@ebursa/libs/domains/ebursa/jobfair/models/jobfair-model";
import { getJobfair } from "@ebursa/libs/domains/ebursa/jobfair/services/jobfair.service";

export default async function JobfairPage() {
  const jobfairs = await getJobfair();

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {jobfairs.data.length > 0 &&
        jobfairs.data.map((jobfair: JobfairModel) => (
          <EbursaJobfairCard key={jobfair.id} {...jobfair} />
        ))}
    </div>
  );
}
