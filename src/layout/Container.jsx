/* eslint-disable react/prop-types */
// stateless
const Container = (props) => {
  const { children, extraClasses } = props;
  return <div className={"container " + extraClasses }>{children}</div>;
};

export default Container;
