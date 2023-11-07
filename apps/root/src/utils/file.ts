import { diskStorage } from 'multer';
import * as path from 'path';

export const storage = diskStorage({
  destination: './images',
  filename: (req, file, cb) => {
    const randomName = Date.now() + '-' + Math.round(Math.random() * 1e9);

    const filename: string = randomName;
    const extension: string = path.parse(file.originalname).ext;

    cb(null, `${filename}${extension}`);
  },
});
