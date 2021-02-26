import supertest from "supertest";
import app from "../app";
import {Users} from  "../models/";

describe("Probando el registro de usuarios", () => {
    
    it("Agregando un nuevo usuario", async(done) => {
        //arrenge
        let userObj = {
            firstName: "Hector",
            lastName: "Rodriguez",
            email: "hectorr1@gmail.com",
            password: "Hector3216"
        }
        //assert
        const response = await supertest(app).post("/signup").send(userObj);
        
        //act
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("firstName", "Hector");
        expect(response.body).toHaveProperty("lastName", "Rodriguez");
        // expect(response.body).toHaveProperty("email", "hectorr1@gmail.com");
        // expect(response.body).toHaveProperty("password", "Hector12345");
        done();

    });
});