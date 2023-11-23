import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TareasService {

  constructor(
    @InjectRepository(Tarea)
    private readonly tareaRepository:Repository<Tarea>,
    ){}
    
    async create(createTareaDto: CreateTareaDto) {
    const task = this.tareaRepository.create(createTareaDto);
    await this.tareaRepository.save(task);
    return (task)
    }

  /*create(createTareaDto: CreateTareaDto) {
    return 'This action adds a new tarea';
  }*/

  findAll() {
    return `This action returns all tareas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }
}
