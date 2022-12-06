
if(document.querySelector('#ips_by_classes_ms-run-cmd')){
	let modal = document.querySelectorAll(".modal-scrollable .modal-content")
	if(modal.length<1){
			document.querySelector('#ips_by_classes_ms-run-cmd').click()
	setTimeout(()=>{ 
			deteleReset() 
			console.log("pauseDeteleReset") 
		},2500)
	}
	else deteleReset()

}
else alert("something Wrong!!!!!!!!!!")
  
function deteleReset(){
	const btnDeselectAll = document.querySelector('button#command-deselect-all')
	const btnDelete = document.querySelector('li[id="2012838315-selectable"]')
	const btnReset= document.querySelector('li[id="77866287-selectable"]')
	const btnSelectAllServers = document.querySelector('button#server-multi-select-all')
	const btnSelectAllDomains = document.querySelector('button#queue-multi-select-all')

	if(btnDeselectAll && btnDelete && btnReset && btnSelectAllServers && btnSelectAllDomains){
		btnDeselectAll.click()
		btnDelete.click()
		btnReset.click()
		btnSelectAllServers.click()
		btnSelectAllDomains.click()
	}
}

runQuick = null