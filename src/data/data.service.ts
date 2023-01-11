import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { Datum } from './entities/datum.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Datum) private readonly datumRepo: Repository<Datum>,
  ) {}
  create(createDatumDto: CreateDatumDto) {
    return this.datumRepo.save(createDatumDto);
  }

  findAll() {
    return this.datumRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} datum`;
  }

  update(id: number, updateDatumDto: UpdateDatumDto) {
    return `This action updates a #${id} datum`;
  }

  remove(id: number) {
    return `This action removes a #${id} datum`;
  }
}
