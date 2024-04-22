import { TFile } from '@jaderowley/shared/src/file/types';
import { GoneException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FileService {
  constructor(private readonly prismaService: PrismaService) {}

  async uploadFile(file: Express.Multer.File): Promise<TFile> {
    const uploadedFile = await this.prismaService.file.create({
      data: {
        name: file.filename,
        pathname: '/images/' + file.filename,
      },
    });

    return uploadedFile;
  }

  async deleteFile(id: number): Promise<TFile | null> {
    const exist = await this.prismaService.file.findUnique({
      where: {
        id,
      },
    });

    if (!exist) {
      throw new GoneException('File not found');
    }

    const deletedFile = await this.prismaService.file.delete({
      where: {
        id,
      },
    });

    const existFile = fs.readFileSync('./images/' + deletedFile.name);

    if (!existFile) {
      throw new GoneException('File not found');
    }

    fs.unlink('./images/' + deletedFile.name, (err) => {
      if (err) {
        console.error(deletedFile.name + ' does not exist');
      }
    });

    return deletedFile;
  }

  async getFile(id: number): Promise<TFile> {
    const file = await this.prismaService.file.findUnique({
      where: {
        id,
      },
    });

    if (!file) {
      throw new GoneException('File not found');
    }

    return file;
  }
}
