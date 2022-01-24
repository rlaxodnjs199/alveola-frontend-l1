import { styled } from '@mui/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FileUploader from './components/FileUploader';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function CTScanUploaderPage(props) {
  return (
    <Root
      header={
        <div className="p-24">
          <h2>CT Scan Uploader</h2>
        </div>
      }
      content={<FileUploader />}
    />
  );
}

export default CTScanUploaderPage;
