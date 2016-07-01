/*
	*	Original script by: Shafiul Azam
	*	Version 4.0
	*	Modified by: Luigi Balzano

	*	Description:
	*	Inserts Countries and/or States as Dropdown List
	*	How to Use:

		In Head section:
		----------------
		<script type= "text/javascript" src = "countries.js"></script>
		
		In Body Section:
		----------------
		Select Country (with states):   <select id="country" name ="country"></select>
			
		Select State: <select name ="state" id ="state"></select>

        Select Country (without states):   <select id="country2" name ="country2"></select>
			
		<script language="javascript">
			populateCountries("country", "state");
			populateCountries("country2");
		</script>

	*
	*	License: Free to copy, distribute, modify, whatever you want to.
	*	Aurthor's Website: http://bdhacker.wordpress.com
	*
*/

// P_type
var country_arr = new Array("Dog","Cat");

// P_Breed
var s_a = new Array();
s_a[0]="";
s_a[1]="Airedale Terrier|Akita (American)|Alaskan Malamute|American Cocker Spaniel|Australian Shepherd|Basset Hound|Beagle|Bichon Frise|Boston Terrier|Boxer|Brittany Spaniel|Bulldog|Cairn Terrier|Chesapeake Bay Retriever|Chihuahua|Chinese Shar-Pei|Chow Chow|Collie|Dachshund|Dalmatian|Doberman Pinscher|English Springer Spaniel|German Shepherd Dog|German Shorthaired Pointer|Golden Retriever|Great Dane|Great Pyrenees|Labrador Retriever|Lhasa Apso|Maltese|Mastiff|Miniature Pinscher|Miniature Schnauzer|Newfoundland|Pekingese|Pembroke Welsh Corgi|Pomeranian|Poodle|Pug|Rottweiler|Saint Bernard|Samoyed|Schipperke|Scottish Terrier (Scottie)|Shetland Sheepdog (Sheltie)|Shih-Tzu|Siberian Husky|Weimaraner|West Highland White Terrier|Yorkshire Terrier|OTHERS";
s_a[2]="Abyssinian|American Bobtail|American Curl|American Shorthair|American Wirehair|Balinese|Bengal|Birman|Bombay|British Shorthair|Burmese|Burmilla|Chartreux|Colorpoint Shorthair|Cornish Rex|Devon Rex|Egyptian Mau|European Burmese|Exotic|Havana Brown|Japanese Bobtail|Korat|LaPerm|Maine Coon|Manx|Norwegian Forest Cat|Ocicat|Oriental|Persian|Ragamuffin|Ragdoll|Russian Blue|Scottish Fold|Selkirk Rex|Siamese|Siberian|Singapura|Somali|Sphynx|Tonkinese|Turkish Angora|Turkish Van|OTHERS";

function populateStates( countryElementId, stateElementId ){
	
	var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

	var stateElement = document.getElementById( stateElementId );
	
	stateElement.length=0;	// Fixed by Julian Woods
	stateElement.options[0] = new Option('Choose Breed','');
	stateElement.selectedIndex = 0;
	
	var state_arr = s_a[selectedCountryIndex].split("|");
	
	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function populateCountries(countryElementId, stateElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var countryElement = document.getElementById(countryElementId);
	countryElement.length=0;
	countryElement.options[0] = new Option('Choose Pet Type','-1');
	countryElement.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
	}

	// Assigned all countries. Now assign event listener for the states.

	if( stateElementId ){
		countryElement.onchange = function(){
			populateStates( countryElementId, stateElementId );
		};
	}
}