import { Button } from '@mui/material';
import { HotTable, HotColumn } from '@handsontable/react';
import useSWR from 'swr';
import ProgressBarRenderer from './renderers/ProgressBar';
import StarsRenderer from './renderers/Stars';
import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders,
} from './hooksCallbacks';
import 'handsontable/dist/handsontable.min.css';
import './styles.css';

const ExcelGrid = () => {
  const proj = 'LCP';
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `http://localhost:8000/gapi/QCT-worksheet/${proj}`;
  const { data, error } = useSWR(url, fetcher);

  return (
    <>
      <Button
        onClick={() => {
          console.log(data);
        }}
      >
        Trial
      </Button>
      <HotTable
        data={data?.rows}
        height={800}
        colWidths={[
          150, 214, 140, 127, 103, 126, 192, 99, 100, 100, 100, 110, 100,
        ]}
        colHeaders={data?.headers}
        dropdownMenu
        multiColumnSorting
        filters
        rowHeaders
        afterGetColHeader={alignHeaders}
        beforeRenderer={addClassesToRows}
        afterGetRowHeader={drawCheckboxInRowHeaders}
        afterOnCellMouseDown={changeCheckboxCell}
        manualRowMove
        licenseKey="non-commercial-and-evaluation"
      >
        <HotColumn data={1} />
        <HotColumn data={2} />
        <HotColumn data={3} />
        <HotColumn data={4} />
        <HotColumn data={5} />
        <HotColumn data={6} />
        <HotColumn data={7} />
        <HotColumn data={8} type="date" allowInvalid={false} />
        <HotColumn data={9} />
        <HotColumn data={10} type="checkbox" className="htCenter" />
        <HotColumn data={11} type="numeric" />
        <HotColumn data={12} readOnly className="htMiddle">
          {/* @ts-ignore Element inherits some props. It's hard to type it. */}
          <ProgressBarRenderer hot-renderer />
        </HotColumn>
        <HotColumn data={13} readOnly className="htCenter">
          {/* @ts-ignore Element inherits some props. It's hard to type it. */}
          <StarsRenderer hot-renderer />
        </HotColumn>
      </HotTable>
    </>
  );
};

export default ExcelGrid;
