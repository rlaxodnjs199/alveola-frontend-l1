import { useState } from 'react';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import CTDataGrid from './components/CTDataGrid';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function CTScanManagerPage(props) {
  const { t } = useTranslation('CTScanManagerPage');

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Root
      header={
        <div className="p-24">
          <h2>CT Scan Dashboard</h2>
        </div>
      }
      contentToolbar={
        <div className="w-full px-16 sm:px-24">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons={false}
            className="w-full h-64 border-b-1"
          >
            <Tab className="h-64" label="De-Identified" />
            <Tab className="h-64" label="VIDA-Processed" />
          </Tabs>
        </div>
      }
      content={
        <div className="p-24">
          {selectedTab === 0 && (
            <div>
              <h3 className="mb-16">De-Identified CT scans</h3>
              <CTDataGrid />
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              <h3 className="mb-16">VIDA-Processed CT scans</h3>
              <CTDataGrid />
            </div>
          )}
        </div>
      }
    />
  );
}

export default CTScanManagerPage;
