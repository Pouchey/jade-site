import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSongDto: CreateSongDto) {
    const newSong = await this.prismaService.song.create({
      data: {
        title: createSongDto.song,
        artist: createSongDto.artist,
      },
    });
    return newSong;
  }

  async findAll() {
    const songList = await this.prismaService.song.findMany();
    return songList;
  }

  async findOne(id: number) {
    const song = await this.prismaService.song.findUnique({
      where: {
        id: id,
      },
    });
    return song;
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    const updatedSong = await this.prismaService.song.update({
      where: { id: id },
      data: {
        title: updateSongDto.song,
        artist: updateSongDto.artist,
      },
    });
    return updatedSong;
  }

  async remove(id: number) {
    const song = await this.prismaService.song.delete({
      where: { id: id },
    });
    return song;
  }
}
