import * as React from 'react';
import { OperationModel } from '../../services';

interface DownloadResponseProps {
  operation?: OperationModel;
  content: any;
}

export const DownloadResponse = ({ operation, content }: DownloadResponseProps) => {
  const downloadItAnchor = (
    <a
      style={{ color: '#326CD1', cursor: 'pointer', fontWeight: 600 }}
      href={`data:text/plain;charset=utf-8,${content}`}
      download={`${operation?.id || ''}Response`}
    >
      download it
    </a>
  );

  return (
    <>Response payload length is too long to show here, but you can still {downloadItAnchor}.</>
  );
};
