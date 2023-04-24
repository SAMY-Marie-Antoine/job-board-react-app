const Job = (props) => {
  return (
    <>
      <div className={props.className}>
        <p>{props.title}</p>
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </>
  );
};

export default Job;
