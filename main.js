//const { format } = require("express/lib/response")

var processorBrand = document.config.procBrand
var procModelsList = document.config.procModel

var procModels = new Array()
procModels[0] = ""
procModels[1] = ["Intel I3 12th Gen|800", "Intel I5 12th Gen|1200", "Intel I7 12th Gen|1700"]
procModels[2] = ["AMD Ryzen 3 series|600", "AMD Ryzen 5 series|1000", "AMD Ryzen 7 series|1500", "AMD Threadripper|2000"]

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
GPUmodels[1] = ["GeForce GTX 1000 series|1000", "GeForce RTX 2000 series|2000", "GeForce RTX 3000 series|3000"]
GPUmodels[2] = ["Radeon RX 500 series|800", "Radeon RX 5000 series|1700", "Radeon RX 6000 series|2800"]

function updateGPUModels (selectedModelsGroup) {
    GPUmodelsList.options.length = 0

    if(selectedModelsGroup > 0) {
        for(i = 0; i < GPUmodels[selectedModelsGroup].length; i++)
        GPUmodelsList.options[GPUmodelsList.options.length] = new Option(GPUmodels[selectedModelsGroup] [i].split("|")[0], GPUmodels[selectedModelsGroup] [i].split("|")[1])
    }
}


console.log(GPUmodels[1][0])

var HDDCapacity = document.config.hardDrive
var HDDmodelsList = document.config.Capacity

var HDDmodels = new Array()
HDDmodels[0] = ""
HDDmodels[1] = ["WD500 500GB|500", "WD1000 1TB|600", "WD2000 2TB|700"]
HDDmodels[2] = ["SG500 500GB|550", "SG1000 1TB|650", "SG2000 2TB|750"]
HDDmodels[3] = ["TB500 500GB|450", "TB1000 1TB|550", "TB2000 2TB|650"]

function updateHDDModels (selectedModelsGroup) {
    HDDmodelsList.options.length = 0
    
    if(selectedModelsGroup > 0) {
        for(i = 0; i < HDDmodels[selectedModelsGroup].length; i++)
        HDDmodelsList.options[HDDmodelsList.options.length] = new Option(HDDmodels[selectedModelsGroup] [i].split("|")[0], HDDmodels[selectedModelsGroup] [i].split("|")[1], 
        HDDmodels[selectedModelsGroup] [i].split("|")[2])
    }
    
}


$(document).ready(function(){

    GPUModelPrice = 0 
        $('#GPUModels').on('change', function(){
            $('.result').val(
                GPUModelPrice = parseInt($('select=[name=GPUModel]').val())
                
            );
            
            
        });
    });

$(document).ready(function(){
    //procModelPrice = $('select=[name=procModel]').val()
    $('#procModels').on('change', function(){
        $('.result').val(
            procModelPrice = parseInt($('select=[name=procModel]').val())
        );
        

    });
});

$(document).ready(function(){
    $('#hddCapacity').on('change', function(){
        $('.results').val(
            HDDModelPrice = parseInt($('select=[name=Capacity]').val()),
            
        );
        
        
       //let calcul = GPUModelPrice + procModelPrice + HDDModelPrice
      // console.log(calcul)
    });
});

$(document).ready(function(){
    $('#button').on('click', function(){
        let calcul = GPUModelPrice + procModelPrice + HDDModelPrice
        
        
        console.log(calcul)
    });
});

//const form = document.getElementById('myform')

 function resetSubmit() {
    document.getElementById('myform').reset();
 }





