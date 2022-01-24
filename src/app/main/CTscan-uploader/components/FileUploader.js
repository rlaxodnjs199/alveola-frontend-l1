import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const DICOM_EXTENSION = '.dcm';

function fileTypeValidator(file) {
  if (file.name.slice(-4) !== DICOM_EXTENSION) {
    return {
      code: 'Invalid File Type',
      message: 'Not a DICOM file',
    };
  }

  return null;
}

const FileUploader = (props) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ validator: fileTypeValidator });

  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  const rejectedFileItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <>
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only DICOM files will be accepted)</em>
      </Container>
      <aside>
        {acceptedFileItems ? (
          <>
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
          </>
        ) : (
          <></>
        )}
        {rejectedFileItems ? (
          <>
            <h4>Rejected files</h4>
            <ul>{rejectedFileItems}</ul>
          </>
        ) : (
          <></>
        )}
      </aside>
    </>
  );
};

export default FileUploader;
