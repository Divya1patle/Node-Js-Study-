import jwt from 'jsonwebtoken'


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
            if(!email.includes('@') || !email.includes('.')){
                res.status(400).send({message:'Invalid email format'});
                return;
            }
        
            const hashedPassword = jwt.sign({password}, 'secret-key');
            const hashedConfirmPassword = jwt.sign({confirmPassword}, 'secret-key');
            const user = {name, email, password: hashedPassword, confirmPassword: hashedConfirmPassword};
        
            if(user){
                res.status(201).send({data:user,message:"User created successfully"});
            }
}