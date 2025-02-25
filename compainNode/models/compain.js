const mongoose=require('mongoose');

    
    const compainSchema = new mongoose.Schema({
        reference: { type: String, required: true },
        name: { type: String, required: true },
        country: { type: String, required: true },
        town: { type: String, required: true },
        adress: { type: String, required: true },
        pc: { type: String, required: true },
      }, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
      });

      const compain=mongoose.model('compain',compainSchema);

      module.exports=compain;
