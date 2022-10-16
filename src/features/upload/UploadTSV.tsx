import React, { useState, useEffect } from "react";

export interface File {
  name: string;
  lastModified: number;
  size: number;
  type: string;
}

export interface UploadFileProps {
  onFileSelected?: (file: File) => void;
}

export const UploadFile = (props: UploadFileProps) => {
  const [selectedFile, setFile] = useState<File | null>(null);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0] || null;
    setFile(file);
  };

  useEffect(() => {
    if (!props.onFileSelected) return;
    props.onFileSelected(selectedFile!);
  }, [selectedFile, props]);

  return <input type="file" accept=".tsv" onChange={handleOnChange} multiple />;
};
