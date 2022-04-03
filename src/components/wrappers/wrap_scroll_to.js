import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePrevious from '../../custom_hook/use_previous';


const WrapScrollTo = (props) => {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  useEffect(() => {
    if (location !== prevLocation) {
      if (location.state?.scrollTo && location.state.scrollTo.length === 2) {
        setTimeout(() => {
          window.scrollTo(0, location.state?.scrollTo[0]);
        }, location.state?.scrollTo[1]);
      }
    }
  }, [location]);

  
  return (
    props.children
  );
}

export default WrapScrollTo;