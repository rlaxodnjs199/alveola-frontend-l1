import Handsontable from 'handsontable';

const addClassWhenNeeded = (props) => {
  const { className } = props.cellProperties.className;

  if (className !== undefined) {
    Handsontable.dom.addClass(props.TD, className);
  }
};

export default addClassWhenNeeded;
