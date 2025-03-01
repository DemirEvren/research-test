const request = require("supertest");

// locaal testen en docker testen zijn apart 
const BASE_URL = process.env.TEST_MODE === "true"
  ? "http://test-backend:8080"  //  Inside Docker network
  : process.env.LOCAL_TEST === "true"
  ? "http://localhost:8090"     //  Local development
  : "http://localhost:8081";     // Jenkins pipeline


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
