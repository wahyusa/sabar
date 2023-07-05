// boring react component that displays a message when there is no preview

export const NoPreview = () => {
  return (
    <div style={{ maxWidth: 30 + "ch", position: "absolute"}}>
      <h1 style={{ fontSize: 1 + "rem" }}>No Preview</h1>
    </div>
  );
};

export default NoPreview;
