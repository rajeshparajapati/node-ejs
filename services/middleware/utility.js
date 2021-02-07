
exports.middleware_connection = async (req,res,next)=>{ 
    try{
        if(req.session && req.session.user.email){
            next();
        } else{
            return res.status(401).send({message:"unauthorized access denied"})
        }
    }catch{
        return res.status(401).send({message:"unauthorized access denied"})
    }  
    
}

exports.loginChecker = async (req,res,next)=>{
    try{
        if(req.session && req.session.user.email){
            next();
        } else {
           return res.redirect('/login_user')
        }
    } catch{
      return res.redirect('/login_user') 
    }
    
}

exports.existLogin = (req,res,next)=>{
    try{
        if(req.session && req.session.user.email){
          return  res.redirect('/dashboard')
        } else {
            next(); 
        }
    }
    catch{
        next();
    }
}


