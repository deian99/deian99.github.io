var processorBrand = document.config.procBrand
var procModelsList = document.config.procModel

var procModels = new Array()
procModels[0] = ""
procModels[1] = ["Intel I3 12th Gen|I3value", "Intel I5 12th Gen|I5value", "Intel I7 12th Gen|I7value"]
procModels[2] = ["AMD Ryzen 3 series|R3value", "AMD Ryzen 5 series|R5value", "AMD Ryzen 7 series|R7value", "AMD Threadripper|Trippervalue"]

function updatePROCModels (selectedModelsGroup) {
    procModelsList.options.length = 0

    if(selectedModelsGroup > 0) {
        for(i = 0;i < procModels[selectedModelsGroup].length; i++)
        procModelsList.options[procModelsList.options.length] = new Option(procModels[selectedModelsGroup] [i].split("|")[0], procModels[selectedModelsGroup] [i].split("|")[1])
    }

}


var GPUBrand = document.config.GPUBrand
var GPUmodelsList = document.config.GPUModel

var GPUmodels = new Array()
GPUmodels[0] = ""
GPUmodels[1] = ["GeForce GTX 1000 series|1000value", "GeForce RTX 2000 series|2000value", "GeForce RTX 3000 series|3000value"]
GPUmodels[2] = ["Radeon RX 500 series|500value", "Radeon RX 5000 series|5000value", "Radeon RX 6000 series|6000series"]

function updateGPUModels (selectedModelsGroup) {
    GPUmodelsList.options.length = 0

    if(selectedModelsGroup > 0) {
        for(i = 0; i < GPUmodels[selectedModelsGroup].length; i++)
        GPUmodelsList.options[GPUmodelsList.options.length] = new Option(GPUmodels[selectedModelsGroup] [i].split("|")[0], GPUmodels[selectedModelsGroup] [i].split("|")[1])
    }
}
