import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({error:"You are not authorized"});
    }
    try{
        const decoded = jwt.verify(token, 'sdjfhsdfs+df7s5dff^%@$ghhkbv');
        req.userId = decoded.userId;
        next();
    }catch(err){
         res.status(401).json({ error: 'Invalid token' });
    }
}

export function verifyAdmin(req, res, next) {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({error:"You are not authorized"});
    }

    try{
        const decoded = jwt.verify(token, 'sdjfhsdfs+df7s5dff^%@$ghhkbv');
        req.role = decoded.role;
        next();
    }catch(err){
         res.status(401).json({ error: 'Invalid token' });
    }
}