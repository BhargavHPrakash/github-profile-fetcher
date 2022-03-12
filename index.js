// this it basic to get the data.
// fetch('https://api.github.com/users/yuvraj')
// 	.then(response => response.json())
// 	.then(json => console.log(json))

// this is dynamic way to search, but the data is in json foem so only in console it can be viewed
// function getdatagit() {
// 	var userinput = document.getElementById('github_userinput').value;
// 	console.log(userinput);
// 	fetch('https://api.github.com/users/'+userinput)
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// }

// this is dynamic way and converts json value in web(thml) also
function getdatagit() {

	// console.log(document.querySelector("body").innerHTML);
	var userinput = document.getElementById('github_userinput').value;
	if(userinput == ""){
		alert("Please enter a user name")
		return
	}
	fetch('https://api.github.com/users/'+userinput)
	.then(response => {
		// console.log(response)
		if(response.ok) { // this "response.ok" is a obj and property respectively, "ok" is like status code 200(correct user name) else it would be 404. in other apis they may use "success" insted of "ok"
			return response;
		} else {
			throw response;
		}
	})
	.then(response => response.json())
	.then(data => {
		// console.log(data.avatar_url, data.id, data.login)  // in console (from the list we can select what ever we want and give "data.___")
		const displayData = document.createElement("p")
		displayData.innerHTML = "<b>Location: </b>"+data.location+"<br>"+"<b>Bio: </b>"+data.bio+"<br>"+"<b>Followers: </b>"+data.followers+"<br>"+"<b>Following: </b>"+data.following+"<br>"+"<b>Profile link: </b>"+data.html_url+"<br>"+"<b>E-mail: </b>"+data.email // in browser (for avatar only url will be given we need to load it.)
		displayData.id = "displayData"
		// displayData.style.fontSize = "1.5rem"

		const name_heading = document.createElement("p")
		name_heading.id = "name_heading"
		// name_heading.style.fontSize = "1.5rem"
		if (data.name == null) {
			name_heading.innerText = "-name not given by user-"
		} else {
			name_heading.innerText = data.name
		}

		const displayData_field = document.querySelector("#displayData_field")
		displayData_field.prepend(name_heading)
		displayData_field.append(displayData)
		// var image = document.getElementById('imgchange') // this was used to change the image(github logo) on the landing page, but it wont look good soo removed it.
		// image.src = data.avatar_url
		// image.style.width = '30%'
		// image.style.height = '30%'
		
		var anoimg = document.getElementById('anotherimg')
		anoimg.src = data.avatar_url
		// anoimg.style.width = '16rem'
		// anoimg.style.height = '12rem'

		// <div id="display_bg">
		// <div id="displayData_field">

		document.querySelector("#display_bg").style.display = "block"
		// document.querySelector("#display_bg").style.opacity = "1"

		document.querySelector("#displayData_field").style.display = "block"
		// document.querySelector("#displayData_field").style.opacity = "1"

		setTimeout(()=>{
			document.querySelector("#display_bg").style.opacity = "1"
			document.querySelector("#displayData_field").style.opacity = "1"
		},200)

		}).catch(err => {
			if(err.status == 404) {
				alert("User does not exist!");
			} else {
				alert("Unexpected error occured!, Please try again later!")
			}
		})
}

function closegit() {
	// console.log(document.querySelector("body").innerHTML);

	document.querySelector("#display_bg").style.opacity = "0"
	// document.querySelector("#display_bg").style.display = "none"

	document.querySelector("#displayData_field").style.opacity = "0"
	// document.querySelector("#displayData_field").style.display = "none"

	// document.querySelector("#displayData").innerHTML = ""
	// document.querySelector("#name_heading").innerHTML = ""

	setTimeout(()=>{
		document.querySelector("#display_bg").style.display = "none"
		document.querySelector("#displayData_field").style.display = "none"
		document.querySelector("#displayData").remove()
		document.querySelector("#name_heading").remove()
	},2000)
}






		// const social = document.createElement("p")
		// social.id = "social"
		// social.innerHTML = "Contact me @"+"<br>"+"<br>"+"<b>Github </b>"+"<b>linked-in </b>"+"<b>Instagram </b>"// in browser (for avatar only url will be given we need to load it.)
		
		// const body = document.querySelector("body")
		// body.append(social)
