import Job from "./Job";
import data from "../assets/data.json";
const Jobs = () => {
  return (
    <main>
      {data.map((job) => {
        // const { id, className, title, contractType, country, city } = job;
        return (
          <Job
            key={job.id}
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
          />
        );
      })}
    </main>
  );
};

export default Jobs;
