const compain = require('../models/compain');



const getAllCompain=async(req,res)=>{
    try{
        const compains=await compain.find();
        res.status(200).json(compains);

    }catch(error){
        res.status(500).json({message:'erreur de trouver les compains',error});
    }
};

const getCompainById=async(req,res)=>{
    const {id}=req.params;
    try{
        const cmpain=await compain.findById(id);
        if(!compain){
            return res.status(404).json({message:'compain pas trouves'});

        }
        res.status(200).json(compain);
    }catch(error){
        res.status(500).json({message:'ereur de trouver les cmopains'})
    }
}

const addCompain=async(req,res)=>{
    const{ reference, name, country, town, adress, pc } =req.body;
    const newCompain = new compain({ reference, name, country, town, adress, pc });
    try {
        const savedCompain = await newCompain.save();
        res.status(201).json(savedCompain);
      } catch (error) {
        res.status(500).json({ message: 'Error saving compain', error });
      }
    };

    const updateCompain=async(req,res)=>{
        const{id}=req.params;
        const{reference,name,country,town,adress,pc}=req.body;
        try{
            const compain=await compain.findById(id);
            if(!compain){
                return res.status(404).json({message:'compain nest pas trouve'})
            }
            compain.reference=reference;
            compain.name=name;
            compain.country=country;
            compain.town=town;
            compain.adress=adress;
            compain.pc=pc;
            const updatedCompain = await compain.save(); // Mongoose mettra à jour `updatedAt`
            res.status(200).json(updatedCompain);
          } catch (error) {
            res.status(500).json({ message: 'Error updating compain', error });
          }
    };

    const deleteCompain=async (req,res)=>{

        const{id} =req.params;
        try{
            const compain= await compain.findById(id);
            if(!compain){
                return res.status(404).json({ message: 'Compain not found' });
            }
             await compain.remove();
             res.status(200).json({ message: 'Compain deleted' });
            } catch (error) {
              res.status(500).json({ message: 'Error deleting compain', error });
            }
    };

    module.exports = {
        getAllCompain,
        getCompainById,
        addCompain,
        updateCompain,
        deleteCompain
      };