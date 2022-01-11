import addClassWhenNeeded from './utils';

const ProgressBarRenderer = (props) => {
  addClassWhenNeeded(props);

  return (
    <div className="progressBar" style={{ width: `${props.value * 10}px` }} />
  );
};

export default ProgressBarRenderer;
