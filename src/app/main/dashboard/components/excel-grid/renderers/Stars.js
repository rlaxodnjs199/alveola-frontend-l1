import addClassWhenNeeded from './utils';

const StarsRenderer = (props) => {
  addClassWhenNeeded(props);

  return <div className="star htCenter">{'★'.repeat(props.value)}</div>;
};

export default StarsRenderer;
