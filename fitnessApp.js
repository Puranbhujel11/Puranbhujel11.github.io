// use d3. to open the .json file()
// use d3.json() to fulfill a promise (request)
d3.json("data.json").then(
    function(data)
    {
        //console.log(data);
        // the data is in an array of key-value pairs
        /*
               {
                    "activity":"Cycling, mountain bike, bmx",
                    "calories burned per hour":675
               }
        */
       // create a array of activities and the calories burned
       // version 1
       /*
       let activitiesList = []; // creates an empty array
       // use a loop that runs through each JS Object in the Array from
       // data.json
       for (var i = 0; i < data.length; i++)
       {
            activitiesList.push(data[i]["activity"]); // get the "activity"
       }

       console.log(activitiesList);
       */
       // version 2
       /*
       let activitiesList = data.map(
            function(entry)
            {
                return entry["activity"];
            }
       );
       */
      let activitiesList = data.map(entry => entry["activity"]);
        console.log(activitiesList);
      let activityCaloriesList = data.map(entry => entry["calories burned per hour"]);
        console.log(activityCaloriesList);

      // make a plot for all of the activities
      let trace01 = {
        x: activitiesList,
        y: activityCaloriesList,
        text: activitiesList,
        type: "bar"
      };

      // make the data array
      let data01 = [trace01];

      // apply the layout
      let layout01 = {
        title: "Calories Burned Per Activity"
      }

      Plotly.newPlot("plot01", data01, layout01);

      // second plot - filter for activities that burn 1200 or more calories per hour
      // make a custom filtering function
      function over1200calories(activity)
      {
        return activity["calories burned per hour"] > 1200;
      }

      over1200CalorieActivities = data.filter(over1200calories); // applies the filter

      console.log(over1200CalorieActivities);

      let trace02 = {
        x: over1200CalorieActivities.map(activity => activity["activity"]),
        y: over1200CalorieActivities.map(activity => activity["calories burned per hour"]),
        text: over1200CalorieActivities.map(activity => activity["activity"]),
        type: "bar"
      }

      let data02 = [trace02];

      let layout02 = {
        title: "Activities that burn over 1,200 calories per hour"
      }

      Plotly.newPlot("plot02", data02, layout02);
    }
);