let imagesData;

/*function loadData(){
    var requestURL = "../images.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        imagesData = request.response;
    }
}*/

async function loadData(){
    let url = 'https://my-json-server.typicode.com/bhargava-dusa/json/images';
    let response = await fetch(url);
    imagesData = await response.json();
}

function loadImagesForAdmin(){
    document.getElementById('editImageAccordion').style.display = 'none';
    document.getElementById('addImageAccordion').style.display = 'block';
    let imagesDisplay = document.getElementById('adminImagesDisplay');
    imagesDisplay.innerHTML = "";
    for (let i = 0; i < imagesData.length; i++){
        imagesDisplay.innerHTML += "<div class='col'><div class='card cards'><img src='" + 
        imagesData[i].url + "' class='card-img-top' alt='img'><div class='card-body'><h5 class='card-title'>" + 
        imagesData[i].name + "</h5><p class='card-text'>" + 
        imagesData[i].information + " (" +
        imagesData[i].uploadDate + ")</p>" +
        "<div class='row'><div class='col-sm-2' style='cursor: pointer;'>" + 
        "<img src='images/pencil-square.svg' onclick='editImage("+imagesData[i].id+")'>" + 
        "</div><div class='col-sm-2 offset-sm-8' style='cursor: pointer;'>" +
        "<img src='images/trash-fill.svg' onclick='deleteImage("+imagesData[i].id+")'>" +
        "</div></div>";
    }    
    document.getElementById('imageName').value = '';
    document.getElementById('imageUrl').value = '';
    document.getElementById('imageInformation').value = '';
    return false;
}

function cancelUpdateImageForm(){
    document.getElementById('editImageAccordion').style.display = 'none';
    document.getElementById('addImageAccordion').style.display = 'block';
}

function addImage(){
    let imageName = document.getElementById('imageName');
    let imageUrl = document.getElementById('imageUrl');
    let imageInformation = document.getElementById('imageInformation');
    if(isValidImageInput(imageName.value, imageUrl.value, imageInformation.value)){
        let newId = imagesData[imagesData.length - 1].id + 1;
        let uploadDate = getCurrentDate();
        let image = {
            id:newId,
            name:imageName.value,
            information:imageInformation.value,
            url:imageUrl.value,
            uploadDate:uploadDate
        }
        imagesData.push(image);
        loadImagesForAdmin();
        showModal('Image added successfully');
    }
}

function isValidImageInput(imageName, imageUrl, imageInformation){
    let isValid = true;
    let errorMessage = 'Please enter valid ';
    if(null == imageName || '' == imageName){
        errorMessage += 'name';
        isValid = false;
    } else if (null == imageUrl || '' == imageUrl || !isValidUrl(imageUrl)){
        errorMessage += 'url';
        isValid = false;
    } else if (null == imageInformation || '' == imageInformation){
        errorMessage += 'information';
        isValid = false;
    }
    if (!isValid)
        showModal(errorMessage);
    return isValid;
}

function isValidUrl(str){
    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str))
        return true;
    else
        return false;
}

function editImage(imageId){
    document.getElementById('addImageAccordion').style.display = 'none';
    document.getElementById('editImageAccordion').style.display = 'block';
    let imageData = imagesData.filter(item => item.id == imageId)[0];
    let editImageId = document.getElementById('editImageId');
    editImageId.value = imageData.id;
    let editImageName = document.getElementById('editImageName');
    editImageName.value = imageData.name;
    let editImageUrl = document.getElementById('editImageUrl');
    editImageUrl.value = imageData.url;
    let editImageInformation = document.getElementById('editImageInformation');
    editImageInformation.value = imageData.information;
    window.scrollTo(0, 0);
}

function updateImageData(){
    let imageId = document.getElementById('editImageId').value;
    let editImageName = document.getElementById('editImageName');
    let editImageUrl = document.getElementById('editImageUrl');
    let editImageInformation = document.getElementById('editImageInformation');
    if(isValidImageInput(editImageName.value, editImageUrl.value, editImageInformation.value)){
        imagesData.map(item => {
            if (item.id == imageId){
                item.name = editImageName.value;
                item.url = editImageUrl.value;
                item.information = editImageInformation.value;
                item.uploadDate = getCurrentDate();
                loadImagesForAdmin();
                showModal('Image updated successfully');
            }
        });
    }
}

function deleteImage(imageId){
    const index = imagesData.findIndex(x => x.id === imageId);
    if (index !== undefined) 
        imagesData.splice(index, 1);
    loadImagesForAdmin();
    showModal('Image deleted successfully');
}

function getCurrentDate(){
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

function loadImages(){
    let imagesDisplay = document.getElementById('imagesDisplay');
    imagesDisplay.innerHTML = "";
    for (let i = 0; i < imagesData.length; i++){
        imagesDisplay.innerHTML += "<div class='col'><img src='" + imagesData[i].url + "' class='img-thumbnail' alt='" + imagesData[i].name + "'></div>";
    }    
    return false;
}

function showModal(message){
    let modalButton = document.getElementById('modalButton');
    document.getElementById('modelBody').innerHTML = message;
    modalButton.click();
}

function validateAndSendMessage(){
    let firstName = document.getElementById('firstName');
    let middleName = document.getElementById('middleName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let message = document.getElementById('message');

    if(null == firstName.value || '' == firstName.value || firstName.value.length < 3 || firstName.value.length > 10) {
        showModal("Please provide valid firstname!");
        return false;
     }
     if(null == lastName.value || '' == lastName.value || lastName.value.length < 3 || lastName.value.length > 10) {
        showModal("Please provide valid lastname!");
        return false;
     }
     if(null == email.value || '' == email.value || !validateEmail(email.value)) {
        showModal("Please provide valid email!");
        return false;
     }
     if(null == mobile.value || '' == mobile.value || !validateMoile(mobile.value)) {
        showModal("Please provide valid mobile number!");
        return false;
     }
     if(null == message.value || '' == message.value || message.value.length < 1) {
        showModal("Please provide valid message!");
        return false;
     }

     const contactMeMessage =  "<table class='table table-borderless'><tbody>" +
        "<tr><th colspan='2' scope='row'>Here are the submitted details..</th></tr>" +
        "<tr><th scope='row'>Name:</th><td>" + firstName.value + " " + middleName.value + " " + lastName.value + "</td></tr>" +
        "<tr><th scope='row'>Email:</th><td>" + email.value + "</td></tr>" +
        "<tr><th scope='row'>Mobile:</th><td>" + mobile.value + "</td></tr>" +
        "<tr><th scope='row'>Message:</th><td>" + message.value + "</td></tr></tbody></table>";

    document.getElementById("contactMeForm").reset();
    showModal(contactMeMessage);                                
}

function validateEmail(mail){
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))
        return (true);
    return (false);
}

function validateMoile(number){
    var reg = /^[0-9]{1,10}$/;
    var checking = reg.test(number);    
     if(checking)
       return true;
    else
       return false;    
}