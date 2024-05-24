const Domain1 = require('../Services/domain1');
//TODO: thay Domain1 thành factory

module.exports = {
    GetFeaturedNovel: async function(req, res){
        try{
            const Domain = new Domain1();//
            let Data = await Domain.GetFeaturedNovel();

            res.status(200).json({data:Data});
        }
        catch(error){
            console.log(error)
            res.status(500).json({message: error});
        }
    }
}