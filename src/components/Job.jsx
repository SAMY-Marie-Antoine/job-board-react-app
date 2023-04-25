const Job = ({ className, title, contractType, country, city }) => {
  return (
    <>
      <article className={`job ${className}`}>
        {title && <h2>{title}</h2>}
        <p>
          {contractType} - {country} - {city}
        </p>
      </article>
    </>
  );
};

export default Job;
