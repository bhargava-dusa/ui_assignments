function loadImagesForAdmin(){
    let imagesDisplay = document.getElementById('adminImagesDisplay');
    imagesDisplay.innerHTML = "";
    for (let i = 0; i < imagesData.length; i++){
        imagesDisplay.innerHTML += "<div class='col'><div class='card cards'><img src='" + imagesData[i].url + "' class='card-img-top' alt='img'><div class='card-body'><h5 class='card-title'>" + imagesData[i].name + "</h5><div class='card-text'>" + imagesData[i].information + ", Uploaded on " + imagesData[i].uploadDate + "</div></div></div></div>";
    }    
    return false;
}

function loadImages(){
    let imagesDisplay = document.getElementById('imagesDisplay');
    imagesDisplay.innerHTML = "";
    for (let i = 0; i < imagesData.length; i++){
        imagesDisplay.innerHTML += "<div class='col'><img src='" + imagesData[i].url + "' class='img-thumbnail' alt='image'></div>";
    }    
    return false;
}

let imagesData = 
[
    {
        "id":1,
        "url":"https://drive.google.com/uc?export=view&id=1E-ThJn78P2xQr5BhCAQ6O5ArUn9-UExp",
        "name":"bird1",
        "information":"bird photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":2,
        "url":"https://drive.google.com/uc?export=view&id=1ZbvRhFaigUxM0xBn5MViO9kKVxckl-4w",
        "name":"zebra",
        "information":"zebra photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":3,
        "url":"https://drive.google.com/uc?export=view&id=1mpza1jrMsKGBMLZ5XylutoynOnVq14K4",
        "name":"deer",
        "information":"deer photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":4,
        "url":"https://drive.google.com/uc?export=view&id=1dYYDH8TbrRIAzUEodlk1b0mMbucuos9G",
        "name":"butterfly",
        "information":"butterfly photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":5,
        "url":"https://drive.google.com/uc?export=view&id=1Li2wrtoTjhmB2_OgyD9vKZO1HOte_wRC",
        "name":"gorilla",
        "information":"gorilla photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":6,
        "url":"https://drive.google.com/uc?export=view&id=1Ye4GR5wunKimaqrR4GP8wx8gUTK-VdbP",
        "name":"giraffe",
        "information":"giraffe photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":7,
        "url":"https://drive.google.com/uc?export=view&id=159LyfJvtJ4UgSgjSq51fUr1wFYS2apuN",
        "name":"dolphin",
        "information":"dolphin photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":8,
        "url":"https://drive.google.com/uc?export=view&id=1c9lbAQXNHD_d4oKpCa1EhRB2MTb1Os4i",
        "name":"tortise",
        "information":"tortise photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":9,
        "url":"https://drive.google.com/uc?export=view&id=1FR63Y0xmFvL1oLmOGGA1W3VHH5Y5wY7F",
        "name":"peacock",
        "information":"peacock photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":10,
        "url":"https://drive.google.com/uc?export=view&id=1LhzB0CeofF6uv7_aGNjNIa5LXjurLwf_",
        "name":"chick",
        "information":"chick photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":11,
        "url":"https://drive.google.com/uc?export=view&id=1VNk7VV_cJgCmPZczbyMlSUUjYTU75Fqh",
        "name":"lizard",
        "information":"lizard photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":12,
        "url":"https://drive.google.com/uc?export=view&id=1PhaQ5pAS16bhrsiYmiZgHjwToA-n_RqP",
        "name":"parrot",
        "information":"parrot photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":13,
        "url":"https://drive.google.com/uc?export=view&id=1FZA0cbkzxaVqn7I9YrjahCR13jvNSb5n",
        "name":"fox",
        "information":"fox photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":14,
        "url":"https://drive.google.com/uc?export=view&id=1ZLWYwwF4oUT4oEsBMHW87wLZJSZkGCyF",
        "name":"lion",
        "information":"lion photo",
        "uploadDate":"2021-04-01"
    },
    {
        "id":15,
        "url":"https://drive.google.com/uc?export=view&id=1waBBbCESvhPX7PvWkIJpaD3IOP6BcbUm",
        "name":"tiger",
        "information":"tiger photo",
        "uploadDate":"2021-04-01"
    }
];