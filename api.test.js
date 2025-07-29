const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
    it('Login - success', async () => {
        const res = await request(app).post('/login').send({ username: 'admin', password: 'admin' });
        expect(res.status).toBe(200);
    });

    it('Login - fail', async () => {
        const res = await request(app).post('/login').send({ username: 'wrong', password: 'wrong' });
        expect(res.status).toBe(401);
    });

    it('Create todo', async () => {
        const res = await request(app).post('/todos').send({ text: 'Test todo' });
        expect(res.status).toBe(201);
        expect(res.body.text).toBe('Test todo');
    });

    it('Get todos', async () => {
        const res = await request(app).get('/todos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('Update todo', async () => {
        const res = await request(app).post('/todos').send({ text: 'To update' });
        const updated = await request(app).put(`/todos/${res.body.id}`).send({ text: 'Updated' });
        expect(updated.body.text).toBe('Updated');
    });

    it('Delete todo', async () => {
        const res = await request(app).post('/todos').send({ text: 'To delete' });
        const del = await request(app).delete(`/todos/${res.body.id}`);
        expect(del.status).toBe(204);
    });
});
