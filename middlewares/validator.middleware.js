const validator = (req,res,next) => {
    if(req.url === "/signup"){
        if(req.body.name && req.body.email && req.body.password && req.body.number && req.body.usertype){

            if(typeof req.body.name === "string" && typeof req.body.email === "string" &&
               typeof req.body.password === "string" &&
               typeof req.body.usertype === "string"){
                       next()
               }

               else{
                return(res.send({"Message":"Wrong or Empty Credential"}));
               }
            
        }
        else{
            return(res.send({"Message":"Wrong or Empty Credential"}));
        }
    }

    else if(req.url === "/products/add"){
        console.log(req.body)
        if(req.body.title && req.body.image_url && req.body.price && req.body.brand  && 
           req.body.category && req.body.subCategory){
                next()
        }

        else{
            return(res.send({"Message":"Wrong or Empty Credential"}));
        }
    }

    else{
        next()
    }
};


module.exports = { validator }