import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export const setupSwagger = (app: INestApplication) => {
    const options = new DocumentBuilder()
        .setTitle('NestJS API Docs')
        .setDescription('NestJS API description')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-docs', app, document)
}
