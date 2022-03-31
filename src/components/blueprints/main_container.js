const MainContainer = (props) => {
  let classNameBucket = "main-container mx-auto"
  if (props.className)
    classNameBucket += ` ${props.className}`;
  
  classNameBucket.trim();

  return (
    <div className={classNameBucket} style={props.style}>
      {props.children}
    </div>
  );
}

export default MainContainer;