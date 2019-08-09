var finder=document.querySelector(".finder");if(finder){var dataOption=document.querySelectorAll(".option li");for(let e=0;e<dataOption.length;e++)dataOption[e].addEventListener("click",function(t){var a=dataOption[e].getAttribute("data-output");console.log(dataOption[e].closest(".select").nextElementSibling.children);var r=dataOption[e].closest(".select").nextElementSibling.childNodes[1].childNodes[1];console.log(r),r.innerText=r.textContent=a});var releaseYearBar=document.getElementById("release-year");noUiSlider.create(releaseYearBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:[2010,2019],step:1,tooltips:!0,range:{min:[2007],max:[2019]},connect:!0});var nodes=[document.getElementById("min-release-year"),document.getElementById("max-release-year")];releaseYearBar.noUiSlider.on("update",function(e,t,a){nodes[t].innerHTML=e[t]});var cameraResolutionBar=document.getElementById("camera-resolution");noUiSlider.create(cameraResolutionBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0,suffix:" MP"}),start:3,snap:!0,tooltips:!0,range:{min:1,"10%":2,"15%":3,"20%":4,"25%":5,"40%":8,"50%":10,"60%":12,"65%":13,"75%":16,"85%":20,max:48}});var resultCameraResolution=document.getElementById("result-camera-resolution");cameraResolutionBar.noUiSlider.on("update",function(e,t){resultCameraResolution.innerHTML=e[t]});var camerasBar=document.getElementById("cameras"),cameras=["Single Camera","Single Camera","Dual Cameras","Triple Cameras","Quad Cameras"];noUiSlider.create(camerasBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:1,step:1,tooltips:!0,range:{min:1,max:cameras.length-1}});var resultCameras=document.getElementById("result-cameras");camerasBar.noUiSlider.on("update",function(e,t){resultCameras.innerHTML=cameras[e[t]]});var selfieCameraBar=document.getElementById("selfie-camera");noUiSlider.create(selfieCameraBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0,suffix:" MP"}),start:2,snap:!0,tooltips:!0,range:{min:1,"10%":2,"15%":3,"20%":4,"25%":5,"40%":8,"50%":10,"60%":12,"65%":13,"75%":16,"85%":20,max:48}});var resultSelfieCamera=document.getElementById("result-selfie-camera");selfieCameraBar.noUiSlider.on("update",function(e,t){resultSelfieCamera.innerHTML=e[t]});var videoResolutionBar=document.getElementById("video-resolution"),videoRange=["QVGA","VGA","720p","1080p","2160p"];noUiSlider.create(videoResolutionBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:0,step:1,tooltips:{to:function(e){return videoRange[e]}},range:{min:0,max:videoRange.length-1}});var resultVideoResolution=document.getElementById("result-video-resolution");videoResolutionBar.noUiSlider.on("update",function(e,t){resultVideoResolution.innerHTML=videoRange[e[t]]});var ramBar=document.getElementById("ram"),ramRange=["512MB","1GB","1.5GB","2GB","4GB"];noUiSlider.create(ramBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:3,step:1,tooltips:{to:function(e){return ramRange[e]}},range:{min:0,max:ramRange.length-1}});var resultRam=document.getElementById("result-ram");ramBar.noUiSlider.on("update",function(e,t){resultRam.innerHTML=ramRange[e[t]]});var cpuCoreBar=document.getElementById("cpu-cores");noUiSlider.create(cpuCoreBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0,suffix:" Core"}),start:1,snap:!0,tooltips:!0,range:{min:1,"25%":2,"50%":4,"75%":6,max:8}});var resultCpuCore=document.getElementById("result-cpu-cores");cpuCoreBar.noUiSlider.on("update",function(e,t){resultCpuCore.innerHTML=e[t]});var cpuFrequencyBar=document.getElementById("cpu-frequency"),cpuFrequencyRange=["1.5GHz","2GHz","2.1GHz","2.2GHz","2.4GHz"];noUiSlider.create(cpuFrequencyBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:2,step:1,tooltips:{to:function(e){return cpuFrequencyRange[e]}},range:{min:0,max:cpuFrequencyRange.length-1}});var resultCpuFrequency=document.getElementById("result-cpu-frequency");cpuFrequencyBar.noUiSlider.on("update",function(e,t){resultCpuFrequency.innerHTML=cpuFrequencyRange[e[t]]});var internalStorageBar=document.getElementById("internal-storage"),internalStorageRange=["8 GB","16 GB","32 GB","64 GB","128 GB","256 GB","512 GB"];noUiSlider.create(internalStorageBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:2,step:1,tooltips:{to:function(e){return internalStorageRange[e]}},range:{min:0,max:internalStorageRange.length-1}});var resultInternalStorage=document.getElementById("result-internal-storage");internalStorageBar.noUiSlider.on("update",function(e,t){resultInternalStorage.innerHTML=internalStorageRange[e[t]]});var batteryBar=document.getElementById("battery");noUiSlider.create(batteryBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0,suffix:" mAh"}),start:1,step:50,tooltips:!0,range:{min:[1500],max:[4800]}});var resultBettery=document.getElementById("result-battery");batteryBar.noUiSlider.on("update",function(e,t){resultBettery.innerHTML=e[t]});var displayResolutionBar=document.getElementById("display-resolution"),displayResolutionRange=["240x320 - QVGA","240x400 - WQVGA","320x480 - HVGA","480x800 - WVGA","540x960 - qHD","720x1080 - HD","1080x1920 - FullHD","1440x2560 - QHD"];noUiSlider.create(displayResolutionBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0}),start:2,step:1,tooltips:{to:function(e){return displayResolutionRange[e]}},range:{min:0,max:displayResolutionRange.length-1}});var resultDisplayResolution=document.getElementById("result-display-resolution");displayResolutionBar.noUiSlider.on("update",function(e,t){resultDisplayResolution.innerHTML=displayResolutionRange[e[t]]});var densityBar=document.getElementById("density");noUiSlider.create(densityBar,{cssPrefix:"g-slide-",behaviour:"tap",format:wNumb({decimals:0,suffix:" PPI"}),start:[330],step:10,tooltips:!0,range:{min:[100],max:[550]}});var resultDensity=document.getElementById("result-density");densityBar.noUiSlider.on("update",function(e,t){resultDensity.innerHTML=e[t]})}