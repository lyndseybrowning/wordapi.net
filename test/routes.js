import supertest from 'supertest';
import config from '../src/config.js';

const app = supertest(`http://localhost:${config.port}`);
