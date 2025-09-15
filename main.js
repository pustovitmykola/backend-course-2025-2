	const valcode = " JPY";
	const date = "20240127";

	let mainUrl = new URL(
 	 "NBUStatService/v1/statdirectory/inflation",
 	 "https://bank.gov.ua/",
	);

	mainUrl.searchParams.append("valcode", valcode);
	mainUrl.searchParams.append("date", date);
	mainUrl.searchParams.append("json", "");

	console.log(mainUrl.toString());
