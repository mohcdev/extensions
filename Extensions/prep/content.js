///Prep

//servers or ips to use..
document.querySelector('#servers_by_providers_ms-select-search-option').value = ``

///reciept to
document.querySelector("textarea#rcpt_to").value  = `aminba595@gmail.com`

document.querySelector('#batch').value =   1
document.querySelector('#delay').value =  1000

//batch mode
document.querySelector('#send_mode').value = 'blocking' 


document.querySelector('#servers_by_providers_ms-search-option').value = 'ips'
 
//select all btn
document.querySelector('#servers_by_providers_ms-multi-select-all').click()

///select entered servers or ips
//setTimeout(()=>document.querySelector('#servers_by_providers_ms-select').click(),1000 )


 

// let myInter = setInterval(()=>{
// 	////when the <div> loading is removed from the body select all the ips
// 	if(!document.querySelector('body .page-loading')){

// 		///select the ipssss
// 		document.querySelector('#ips_by_classes_ms-select-global').click()
// 		console.log("select")
// 		clearInterval(myInter)
// 	} 
// },1000)


setTimeout(()=>document.querySelector('#ips_by_classes_ms-select-global').click(),3000 )

  