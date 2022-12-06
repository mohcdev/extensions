if(document.querySelector('#ips_by_classes_ms-run-cmd')){
	let modal = document.querySelectorAll(".modal-scrollable .modal-content")
	
	if(modal.length<1){
		document.querySelector('#ips_by_classes_ms-run-cmd').click()
		setTimeout(()=>{ 
			ResumeS() 
			console.log("pauseDeteleReset") 
		},2500)
	}
	else ResumeS()

}
else alert("something Wrong!!!!!!!!!!")

function ResumeS(){ 

	const btnDeselectAll = document.querySelector('button#command-deselect-all')
	const btnResume = document.querySelector('li[id="-1881097171-selectable"]')
	const btnSchedule = document.querySelector('li[id="84705943-selectable"]') 
	const btnSelectAllServers = document.querySelector('button#server-multi-select-all')
	const btnSelectAllDomains = document.querySelector('button#queue-multi-select-all')

	if(btnDeselectAll && btnResume && btnSchedule && btnSelectAllServers && btnSelectAllDomains){
		btnDeselectAll.click()
		btnResume.click()
		btnSchedule.click() 
		btnSelectAllServers.click()
		btnSelectAllDomains.click()
	}
}

runQuick = null

