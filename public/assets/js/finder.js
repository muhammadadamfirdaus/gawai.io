var finder = document.querySelector('.finder');

if(finder){
  // brand
  var dataOption = document.querySelectorAll('.option li');
  for(let i = 0; i < dataOption.length; i++){
    dataOption[i].addEventListener('click', function(e){
      var getDataAttributeBrand = dataOption[i].getAttribute('data-output');
      console.log(dataOption[i].closest('.select').nextElementSibling.children);    
      var output = dataOption[i].closest('.select').nextElementSibling.childNodes[1].childNodes[1];
      console.log(output);
      output.innerText = output.textContent = getDataAttributeBrand;
    });
  }

  // release year
  var releaseYearBar = document.getElementById('release-year');

  noUiSlider.create(releaseYearBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
    }),
    start: [2010, 2019],
    step: 1,
    tooltips: true,
    range: {
      'min': [2007],
      'max': [2019]
    },
    connect: true
  });

  var nodes = [
    document.getElementById('min-release-year'), // 0
    document.getElementById('max-release-year')  // 1
  ];

  releaseYearBar.noUiSlider.on('update', function (values, handle, unencoded) {
    nodes[handle].innerHTML = values[handle];
  });


  // camera resolution
  var cameraResolutionBar  = document.getElementById('camera-resolution');

  noUiSlider.create(cameraResolutionBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
      suffix: ' MP'
    }),
    start: 3,
    snap: true,
    // step: 1,
    tooltips: true,
    range: {
      'min': 1,
      '10%': 2,
      '15%': 3,
      '20%': 4,
      '25%': 5,
      '40%': 8,
      '50%': 10,
      '60%': 12,
      '65%': 13,
      '75%': 16,
      '85%': 20,
      'max': 48
    }
  });

  var resultCameraResolution = document.getElementById('result-camera-resolution');

  cameraResolutionBar.noUiSlider.on('update', function(values, handle){
    resultCameraResolution.innerHTML = values[handle];
  });


  // cameras
  var camerasBar  = document.getElementById('cameras');
  var cameras = [
    'Single Camera',
    'Single Camera',
    'Dual Cameras',
    'Triple Cameras',
    'Quad Cameras'
  ];

  noUiSlider.create(camerasBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
    }),
    start: 1,
    step: 1,
    tooltips: true,
    range: {
      min: 1,
      max: cameras.length-1
    }
  });

  var resultCameras = document.getElementById('result-cameras');

  camerasBar.noUiSlider.on('update', function(values, handle){
    resultCameras.innerHTML = cameras[values[handle]];
  });


  // selfie camera
  var selfieCameraBar  = document.getElementById('selfie-camera');

  noUiSlider.create(selfieCameraBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
      suffix: ' MP'
    }),
    start: 2,
    snap: true,
    // step: 1,
    tooltips: true,
    range: {
      'min': 1,
      '10%': 2,
      '15%': 3,
      '20%': 4,
      '25%': 5,
      '40%': 8,
      '50%': 10,
      '60%': 12,
      '65%': 13,
      '75%': 16,
      '85%': 20,
      'max': 48
    }
  });

  var resultSelfieCamera = document.getElementById('result-selfie-camera');

  selfieCameraBar.noUiSlider.on('update', function(values, handle){
    resultSelfieCamera.innerHTML = values[handle];
  });


  // video resolution
  var videoResolutionBar  = document.getElementById('video-resolution');
  var videoRange = [
    'QVGA', 'VGA', '720p',
    '1080p', '2160p'
  ];

  noUiSlider.create(videoResolutionBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0
    }),
    start: 0,
    step: 1,
    tooltips: {
      to: function(value){
        return videoRange[value];
      }
    },
    range: {
      min: 0,
      max: videoRange.length-1
    }
  });

  var resultVideoResolution = document.getElementById('result-video-resolution');

  videoResolutionBar.noUiSlider.on('update', function(values, handle){
    resultVideoResolution.innerHTML = videoRange[values[handle]];
  });


  // RAM
  var ramBar  = document.getElementById('ram');
  var ramRange = [
    '512MB', '1GB', '1.5GB',
    '2GB', '4GB'
  ];

  noUiSlider.create(ramBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0
    }),
    start: 3,
    step: 1,
    tooltips: {
      to: function(value){
        return ramRange[value];
      }
    },
    range: {
      min: 0,
      max: ramRange.length-1
    }
  });

  var resultRam = document.getElementById('result-ram');

  ramBar.noUiSlider.on('update', function(values, handle){
    resultRam.innerHTML = ramRange[values[handle]];
  });


  // CPU Cores
  var cpuCoreBar  = document.getElementById('cpu-cores');

  noUiSlider.create(cpuCoreBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
      suffix: ' Core'
    }),
    start: 1,
    snap: true,
    // step: 1,
    tooltips: true,
    range: {
      'min': 1,
      '25%': 2,
      '50%': 4,
      '75%': 6,
      'max': 8
    }
  });

  var resultCpuCore = document.getElementById('result-cpu-cores');

  cpuCoreBar.noUiSlider.on('update', function(values, handle){
    resultCpuCore.innerHTML = values[handle];
  });


  // CPU Frequency
  var cpuFrequencyBar  = document.getElementById('cpu-frequency');
  var cpuFrequencyRange = [
    '1.5GHz', '2GHz', '2.1GHz',
    '2.2GHz', '2.4GHz'
  ];

  noUiSlider.create(cpuFrequencyBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0
    }),
    start: 2,
    step: 1,
    tooltips: {
      to: function(value){
        return cpuFrequencyRange[value];
      }
    },
    range: {
      min: 0,
      max: cpuFrequencyRange.length-1
    }
  });

  var resultCpuFrequency = document.getElementById('result-cpu-frequency');

  cpuFrequencyBar.noUiSlider.on('update', function(values, handle){
    resultCpuFrequency.innerHTML = cpuFrequencyRange[values[handle]];
  });


  // Internal Storage
  var internalStorageBar  = document.getElementById('internal-storage');
  var internalStorageRange = [
    '8 GB', '16 GB', '32 GB', '64 GB', '128 GB',
    '256 GB', '512 GB'
  ];

  noUiSlider.create(internalStorageBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0
    }),
    start: 2,
    step: 1,
    tooltips: {
      to: function(value){
        return internalStorageRange[value];
      }
    },
    range: {
      min: 0,
      max: internalStorageRange.length-1
    }
  });

  var resultInternalStorage = document.getElementById('result-internal-storage');

  internalStorageBar.noUiSlider.on('update', function(values, handle){
    resultInternalStorage.innerHTML = internalStorageRange[values[handle]];
  });


  // Battery
  var batteryBar  = document.getElementById('battery');

  noUiSlider.create(batteryBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
      suffix: ' mAh'
    }),
    start: 1,
    step: 50,
    // step: 1,
    tooltips: true,
    range: {
      'min': [1500],
      'max': [4800]
    }
  });

  var resultBettery = document.getElementById('result-battery');

  batteryBar.noUiSlider.on('update', function(values, handle){
    resultBettery.innerHTML = values[handle];
  });


  // Display Resolution
  var displayResolutionBar  = document.getElementById('display-resolution');
  var displayResolutionRange = [
    '240x320 - QVGA', '240x400 - WQVGA', '320x480 - HVGA', '480x800 - WVGA', '540x960 - qHD', '720x1080 - HD',
    '1080x1920 - FullHD', '1440x2560 - QHD'
  ];

  noUiSlider.create(displayResolutionBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0
    }),
    start: 2,
    step: 1,
    tooltips: {
      to: function(value){
        return displayResolutionRange[value];
      }
    },
    range: {
      min: 0,
      max: displayResolutionRange.length-1
    }
  });

  var resultDisplayResolution = document.getElementById('result-display-resolution');

  displayResolutionBar.noUiSlider.on('update', function(values, handle){
    resultDisplayResolution.innerHTML = displayResolutionRange[values[handle]];
  });

  // Display Density
  var densityBar  = document.getElementById('density');

  noUiSlider.create(densityBar, {
    cssPrefix: 'g-slide-',
    behaviour: 'tap',
    format: wNumb({
      decimals: 0, // default is 2
      suffix: ' PPI'
    }),
    start: [330],
    step: 10,
    // step: 1,
    tooltips: true,
    range: {
      'min': [100],
      'max': [550]
    }
  });

  var resultDensity = document.getElementById('result-density');

  densityBar.noUiSlider.on('update', function(values, handle){
    resultDensity.innerHTML = values[handle];
  });
}