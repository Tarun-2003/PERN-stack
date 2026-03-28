import express from "express"

const app = express();

const Router = express.Router();
app.use(express.json())
let cars = [{name: "Ford", "make":2020, id:1 },{
name: "bmw", "make":2025, id:2
} , {name: "benz", "make":2000, id:3}];

Router.get("/",(req,res)=>{
    res.json(cars)
})

Router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const car = cars.find((car) => car.id ===id)

    if (!car){
        return res.status(404).send("cAr not found")
    }
    res.json(car); 
})

Router.post("/", (req,res)=>{
    const {name,make,id} = req.body

    if (!name||!make){
        return res.status(404).send("invalid data")
    }
    const newCar= {name, 
        id: cars.length +1,
        make
    };
    cars.push(newCar)
    res.status(201).json(cars);

});

Router.put("/:id",(req,res)=>{
    // res.send("update car")
    const identity  = Number(req.params.id)
    const i = cars.findIndex(c => c.id === identity )

    if (i==-1){
        return res.status(404).send("invalid")
    }

    const {name,make} = req.body;

    if (name){
        cars[i].name  = name}
    if (make){
    cars[i].make  = make
    }
    res.json(cars[i])
 

})

Router.delete("/:id",(req,res)=>{
    res.send("delete car")
})

app.use("/api/v1/cars", Router);

app.listen(3000,(req,res)=>{
    console.log("server is running on 3000")
})

