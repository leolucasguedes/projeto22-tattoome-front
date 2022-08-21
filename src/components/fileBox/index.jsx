import styled, { css } from "styled-components";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFiles } from "../../contexts/fileContext";

function Upload() {
  const { handleUpload } = useFiles();

  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste imagens aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <DropContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {renderDragMessage()}
    </DropContainer>
  );
}

export default Upload;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
