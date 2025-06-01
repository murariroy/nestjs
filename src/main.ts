import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true
    }))
     
    /**
      swagger configuration
      
     **/

      const config = new DocumentBuilder()
      .setTitle('NestJs - Blog App API')
      .setDescription('Use the base API URL as http://localhost:3000')
      .setTermsOfService('http://localhost:3000/terms-of-service')
      .setLicense('MIT LICENSE' ,'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository')
      .addServer('http://localhost:3000')
      .setBasePath('')
      .setVersion('1.0').build();
      //Instance document

      const document = SwaggerModule.createDocument(app,config)

      SwaggerModule.setup('api',app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
