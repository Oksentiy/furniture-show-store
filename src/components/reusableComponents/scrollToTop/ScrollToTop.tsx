import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

function ScrollToTop():null {
  const { pathname, search } = useLocation();
  const { q } = qs.parse(search);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search, q]);

  return null;
}

export default ScrollToTop;
