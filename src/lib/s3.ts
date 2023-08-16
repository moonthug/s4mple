import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import * as mime from 'mime-types';
import * as process from 'process';
import { v4 as UUID } from 'uuid';


const s3Client = new S3Client({ region: process.env.AWS_DEFAULT_REGION });
export { s3Client };

export async function upload(file: Blob, bucket: string, keyPrefix: string = '') {
  const extension = mime.extension(file.type);
  const filename = `${ keyPrefix }${ UUID() }.${ extension }`;

  const results = await s3Client.send(new PutObjectCommand({
    Bucket: bucket,
    Key: filename,
    Body: Buffer.from(await file.arrayBuffer())
  }));

  return filename;
};
