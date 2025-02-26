const request = require("supertest");

const BASE_URL = "http://localhost:8090"; // ✅ Use correct backend port

describe("Todo API", () => {
    test("GET /todo", async () => {
        const response = await request(BASE_URL).get("/todo");
        expect(response.status).toBe(200);
    });

    test("POST /todo", async () => {
        const response = await request(BASE_URL).post("/todo").send({
            title: "Test Todo",
            label: "Test",
            completed: false
        });
        expect(response.status).toBe(200);
    });
});
