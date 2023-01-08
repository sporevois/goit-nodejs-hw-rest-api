const mongoose = require("mongoose");
const request = require('supertest');
const bcrypt = require('bcrypt');
require("dotenv").config();

const app = require('../../app');
const { User } = require('../../models');

const {DB_TEST_HOST, PORT} = process.env;

describe("test login", () => {
    let server;
    beforeAll(() => server = app.listen(PORT));
    afterAll(() => server.close());

    beforeEach((done)=> {
        mongoose.connect(DB_TEST_HOST).then(()=> done())
    })

    afterEach((done) => {
        mongoose.connection.close(() => done())
    })

    test("test login route", async()=> {
        
        const hashedPassword = await bcrypt.hash('123456', 10);
        
        const newUser = {
            email: "stanislav@gmail.com",
            password: hashedPassword,
            avatarURL: "/www.gravatar.com"
        };

        const user = await User.create(newUser);

        const loginUser = {
            email: "stanislav@gmail.com",
            password: "123456"
        };

        const response = await request(app).post("/api/users/login").send(loginUser);
        expect(response.statusCode).toBe(200);
        
        const { body } = response;
        const {token} = await User.findById(user._id);
        expect(body.token).toBe(token);

        userFieldsCount = Object.keys(body.user).length;
        expect(userFieldsCount).toBe(2);

        const {email, subscription} = body.user
        expect(typeof email).toBe('string');
        expect(typeof subscription).toBe('string');    
    })
})