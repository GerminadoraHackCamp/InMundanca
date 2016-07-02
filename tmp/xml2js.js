var fs = require('fs');
var parser = require('xml2js').parseString;
var allData = {imoveis: []};
fs.readFile('a.xml','utf8', function(err, data) {

    parser(data, function (err, result) {


         var companyName = result.ListingDataFeed.Header[0].Provider[0];
         var companyEmail = result.ListingDataFeed.Header[0].Email[0];
         var companyContactName = result.ListingDataFeed.Header[0].ContactName[0];
         var companyTelephone = result.ListingDataFeed.Header[0].Telephone[0]


    for (var i =0; i < Object.keys(result.ListingDataFeed.Listings[0].Listing).length; i++ ){

         var ivr = result.ListingDataFeed.Listings[0].Listing[i].ListingID[0];

         var priceNode = result.ListingDataFeed.Listings[0].Listing[i].Details[0].ListPrice;
         var price = 0;
         if (priceNode != null) {
            price = priceNode[0]._;
         }

         var reference = result.ListingDataFeed.Listings[0].Listing[i].Title[0];
         var description = result.ListingDataFeed.Listings[0].Listing[i].Details[0].Description[0];
         var transactiontype = result.ListingDataFeed.Listings[0].Listing[i].TransactionType[0];
         var lastupdate = result.ListingDataFeed.Listings[0].Listing[i].ListDate[0];
         var street = result.ListingDataFeed.Listings[0].Listing[i].Location[0].Address[0];
         var number = result.ListingDataFeed.Listings[0].Listing[i].Location[0].StreetNumber[0];
         var neighborhood = result.ListingDataFeed.Listings[0].Listing[i].Location[0].Neighborhood[0];
         var postal = result.ListingDataFeed.Listings[0].Listing[i].Location[0].PostalCode[0];
         var city = result.ListingDataFeed.Listings[0].Listing[i].Location[0].City[0];
         var state = result.ListingDataFeed.Listings[0].Listing[i].Location[0].State[0].$.abbreviation;
         if (result.ListingDataFeed.Listings[0].Listing[i].Location[0].Latitude == null && result.ListingDataFeed.Listings[0].Listing[i].Location[0].Latitude == null ){
           var latitude=0;
           var longitude=0;
         }else{
           var latitude = result.ListingDataFeed.Listings[0].Listing[i].Location[0].Latitude[0];
           var longitude = result.ListingDataFeed.Listings[0].Listing[i].Location[0].Longitude[0];
         }
         var name  = result.ListingDataFeed.Listings[0].Listing[i].ContactBroker[0].BrokerName[0];
         var email = result.ListingDataFeed.Listings[0].Listing[i].ContactBroker[0].BrokerEmail[0];
         var phone = result.ListingDataFeed.Listings[0].Listing[i].ContactBroker[0].BrokerTelephone[0];






var data =       {
             "ivr" : ivr,
             "user" : "55115a0bef37db5452c31905",
             "reference" : reference,
             "price" : price,
             "url" : "https://translate.google.com.br/",
             "description" : description,
             "lastupdate" : lastupdate,
             "transactiontype" : transactiontype,
             "broker" : {
                 "phone" : phone,
                 "email" : email,
                 "name" : name
             },
             "address" : {
                 "country" : "bra",
                 "postal" : postal,
                 "state" : state,
                 "city" : city,
                 "complement" : "",
                 "neighborhood" : neighborhood,
                 "number" : number,
                 "street" : street,
                 "latitude": latitude,
                 "longitude": longitude
             },
          };

	allData.imoveis.push(data);













}


	process.stdout.write(JSON.stringify(allData));




    });
});

