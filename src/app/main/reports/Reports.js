import { styled } from '@mui/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Slider from './components/Slider';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function ReportPage(props) {
  return (
    <Root
      header={
        <div className="p-24">
          <h2>Reports</h2>
        </div>
      }
      content={
        <div className="p-24">
          hello reports
          <Slider />
        </div>
      }
    />
  );
}

export default ReportPage;
