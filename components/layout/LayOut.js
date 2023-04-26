import NavBar from "../navbar/NavBar";

const LayOut = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};
export default LayOut;
