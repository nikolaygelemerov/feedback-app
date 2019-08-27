import React, { memo, useMemo } from 'react';

const Landing = props => {
  const style = useMemo(() => {
    return { textAlign: 'center' };
  }, []);

  return (
    <div style={style}>
      <h1>Emaily!</h1>
      Collect feedback from your users
    </div>
  );
};

export default memo(Landing);
