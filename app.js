$(function () {
    let database = firebase.database();
    //sets a variable to the firebase database so that we don't have to keep retyping it

    database.ref("trainArr/").orderByChild("dateAdded")
    .on("child_added", function(snapshot) {
        
        //sets a variable to the data recorded on each child append
        let currentTrain = snapshot.val();
        
        //set var/let to bring in moment data
        let timeNow = moment(); //create time now
        let freqTime = currentTrain.freq; //set frequency time for math
        let firstTime = moment(currentTrain.first, "hh:mm").subtract(1, "years");
            //"Adding" the subtract 1 year because we need the create a time table that will let you subtract start-time from current-time
        
        //starting the math
            let diffTime = moment().diff(moment(firstTime), "minutes");
            console.log("DIFFERENCE IN TIME: " + diffTime);

        let remainder = diffTime % freqTime
            console.log("Remainder: " + remainder)

        let minutesAway = freqTime - remainder
        let nextTrain = moment().add(minutesAway, "minutes");




        //defining table to dynamically push with database
        var newRow = $("<tr class='tableRow'>");
        var trainName = $("<td class='name'>").text(currentTrain.name);
        var destination = $("<td class='dest'>").text(currentTrain.dest);
        var frequency = $("<td class='role'>").text(currentTrain.freq);
        var firstTrain = $("<td class='role'>").text(currentTrain.first);
        //need to define next arrival and min away with math
        var nextArrival = $("<td class='arrival'>").text(moment(nextTrain).format("hh:mm A"));
        var minAway = $("<td class='wait-time'>").text(minutesAway);

        //each new train will take data and place in this table
        newRow.append(trainName)
            .append(destination)
            .append(frequency)
            .append(firstTrain)
            .append(nextArrival)
            .append(minAway);
        
        $("#train-sched").append(newRow);
    })

    //pull data from your form
    $("form").off("submit").on("submit", function (e) {
        e.preventDefault();

        //pull the input into a var/let to create current train
        let name = $("#train-name").val().trim();
        let dest = $("#destination").val().trim();
        let freq = $("#frequency").val().trim();
        let first = $("#first-train").val().trim();

        //clear inputs
        $("#train-name").val("");
        $("#destination").val("");
        $("#train-name").val("");
        $("#first-train").val("")
        $("#frequency").val("")

        //append latest train the the trainArr/ firebase.ref
        database.ref("trainArr").push({
            "name": name,
            "dest": dest,
            "freq": freq,
            "first": first

        });
    })
})
