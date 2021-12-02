function authorize(permissionories){
    return(req, res, next)=> {
        let allowed = false;
        req.user.roles.map((role)=>{
            if(permissionroles.includes(role)){
                allowed=true;
            }
        })
        if(!allowed){
            return res.status(403).send({message:"you are not allowed for this"});
        }
        return next();
    }
}

module.exports = authorize;