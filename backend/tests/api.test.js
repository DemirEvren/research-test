const request = require("supertest");

const BASE_URL = process.env.TEST_MODE
  ? "http://test-backend:8080"  // ✅ Inside Docker network
  : "http://localhost:8090";     // ✅ From Jenkins (host machine)

// ❌ REMOVE: `module.exports = BASE_URL;` (not needed)

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
