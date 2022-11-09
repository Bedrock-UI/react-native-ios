import { useMemo } from 'react';
import { theme } from 'theme';

import type { Spacing } from 'types/spacing';

function useSpacing({ m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py }: Spacing) {
  const margins = useMemo(() => {
    if (m !== undefined) {
      return {
        margin: theme.spacing(m),
      };
    }

    return {
      marginTop: theme.spacing(my !== undefined ? my : mt),
      marginBottom: theme.spacing(my !== undefined ? my : mb),
      marginLeft: theme.spacing(mx !== undefined ? mx : ml),
      marginRight: theme.spacing(mx !== undefined ? mx : mr),
    };
  }, [m, mt, mb, ml, mr, mx, my]);

  const padding = useMemo(() => {
    if (p !== undefined) {
      return {
        padding: theme.spacing(p),
      };
    }

    return {
      paddingTop: theme.spacing(py !== undefined ? py : pt),
      paddingBottom: theme.spacing(py !== undefined ? py : pb),
      paddingLeft: theme.spacing(px !== undefined ? px : pl),
      paddingRight: theme.spacing(px !== undefined ? px : pr),
    };
  }, [p, pt, pb, pl, pr, px, py]);

  return {
    ...margins,
    ...padding,
  };
}

export default useSpacing;
