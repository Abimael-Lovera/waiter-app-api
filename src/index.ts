import express from 'express';
import path from 'node:path';

import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const port = 3001;

    // import arquivos com node
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    // importante declarara que estamos utilizando json porque o http é um protocolo de hipertexto e temos que fazer o parse do nosso objeto json
    app.use(express.json());

    app.use(router);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));

