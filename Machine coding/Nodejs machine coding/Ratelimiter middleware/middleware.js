import rateLimiter from 'express-rate-limit';

const rateLimiterMiddleware = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "You are making Too many request, please try again after 1 minute"
})

export default rateLimiterMiddleware;