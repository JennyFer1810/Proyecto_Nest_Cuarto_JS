import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';

@Module({
  imports: [TareasModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
          type:'postgres',
          host:'localhost',
          port: 5432,
          username:'postgres',
          password: 'jennyfer18',
          database:'postgres',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
          entities: [Tarea],
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
