import styled from "styled-components";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdCheckCircle, MdError, MdMoodBad } from "react-icons/md";
import { useFiles } from "../../contexts/fileContext";

const FileList = () => {
  const { uploadedFiles: files, deleteFile } = useFiles();

  if (!files.length)
    return (
      <span>
        <MdMoodBad
          style={{ marginLeft: "45%", marginTop: 10 }}
          size={24}
          color="#d5d2d2"
        />
      </span>
    );

  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo key={uploadedFile.id}>
            <Preview key={uploadedFile.id} src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}{" "}
                  <button onClick={(e) => deleteFile(uploadedFile.id)}>
                    Excluir
                  </button>
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" },
                }}
                strokeWidth={10}
                text={String(uploadedFile.progress)}
                value={uploadedFile.progress || 0}
              />
            )}
            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#78e5d5" />
            )}
            {uploadedFile.error && <Close onClick={(e) => deleteFile(uploadedFile.id)} size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default FileList;

export const Container = styled.ul`
  margin-top: 20px;
  position: relative;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 7px;

      button {
        font-size: 15px;
        position: absolute;
        bottom: -26.15px;
        right: 95px;
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

const Close = styled(MdError)`
  cursor: pointer;
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
