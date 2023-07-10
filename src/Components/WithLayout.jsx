const withLayout = (OriginalComponent) => {
  return (props) => {
    <>
      <span>{props}</span>
      <OriginalComponent>{props}</OriginalComponent>
    </>;
  };
};

export default withLayout;
