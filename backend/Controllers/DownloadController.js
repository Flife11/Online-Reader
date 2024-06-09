const DownloadModel = require('../Models/DownloadModal.js');
const DownloadFactory = require('../DownloadFactory.js');

module.exports = {
    Download: async function(req, res) {
        const downloadType = req.params.type;
        let downloadTypeClass = DownloadFactory.getDownloadType(downloadType);
        downloadTypeClass.Download(req, res);
    },

    DownloadTypes: async function(req, res) {
        try {                       
            let downloadM = new DownloadModel();
            let downloadTypes = await downloadM.DownloadTypes();            
            res.status(200).json({data:downloadTypes});
            
        } catch (error) {
            //console.log(error)
            res.status(500).json({ message: error });
        }
    }
}