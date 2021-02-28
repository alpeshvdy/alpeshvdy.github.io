// CR keywords highlighter

keywords = ["fraud", "arrest", "alleged", "imprisonment", "Inmate", "prison", "crime", "Warrant", "connect", "faces", "facing", "drug", "cocaine", "driving", "meth", "plea", "escort", "sentence", "robbery", "convictions", "armed", "arraignment", "accuse", "sex", "harassment", "threaten", "rape", "criminal", "MURDER", "forgery", "theft", "charge", "offens", "burglaries", "assault", "crash", "reported", "hit and run", "Influence", "larceny", "breaking and entering", "abduction", "arson", "trafficking", "hijacking", "homicide", "unpremeditated", "manslaughter", "patricide", "euthanasia", "smuggling", "terror", "violence", "shoplifting", "vandalism", "delinquent", "juvenile", "penalty", "suspend", "forfeiture", "fine", "custody", "custodial", "trial", "guilty", "rehabilitation", "shoot", "thief", "suspect", "illegal", "jail", "inmates", "offender"]; 
for (j = 0; j < keywords.length; j++){
for (i = 0; i < document.querySelectorAll("h3").length; i++) { function highlight(text) {
document.querySelectorAll("h3")[i].innerHTML = document.querySelectorAll("h3")[i].innerHTML.replace(
new RegExp(text + '(?!([^<]+)?<)', 'gi'), '<mark>$&</mark>');} highlight(keywords[j]);}}

// removing blacklisted sites

var URLs = ["mugshots.com", "www.mugshotsonline.com", "arrestfacts.com", "www.rapsheetz.com", "en.rapsheetz.com", "www.mylife.com", "www.crimeincharlotte.com", "crimeinformer.com", "www.findmugshots.com", "www.browardpublicrecords.com", "escambiamugshots.com", "www.theyarrested.me", "www.texascrimelog.com", "www.jailbase.com", "www.themostwanted.net", "golookup.com", "tulsamugs.com", "www.tulsamugs.com", "www.policearrests.com", "jailalert.com", "www.tricountybusts.com", "www.insideprison.com", "freecourtcase.com", "www.freecourtcase.com", "www.courtregistry.org", "boyntonbusted.com", "www.bailbondsearch.com", "www.lookwhogotbusted.com", "lookwhogotbusted.com", "www.localcrimenews.com", "casetext.com", "www.pacermonitor.com", "cdn.pacermonitor.com", "www.stlmugshots.com", "locatorinmate.com", "www.maricopapublicrecords.com", "maricopapublicrecords.com", "unicourt.com", "www.chitownmugshots.com", "chitownmugshots.com", "www.bustedmugshots.com", "bustedmugshots.com", "theinmatesearch.org", "www.inmateaid.com", "dockets.justia.com", "www.hireexfelon.com", "www.findmugshots.com", "arrestfiles.org", "law.justia.com", "www.orangepublicrecords.com", "www.knoxpublicrecords.com", "writeaprisoner.com", "caselaw.lp.findlaw.com", "supreme.lp.findlaw.com", "charlotte.mugshot.press", "bustedinmobile.com", "www.bustedinmobile.com", "arrestfiles.org", "jailed.info", "www.mecklenburgpublicrecords.com", "mecklenburgpublicrecords.com", "www.comomugshots.com", "www.docketalarm.com", "courtlistener.com", "www.courtlistener.com", "florida.arrests.org", "arrests.org", "palmbeachpublicrecords.com", "www.palmbeachpublicrecords.com", "orangepublicrecords.com", "www.orangepublicrecords.com", "mugshotsleecounty.com", "www.mugshotsleecounty.com", "californiamugshots.com", "www.californiamugshots.com", "mugshotsatlanta.com", "www.mugshotsatlanta.com", "www.whitepages.com", "whitepages.com", "clustrmaps.com", "www.clustrmaps.com", "www.spokeo.com", "spokeo.com", "clustrmaps.com", "www.clustrmaps.com", "voterrecords.com", "www.voterrecords.com", "www.myheritage.com", "myheritage.com", "www.ancestry.com.au", "www.ancestry.com", "ancestry.com", "www.truepeoplesearch.com", "truepeoplesearch.com", "checkpeople.com", "www.checkpeople.com", "www.beenverified.com", "beenverified.com", "www.peoplelooker.com", "peoplelooker.com", "radaris.com", "www.radaris.com", "www.locatefamily.com", "www.peoplefinders.com", "www.instantcheckmate.com", "www.peekyou.com", "www.fastpeoplesearch.com", "www.smartbackgroundchecks.com", "www.truthfinder.com", "www.classmates.com", "www.newspapers.com", "www.checkthem.com", "newspaperarchive.com", "books.google.co.in", "books.google.com"];
var value = document.getElementsByClassName("iUh30");
for (x = 0; x < value.length; x++) { 
for (y = 0; y < URLs.length; y++){
for (z = 0; z < value[x].textContent.split(" ").length; z++){

    if (value[x].textContent.split(" ")[z] == URLs[y]){
        value[x].parentElement.parentElement.parentElement.parentElement.innerHTML = "<cite class='iUh30'></cite>";
    } else if  (value[x].textContent.split(".")[z] == "blogspot"){
        value[x].parentElement.parentElement.parentElement.parentElement.innerHTML = "<cite class='iUh30'></cite>";
    } else if  (value[x].textContent.split(".")[z] == "newgrounds"){
        value[x].parentElement.parentElement.parentElement.parentElement.innerHTML = "<cite class='iUh30'></cite>";
    }
}
}
}
