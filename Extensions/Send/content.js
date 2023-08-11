/////SEND 
document.querySelector('#servers_by_providers_ms-search-option').value = 'ips'
 

document.querySelector("textarea#rcpt_to").value = 'mohopencin@gmail.com'

document.querySelector('#batch').value =   0
document.querySelector('#delay').value =  0

document.querySelector('#send_mode').value = 'non_blocking' 

//select the entered ips
setTimeout(()=>document.querySelector('#servers_by_providers_ms-select').click(),2000 )

