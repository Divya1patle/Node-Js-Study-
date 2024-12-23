export const signUpUser=(req, res) =>{
    
        //     points to remember
        // email should be validated
        // password usko save karnah jwt/hash use karna h
        // password aur confirm same save honga
        // --------------------------------------------------------------
            const {name,email,password,confirmPassword}=req.body;
            if(!name || !email || !password || !confirmPassword ||!req.body){
                res.status(400).send({message:'All fields are required'});
                return;
            }
            if(password !== confirmPassword){
                res.status(400).send({message:'Password and confirm password do not match'});
                return;
            }
        
            const user = {name,email,password,confirmPassword};
        
            if(user){
                res.status(201).send({data:user,message:"User created successfully"});
            }
}