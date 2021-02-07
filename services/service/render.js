
exports.home = (req,res)=>{
    res.render('index');
}
exports.addUser = (req,res)=>{
    res.render('add-user')
}

exports.updateUser = (req,res)=>{
    res.render('update-user');
}

exports.addUserform = (req,res)=>{
    res.render('login')
}

exports.dashboard = (req,res)=>{
    res.render('dashboard')
}