const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())

app.use(cors({
    origin:[https://authentication-office-work.vercel.app],
    methods:["POST","GET"],
    credentials:true
}));


mongoose.connect("mongodb+srv://Arun:Santana%407890@cluster1.fr9ag.mongodb.net/employee");
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.status(401).json("Invalid Password");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json("An error occurred");
        });
});

app.post("/register", (req, res) => {
    const { name, email, password, mobileNo } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.status(400).json("User already exists");
            } else {
                const newUser = new EmployeeModel({ name, email, password, mobileNo });
                newUser.save()
                    .then(() => res.json("User registered successfully"))
                    .catch(err => {
                        console.log(err);
                        res.status(500).json("An error occurred");
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json("An error occurred");
        });
});

app.listen(3001,()=>{
    console.log("Server is running on port 3001")
});
