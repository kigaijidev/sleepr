import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '@app/common';
import { UserDocument, UserSchema } from './models/user.schema';
import { LoggerModule } from 'nestjs-pino';
import { UsersRepository } from './users.repository';

@Module({
	imports: [
		DatabaseModule,
		DatabaseModule.forFeature([
			{ name: UserDocument.name, schema: UserSchema },
		]),
	],
	controllers: [UsersController],
	providers: [UsersService, UsersRepository],
	exports: [UsersService],
})
export class UsersModule {}
