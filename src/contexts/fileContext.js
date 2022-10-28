import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import api from "../services/api";
import filesize from "filesize";

const FileContext = createContext({});

const FileProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });

  const updateFile = useCallback((id, data) => {
    setUploadedFiles((state) =>
      state.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  }, []);

  const processUpload = useCallback(
    (uploadedFile) => {
      const data = new FormData();
      if (uploadedFile.file) {
        data.append("file", uploadedFile.file, uploadedFile.name);
      }

      api
        .post("posts", data, {
          onUploadProgress: (progressEvent) => {
            let progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            console.log(
              `A imagem ${uploadedFile.name} está ${progress}% carregada... `
            );

            updateFile(uploadedFile.id, { progress });
          },
        })
        .then((response) => {
          console.log(
            `A imagem ${uploadedFile.name} já foi enviada para o servidor!`
          );

          updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data.id,
            url: response.data.image,
          });
        })
        .catch((err) => {
          console.error(
            `Houve um problema para fazer upload da imagem ${uploadedFile.name} no servidor.`
          );
          console.log(err);
          updateFile(uploadedFile.id, {
            error: true,
          });
        });
    },
    [updateFile]
  );

  const handleUpload = useCallback(
    (files) => {
      const newUploadedFiles = files.map((file) => ({
        file,
        id: file.id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: "",
      }));

      setUploadedFiles((state) => state.concat(newUploadedFiles));
      newUploadedFiles.forEach(processUpload);
    },
    [processUpload]
  );

  const deleteFile = useCallback((id) => {
    api.delete(`posts/${id}`);
    setUploadedFiles((state) => state.filter((file) => file.id !== id));
  }, []);

  return (
    <FileContext.Provider value={{ uploadedFiles, deleteFile, handleUpload }}>
      {children}
    </FileContext.Provider>
  );
};

function useFiles() {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFiles must be used within FileProvider");
  }

  return context;
}

export { FileProvider, useFiles };
