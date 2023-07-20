const Helmet = (props) => {
  document.title = "OnlineStore -" + props.title;

  return <div className="w-100">{props.children}</div>;
};
