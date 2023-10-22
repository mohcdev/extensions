///
//change the  target Email first
////
	const targetEmail =  "coko@coko.de" 

function setTitle(){
	const titleById = document.querySelector("select[id*='title']")	
	titleById ?  
	Array.from(document.querySelectorAll("select[id*='title'] option"), a => a.value).includes('1') ? 
	(titleById.value = 1, console.log('from setTitle function!!!!')) : 
	Array.from(document.querySelectorAll("select[id*='title'] option"), a => a.value).includes('Mr') ?
	 titleById.value = "Mr" : null
	:null

	console.log('from setTitle function!!!!')
}


function setEmailInput (inputElem) { 
	inputElem.focus()
	inputElem.value= targetEmail
	inputElem.scrollIntoView() 
	console.log(`------------------+++++++  :: : : : : : ${inputElem}`)
} 



setTimeout(()=>{
 
	const typeText = document.querySelectorAll("input[type=text]")
	 
	typeText.forEach(elem => elem.value ='John')

	const emailByNameAll = document.querySelectorAll("input[name*=email]")
	 
	const email = document.querySelector("input[type=email]")
	
	const allEmail = document.querySelectorAll("input[type=email]")
	const emailByName= document.querySelector("input[name=email]")
	const emailByNameTwo = document.querySelector("input[name=EMAIL]")
	const emailByNameThree = document.querySelector("input[name=Email]")
	const emailByNameFour = document.querySelector("input[name=email_address]")
	const emailByNameFive = document.querySelector("input[name=subscriber]")
	const emailByNameSix = document.querySelector("input[name=emailAddress]")
	const emailByNameSeven = document.querySelector("input[name=input_1]")
	const emailByNameEight = document.querySelector("input[name='Email Address']")
	const emailByNameNine = document.querySelector("input[name=input_2]")
	
	const emailByTitle = document.querySelector("input[title='Email Address']")
  	const emailByClass = document.querySelector("input[class*=email]")
  	
	const byPlaceholderZero = document.querySelector("input[placeholder~='@']") 
	const byPlaceholderZero2 = document.querySelector("input[placeholder~='email']") 
	const byPlaceholder = document.querySelector("input[placeholder=Email]") 
	const byPlaceholderTwo = document.querySelector("input[placeholder='Email Address']")
	const byPlaceholderThree = document.querySelector("input[placeholder='ENTER EMAIL']")
	const byPlaceholderFour = document.querySelector("input[placeholder='Email address']")
	
	const byId = document.querySelector("input#mail")
	const byIdTwo = document.querySelector("input#user_email")
	const EmailbyIdThree = document.querySelectorAll("input[id*=Email]")
	const byIdFour = document.querySelector("input#EMAIL")
	const byIdFive = document.querySelector("input#input-68")
	const byIdSix = document.querySelector("input#newsletter-email")
	const byIdSeventh = document.querySelector("input#fieldEmail")

	/// full name
	const nameByName = document.querySelector("input[name=NAME]")
	
	const nameByNameTwo = document.querySelector("input[name=Name]")
	const nameByPlaceholder = document.querySelector("input[placeholder=Name]")
	const nameByname = document.querySelector("input[name*=name]")
	const nameBylabel = document.querySelector("input[aria-label='Name Field']")
	const nameByClass = document.querySelector("input.tnp-name")
 
	const emailInputsById = document.querySelectorAll('input[type=text]')
	const emailInputsByPlaceholder = document.querySelectorAll('input[type=text]')
	
	const form = document.querySelector('form')
 
 document.querySelector("input[name='input_2']")? setEmailInput(document.querySelector("input[name='input_2']")) : null

	emailInputsById.forEach(elem => {
		if(elem.id.toLowerCase().includes("email")){
			setEmailInput(elem)
		}
	})
	emailInputsByPlaceholder.forEach(elem => {
		if(elem.placeholder.toLowerCase().includes("email")){
			setEmailInput(elem)
		}
	})
 
	
	if(allEmail.length>=1){
	 	allEmail.forEach(elem => setEmailInput(elem))
	}
	else  if(email){
 		email.focus()
		setEmailInput(email)
		console.log("email")
	}
	else if(emailByName) setEmailInput(emailByName)
    else if(emailByNameAll.length>=1){
		emailByNameAll.forEach(elem =>  setEmailInput(elem) )
		console.log("emailByNameAll")
	}
	else if(emailByNameThree) setEmailInput(emailByNameThree)
	else if(emailByNameTwo) setEmailInput(emailByNameTwo)
	else if(emailByNameFour) setEmailInput(emailByNameFour)
	else if(emailByNameFive) setEmailInput(emailByNameFive)
	else if(emailByNameSix) setEmailInput(emailByNameSix)
	else if(emailByNameSeven) setEmailInput(emailByNameSeven) 
	else if(emailByNameEight) setEmailInput(emailByNameEight)
    else if(emailByNameNine) setEmailInput(emailByNameNine) 
	
	else if(emailByTitle) setEmailInput(emailByTitle)
	else if(emailByClass) setEmailInput(emailByClass)
	
	
	else if(byId) setEmailInput(byId)
	else if(byIdTwo) setEmailInput(byIdTwo)

	else if(EmailbyIdThree.length>=1){	
		EmailbyIdThree.forEach(i => i.value = targetEmail) 
		console.log("EmailbyIdThree")
	}else if(byIdFour) setEmailInput(byIdFour)
	 else if(byIdFive) setEmailInput(byIdFive)
	 else if(byIdSix) setEmailInput(byIdSix) 
	 else if(byIdSeventh) setEmailInput(byIdSeventh)  

	////bby placeholder

	else if(byPlaceholderZero) setEmailInput(byPlaceholderZero)
	else if(byPlaceholderZero2) setEmailInput(byPlaceholderZero2)
	
	else if(byPlaceholder) setEmailInput(byPlaceholder)
	else if(byPlaceholderTwo) setEmailInput(byPlaceholderTwo)
	else if(byPlaceholderThree) setEmailInput(byPlaceholderThree)
 	else if(byPlaceholderFour) setEmailInput(byPlaceholderFour)
	else if(form)   form.scrollIntoView()
	 
	
	//firstname
	
	const firstNameInputs = document.querySelectorAll('input[type=text]')
	
	firstNameInputs.forEach(elem => {
		if(elem.placeholder.toLowerCase().includes("first") || elem.placeholder.toLowerCase().includes("name")){
			elem.value = "John"
			console.log("Hellooooooooooooo")
		}
	})
	
	const fName = document.querySelector("input[name=FNAME]")
	const firstName = document.querySelector("input[name=firstname]")
	const firstNameTwo = document.querySelector("input[name=FirstName]")
	const firstNameThree = document.querySelector("input[name=firstName]")
	const firstNameFour = document.querySelector("input[name=First_Name]")
	const firstNameFive = document.querySelector("input[name=first_name]")
 	 
	const first = document.querySelector("input[name=first]")
	const firstTwo = document.querySelector("input[name=name]")
	const firstThree = document.querySelector("input[name*=FirstName]") 
	const firstFour = document.querySelectorAll("input[name*=first]")  
 
	const fNameTextArea = document.querySelector("textarea[name='First Name']")   
	  
	const fnameByTitle = document.querySelector("input[title='First Name']")
	
	const firstByPlaceholdery = document.querySelector("input[placeholder='First Name']") 
	
	const firstNameById= document.querySelector("#firstName")
	const firstNameByIdTwo= document.querySelector("#s_first_name")
	const firstNameByIdThree = document.querySelector("#firstName")
	const firstNameByIdFour = document.querySelector("input[id*=first]") 
	
	  

	  const setFirstName = (nameInput)=>{
		nameInput.value = "John"
	  }

	if(fName)  setFirstName(fName)
	else if(firstName)  setFirstName(firstName)
	else if(firstNameTwo) setFirstName(firstNameTwo)
	else if(firstTwo) setFirstName(firstTwo)	
	else if(firstThree) setFirstName(firstThree)	
	else if(firstFour.length>=1){
		firstFour.forEach(i => i.value = "John") 
		console.log("firstFour")
	} 
	
	else if(firstNameThree) setFirstName(firstNameThree)
	else if(firstNameFour) setFirstName(firstNameFour)
	else if(firstNameFive) setFirstName(firstNameFive)
	 
	else if(first) first.value = "John"
	else if(firstNameByIdTwo) firstNameByIdTwo.value = "John"
	else if(firstNameByIdThree) firstNameByIdThree.value = "John"
	
	else if(firstByPlaceholdery) firstByPlaceholdery.value = "John"
	else if(fNameTextArea) fNameTextArea.value = "John"
	else if(firstNameByIdFour) firstNameByIdFour.value = "John"
	 
	//last name
	const lastNameInputs = document.querySelectorAll('input[type=text]')
	
	lastNameInputs.forEach(elem => {
		if(elem.placeholder.toLowerCase().includes("last")){
			elem.value = "Doe"
			console.log("Hellooooooooooooo lastNameInputs")
		}
	})
	
	const lName = document.querySelector("input[name=LNAME]")
	const LastName = document.querySelector("input[name=LastName]")
	const last = document.querySelector("input[name=last]")
	const lastTwo = document.querySelector("input[name=lastName]")
	const lastThree = document.querySelector("input[name=lastname]")
	const lastFour = document.querySelector("input[name*=LastName]") 
	const lastFive = document.querySelectorAll("input[name*=last]") 
	const lastSix = document.querySelector("input[name*=lname]")  
	const lastSeven = document.querySelector("input[name=Last_Name]")  
	const lastEight = document.querySelector("input[name=last_name]")  
	
	
	const lnameByTitle = document.querySelector("input[title='Last Name']")
	const lastByPlaceholder = document.querySelector("input[placeholder='Last Name']")
	
	const lastNameById= document.querySelector("#lastName")
	const lastNameByIdTwo= document.querySelector("#s_last_name")  
	const lastNameByIdThree = document.querySelector("input[id*=last]")
	
	const lNameTextArea = document.querySelector("textarea[name='Last Name']") 
	const surname = document.querySelector("input[name*=surname]")
	const surnamePlaceholder = document.querySelectorAll("input[placeholder=Surname]")
	   
	 
	   
	if(lName) lName.value = "Doe"
	else if(LastName) LastName.value = "Doe"
	else if(last) last.value = "Doe"
	else if(lastFour) lastFour.value = "Doe"
	else if(lastFive.length>=1){
		lastFive.forEach(i=> {
			i.value = "Doe"
			i.focus()
		})
		console.log("lastFive")
	}
	
	
	else if(lastSix) lastSix.value = "Doe"
	else if(lastSeven) {
		lastSeven.value = "Doe"
		console.log("lastSeven")
	}else if(lastEight) {
		lastEight.value = "Doe"
		console.log("lastEight")
	}
	
	else if(lnameByTitle) lnameByTitle.value = "Doe"
	else if(lastNameById) lastNameById.value = "Doe"
	else if(lastNameByIdTwo) lastNameByIdTwo.value = "Doe"
	else if(lastNameByIdThree) {
		lastNameByIdThree.value = "Doe"
		console.log("lastNameByIdThree")
	}
	
	
	else if(lastTwo) lastTwo.value = "Doe"
	else if(lastThree) lastThree.value = "Doe" 
	else if(lastByPlaceholder) lastByPlaceholder.value = "Doe" 
	 
	else if(surname) surname.value = "Doe"
	else if(lNameTextArea) lNameTextArea.value = "Doe"
	else if(surnamePlaceholder.length>=1){
		 surnamePlaceholder.forEach(i=> i.value = "Doe")
		 console.log("surnamePlaceholder")
	}
	 
	//name
	if(nameByName) nameByName.value ="John Doe"
	  
	else if(nameByname) nameByname.value = "John"
	else if(nameByNameTwo) nameByNameTwo.value = "John Doe"
	else if(fnameByTitle) fnameByTitle.value = "John Doe"
	else if(nameByPlaceholder) nameByPlaceholder.value = "John Doe"
	else if(nameBylabel) nameBylabel.value = "John Doe"
	else if(nameByClass) nameByClass.value = "John Doe"
 
	///job
	const job = document.querySelector("input[name*=job]")
	
	if(job) job.value = "dev"
	
	
	///zip code
	const zipCode = document.querySelectorAll("input[name*=zip]") 
	const newsletter_zip_code = document.querySelector("input#newsletter-zip-code")
	const zipByName = document.querySelector("input[name=ZipCode]")
	const zipByNameTwo = document.querySelector("input[name=PostalCode]")
	const zipByNameThree = document.querySelector("input[name='Postal Code']")

	const zipById = document.querySelector("input#ZipCode")	
	const zipByIdTwo = document.querySelector("input[id*=postal]")
	const zipByIdThree = document.querySelector("input[id*=Zip]")
	const MMERGE3 = document.querySelector("input[name=MMERGE3]")
 	const zipbyPlaceholder = document.querySelector("input[placeholder ~=Zip]")


const byData = document.querySelector("input[data-name~=zippostal_code]")

let ZipCode = 75462
	if(zipCode.length >=1) {
		zipCode.forEach(elem => elem.value = ZipCode)
	} else if(newsletter_zip_code) newsletter_zip_code.value = ZipCode
	 else if(zipById) zipById.value = ZipCode
	 else if(zipByName) zipByName.value = ZipCode
	 else if(zipByNameTwo)  zipByNameTwo.value = ZipCode
	 else if(zipByNameThree) zipByNameThree.value = ZipCode
	  
	else if(zipByIdTwo) zipByIdTwo.value = ZipCode
	else if(zipByIdThree) zipByIdThree.value = ZipCode
	else if(zipbyPlaceholder) zipbyPlaceholder.value = ZipCode
	else if(MMERGE3) MMERGE3.value = ZipCode
	else if(byData) byData.value = ZipCode

	 
	//Array.from(document.querySelectorAll('input[type=checkbox]'), item => item.click())
	 Array.from(document.querySelectorAll('input[type=checkbox]:not(input[id*=consent])'), item => item.click())

	console.log("checked")
 

//// title

setTitle()


		///Country
	
	const country = document.querySelector("input[placeholder=Country]")
	const countryTwo = document.querySelector("select[name*=Country]")
	
	const countryById = document.querySelectorAll("select[id*='country']")
	
	const countryThree = document.querySelector("select") 
 	
	const countryInputs = document.querySelector('select')
	
	

  	/* if(countryInputs){
		
	 countryInputs.forEach(elem => {
		if(countryInputs.name.toLowerCase().includes("country")){
			
			let options = countryInputs.querySelectorAll("option")
			
			if(options.length>10){
				countryInputs.value = options[16].value 
				console.log("country options")
			}
		}
	 })  
	
	} */

	if(countryTwo){ countryTwo.value ="Belgium"}
	else if(country) {country.value = "spain" }
	else if(countryById.length>=1){
		countryById.forEach(item=> item.value = item.querySelectorAll('option')[item.querySelectorAll('option').length-15].value)
		console.log("countryById")
	}  
	
	else if(countryThree){
		if(countryThree.querySelectorAll("option").length > 10){
			countryThree.value = "Belgium"
		}else{
			countryThree.value = countryThree.querySelectorAll("option")[countryThree.querySelectorAll("option").length-15].value 
		} 
	}  
	//else if (countryInputs){
//	 countryInputs.value = countryInputs.querySelectorAll("option") ? countryInputs.querySelectorAll("option")[countryInputs.querySelectorAll('option').length-1].value || null
//	}

	let textInputs = document.querySelectorAll('input[type=text]')
	
	if(textInputs.length){
		textInputs.forEach(input => input.value == '' ? input.value = 'john' : null)
	}
	
	//password value

	let passwordByType = document.querySelectorAll('input[type=password]')
	let passwordByID = document.querySelector('input[id*=password]')
	let passwordByname = document.querySelector('input[name*=password]')
	
		
	passwordByType  ? passwordByType.forEach(elem =>  passwordByType.value = 'qlsLDNS654qsd)' ) : null
	passwordByID  ? passwordByType.value = 'qlsLDNS654qsd)' : null
	passwordByname  ? passwordByType.value = 'qlsLDNS654qsd)' : null



////accept cookies
	let btnAccept = document.querySelector('[id*="accept"]')
	btnAccept ? btnAccept.click() : null

	////end
	 
}, 4000) //////438+++1