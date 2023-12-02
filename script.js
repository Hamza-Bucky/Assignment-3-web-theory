
//API IS TAKEN FROM USMAN LIVE

//read data
$(document).ready(function() {
    
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        success: function(data) {
            
            console.log(data);

        },
        error: function(error) {
            console.log("Error fetching data:", error);
        }
    });
});

//Create Data
$(document).ready(function() {
    
    var newRecipe = {
        title: "New Recipe",
        body:"this is the body of recipe"
    };


    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newRecipe),
        success: function(data) {
            console.log("Recipe created :", data);
        },
        error: function(error) {
            console.log("Error creating recipe:", error);
        }
    });
});


//Update data
$(document).ready(function() {
    
    var updatedRecipe = {
        title: "Updated Recipe",
        body:"Updated recipe body is here."
    };

    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/656b09808e87450014d765b0",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(updatedRecipe),
        success: function(data) {
            console.log("Recipe updated:", data);
        },
        error: function(error) {
            console.log("Error updating recipe:", error);
        }
    });
});

//Delete Data

$(document).ready(function() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/656b09808e87450014d765b0",
        method: "DELETE",
        success: function(data) {
            console.log("Recipe deleted:", data);
        },
        error: function(error) {
            console.log("Error deleting recipe:", error);
        }
    });
});
