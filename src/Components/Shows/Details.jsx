const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <p>{status}</p>
      <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
