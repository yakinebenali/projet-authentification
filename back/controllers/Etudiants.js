import etudiants from "../models/EtudiantsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const Register  = async(req, res) => {
    const {  name,email,password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await etudiants.create({       
            name:name,
            email: email,
            password: hashPassword,
           
            
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "Eror"});

    } 
}



export const Login = async(req, res) => {
   
    try {
        const etudiant = await etudiants.findAll({
            where:{
                email: req.body.email
            }
     
        });
       
        const match = await bcrypt.compare(req.body.password, etudiant[0].password);
        console.log(match)
        if(match) return res.status(200).json({msg: "etudiant existe"});
        const userId = etudiant[0].id;
        const name = etudiant[0].name;
        const email = etudiant[0].email;
        const accessToken = jwt.sign({userId,  email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });  
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"please register "});
    }
}