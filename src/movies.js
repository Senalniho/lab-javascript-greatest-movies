// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.forEach((movie) => {
    directors.push(movie.director);
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  moviesArray.forEach((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      count++;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const averageScore = totalScore / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Filter the array to get only drama movies
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  // If there are no drama movies, return 0
  if (dramaMovies.length === 0) {
    return 0;
  }

  // Calculate the total score of drama movies
  const totalScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  // Calculate the average score
  const averageScore = totalScore / dramaMovies.length;

  // Return the average score rounded to two decimal places
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Create a copy of the array to avoid mutating the original array
  const moviesCopy = [...moviesArray];

  // Sort the copied array by year and title
  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Create a copy of the array to avoid mutating the original array
  let moviesCopy = [...moviesArray];

  // Sort the copied array alphabetically by title
  moviesCopy.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  // Extract only the titles of the sorted movies
  let titles = moviesCopy.map((movie) => movie.title);

  // Return the first 20 titles, or all titles if there are fewer than 20
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // Create a new array to store the transformed movies
  let newArray = [];

  // Iterate over each movie in the input array
  for (let i = 0; i < moviesArray.length; i++) {
    // Create a copy of the current movie object to avoid mutating the original
    let movie = { ...moviesArray[i] };

    // Extract hours and minutes from the duration string
    let hours = parseInt(movie.duration.split("h")[0]) || 0; // Handle cases where 'h' might not be present
    let minutes = parseInt(movie.duration.split("m")[0].split(" ")[1]) || 0; // Handle cases where 'm' might not be present

    // Calculate total duration in minutes
    let durationInMinutes = hours * 60 + minutes;

    // Update the duration property of the copied movie object
    movie.duration = durationInMinutes;

    // Push the updated movie object into the new array
    newArray.push(movie);
  }

  // Return the new array with transformed movie objects
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {
//   // Return null if the array is empty
//   if (moviesArray.length === 0) {
//     return null;
//   }

//   let maxAvg = -Infinity; // Initialize maxAvg to a very low value
//   let bestYear = null;

//   // Create an object to store cumulative ratings and counts for each year
//   let yearStats = {};

//   // Iterate through the moviesArray
//   for (let i = 0; i < moviesArray.length; i++) {
//     let movie = moviesArray[i];
//     let year = movie.year;
//     let rating = movie.rating;

//     // If the yearStats object doesn't have an entry for this year, initialize it
//     if (!yearStats[year]) {
//       yearStats[year] = {
//         totalRating: 0,
//         movieCount: 0,
//       };
//     }

//     // Update totalRating and movieCount for the current year
//     yearStats[year].totalRating += rating;
//     yearStats[year].movieCount++;

//     // Calculate average rating for the current year
//     let avgRating = yearStats[year].totalRating / yearStats[year].movieCount;

//     // Update maxAvg and bestYear if we find a new maximum average rating
//     if (avgRating > maxAvg || (avgRating === maxAvg && year < bestYear)) {
//       maxAvg = avgRating;
//       bestYear = year;
//     }
//   }

//   return bestYear;
// }

function bestYearAvg(moviesArray) {
  // Return null if the array is empty
  if (moviesArray.length === 0) {
    return null;
  }

  // Initialize variables to keep track of the best year and its average rating
  let bestYear = null;
  let maxAvgRating = -Infinity;

  // Create an object to store cumulative ratings and counts for each year
  let yearStats = {};

  // Iterate through each movie in the moviesArray
  for (let movie of moviesArray) {
    let year = movie.year;
    let rating = movie.rating;

    // Initialize yearStats for the current year if it doesn't exist
    if (!yearStats[year]) {
      yearStats[year] = {
        totalRating: 0,
        movieCount: 0,
      };
    }

    // Update totalRating and movieCount for the current year
    yearStats[year].totalRating += rating;
    yearStats[year].movieCount++;

    // Calculate the average rating for the current year
    let avgRating = yearStats[year].totalRating / yearStats[year].movieCount;

    // Update bestYear and maxAvgRating if we find a new maximum average rating
    if (
      avgRating > maxAvgRating ||
      (avgRating === maxAvgRating && year < bestYear)
    ) {
      maxAvgRating = avgRating;
      bestYear = year;
    }
  }

  return bestYear;
}
