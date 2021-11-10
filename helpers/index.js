import jwtDecoder from "jwt-decode"
let cookieParser = require('cookieparser')

export function getUserFromCookies(req) {
  if (process.server && process.static) return;
  if (!req.headers.cookie) return;

  if (req.headers.cookie) {
    const parsed = cookieParser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return;

    const decodedToken = jwtDecoder(accessTokenCookie);
    if (!decodedToken) return;

    return decodedToken;
  }
}
