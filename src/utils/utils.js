import jwtDecode from "jwt-decode";
import { TokenError } from "@/utils/errors";

export function isTokenStillFresh(token) {
    try {
        const decoded = jwtDecode(token);
        if (decoded?.exp * 1000 > Date.now()) {
            return true;
        } else {
            throw new TokenError("Token is expired!");
        }
    } catch (e) {
        if (e instanceof TokenError) {
            throw e;
        } else {
            throw new TokenError(`Something wrong with token! (${e.message})`);
        }
    }
}