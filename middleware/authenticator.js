import jwt from 'jsonwebtoken';

const authenticator = (req, res, next) => {
    const token = req.headers['autorization'];

    if(!token)return res.status(404).json({message: "Token not found"});

    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err)return res.status(401).json({message: "Token unathorized"});
        req.user = user;
        next();
    });
}

export default authenticator;