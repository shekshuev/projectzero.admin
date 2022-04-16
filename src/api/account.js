import { HttpBuilder } from "@/api/http";

export async function signInAsync(login, password) {
    const http = new HttpBuilder().useDefaultContentType().build();
    const response = await http.post("auth/signin", {
        login, password
    });
    if (response.status === 200) {
        return response.data;
    }
}