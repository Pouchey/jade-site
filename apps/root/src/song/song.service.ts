import { TSong } from '@jaderowley/shared/src/song/types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSongDto: CreateSongDto, iconId?: number): Promise<TSong> {
    const newSong = await this.prismaService.song.create({
      data: {
        title: createSongDto.song,
        artist: createSongDto.artist,
        iconId: iconId,
        isVisible: createSongDto.isVisible,
      },
      include: {
        icon: true,
      },
    });
    return newSong;
  }

  async findAll(): Promise<TSong[]> {
    const songList = await this.prismaService.song.findMany({
      include: {
        icon: true,
      },
    });
    return songList;
  }

  async findOne(id: number): Promise<TSong> {
    const song = await this.prismaService.song.findUnique({
      where: {
        id: id,
      },
      include: {
        icon: true,
      },
    });
    return song;
  }

  async findVisible(): Promise<TSong[]> {
    const songList = await this.prismaService.song.findMany({
      where: {
        isVisible: true,
      },
      include: {
        icon: true,
      },
    });

    return songList;
  }

  async update(
    id: number,
    updateSongDto: UpdateSongDto,
    iconId?: number,
  ): Promise<TSong> {
    const updatedSong = await this.prismaService.song.update({
      where: { id: id },
      data: {
        title: updateSongDto.song,
        artist: updateSongDto.artist,
        iconId: iconId,
        isVisible: updateSongDto.isVisible,
      },
      include: {
        icon: true,
      },
    });
    return updatedSong;
  }

  async remove(id: number): Promise<TSong> {
    const song = await this.prismaService.song.delete({
      where: { id: id },
      include: {
        icon: true,
      },
    });
    return song;
  }
}
