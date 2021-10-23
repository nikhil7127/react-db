import "./HelpDialog.scss";
const HelpDialog = ({ text, route, routeText }) => {
  return (
    <div className="help">
      {text}
      <div onClick={route}>{routeText}</div>
    </div>
  );
};
export default HelpDialog;
