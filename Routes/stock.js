const router = require("express").Router();
const stock = require("../models/stock");


//CREATE
  router.post("/add", async (req, res)=>{
    const newStock = new stock({
        products: req.body.products,
        items: req.body.items,
        price: req.body.price
    });

   try{
        const stocknew = await newStock.save();
        res.status(201).json(stocknew)
   }catch(err){
       res.status(500).json(err);
   }
    
});

//GET ALL

router.get("/all",  async (req, res) => {
      try {
        const getStock = await stock.find();
        res.status(200).json(getStock.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    
  });


//GET BY ID
router.get("/find/:id", async (req, res) => {
    try {
      const stockFind = await stock.findById(req.params.id);
      res.status(200).json(stockFind);
    } catch (err) {
      res.status(500).json(err);
    }
  });


 //DELETE
  
 router.delete("/:id", async (req, res) => {
      try {
        await stock.findByIdAndDelete(req.params.id);
        res.status(201).json("The stock has been delete...");
      } catch (err) {
        res.status(500).json(err);
      }
    
  });


  //UPDATE

router.put("/:id",  async (req, res) => {
   
      try {
        const updatedStock = await stock.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedStock);
      } catch (err) {
        res.status(500).json(err);
      }
  });



module.exports = router;