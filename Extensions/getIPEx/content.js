function getIPs(){
	
	let onlyIps =[]
	let titleIps=[]
	let pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
	///get ips from the index page
	Array.from(document.querySelectorAll('[role=tabpanel] td[role=gridcell] span.y2'), i=> {
		let title = i.textContent.match(pattern)
		
		title ? titleIps.push(title[0]) : null
	}) 
 
  	prompt(`YOU HAVE ${titleIps.length} IP INBOx`, titleIps.toString().replaceAll(/,/g, "\n"))

/*
///// old methode

let ips = []
	let inboxIps = ''
	let withSpace = false
	let emailTitles = []

	if(emailTitles.length >= 1){
		emailTitles.forEach(emailtitle =>{

			//if there is a " " it will be true
			if(emailtitle.indexOf(" ")>1){
				let ip = emailtitle.substr(0,emailtitle.indexOf(" "))
				ips.push(ip)
				withSpace = true
			}
			else{ 
				ips.push(emailtitle)
				inboxIps += `${emailtitle}\n`
			}
		}) 			 
	}
	else{
		alert("something wrong or ips does not exist")
		return
	}

	if(withSpace){
		ips.forEach(ip => inboxIps += `${ip}\n`)
	} 
	
    console.log(inboxIps) 
	prompt("\t\t\t copy your ipssss!!",inboxIps)

	//alert(inboxIps)

	return ips
	*/
}

getIPs()